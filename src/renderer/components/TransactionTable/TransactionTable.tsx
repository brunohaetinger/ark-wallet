import { Transaction } from "@arkecosystem/client";
import React, { memo, useCallback, useMemo } from "react";

import { useViewportSize } from "../../../contexts/Viewport";
import { useWalletContext } from "../../../contexts/Wallet";
import CompactTransactionList from "../CompactTransactionList/CompactTransactionList";
import { HumanBigInt } from "../HumanBigInt";
import { HumanDate } from "../HumanDate";
import { TruncateMiddle } from "../TruncateMiddle";

export interface TransactionTableProps {
	transactions: Transaction[] | null;
}
const COLUMNS: string[] = [
	"Txid",
	"Sender",
	"Recipient",
	"Timestamp",
	"Amount",
	"Fee",
];

const TransactionTable = ({ transactions }: TransactionTableProps) => {
	const { activeWallet } = useWalletContext();
	const { isCompact } = useViewportSize();

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

	return isCompact ? (
		<CompactTransactionList transactions={transactions} />
	) : (
		<table className="border-collapse table-fixed w-full">
			<thead>
				<tr>
					{columns.map((col) => (
						<th
							scope="col"
							key={col.toString()}
							className="border text-gray-2 text-sm"
						>
							{col}
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
