import { Transaction } from "@arkecosystem/client";
import React, { memo, useCallback, useMemo } from "react";

import { useWalletContext } from "../../../contexts/Wallet";
import { HumanBigInt } from "../HumanBigInt";
import { HumanDate } from "../HumanDate";
import { TruncateMiddle } from "../TruncateMiddle";

export interface TransactionTableProps {
	transactions: Transaction[] | null;
}
const COLUMNS: any[] = [
	{
		Header: "Txid",
		accessor: "id",
		class: "w-1/8",
	},
	{
		Header: "Sender",
		accessor: "sender",
		class: "w-1/8",
	},
	{
		Header: "Recipient",
		accessor: "recipient",
		class: "w-1/8",
	},
	{
		Header: "Timestamp",
		accessor: "timestamp.human",
		class: "w-1/8",
	},
	{
		Header: "Amount",
		accessor: "amount",
		class: "w-1/8",
	},
	{
		Header: "Fee",
		accessor: "fee",
		class: "w-1/8",
	},
];

const TransactionTable = ({ transactions }: TransactionTableProps) => {
	const { activeWallet } = useWalletContext();
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => transactions, [transactions]);

	const textLinkClass = useCallback(
		(address: string) =>
			address === activeWallet?.address
				? ""
				: "text-dgreen-3 font-semibold",
		[activeWallet]
	);

	if (!data || !data.length || !columns) return null;

	return (
		<table className="border-collapse table-fixed w-full">
			<thead>
				<tr>
					{columns.map((col) => (
						<th
							scope="col"
							key={col.Header?.toString()}
							className="border text-gray-2 text-sm"
						>
							{col.Header}
						</th>
					))}
				</tr>
			</thead>
			<tbody className="divide-y">
				{data.map((transaction) => (
					<tr
						className="divide-x hover:bg-lgray-1"
						key={transaction.id}
					>
						<td className="overflow-hidden text-center">
							<TruncateMiddle
								text={transaction.id}
								className="text-dgreen-3 font-semibold"
							/>
						</td>
						<td className="overflow-hidden text-center">
							<TruncateMiddle
								text={transaction.sender}
								className={textLinkClass(transaction.sender)}
							/>
						</td>
						<td className="overflow-hidden text-center">
							<TruncateMiddle
								text={transaction.recipient}
								className={textLinkClass(transaction.recipient)}
							/>
						</td>
						<td className="overflow-hidden text-center">
							<HumanDate
								unixTimestamp={transaction.timestamp.unix}
							/>
						</td>
						<td className="overflow-hidden text-center">
							<HumanBigInt bigInt={transaction.amount} /> DARK
						</td>
						<td className="overflow-hidden text-center">
							<HumanBigInt bigInt={transaction.fee} /> DARK
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default memo(TransactionTable);
