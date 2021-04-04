import { Transaction } from "@arkecosystem/client";
import React, { memo, useMemo } from "react";

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
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => transactions, [transactions]);

	if (!data || !data.length || !columns) return null;

	return (
		<table className="border-collapse table-fixed w-full">
			<thead>
				<tr>
					{columns.map((col) => (
						<th
							scope="col"
							key={col.Header?.toString()}
							className="border"
						>
							{col.Header}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((transaction) => (
					<tr className="divide-x" key={transaction.id}>
						<td className="overflow-hidden text-center">
							{transaction.id}
						</td>
						<td className="overflow-hidden text-center">
							{transaction.sender}
						</td>
						<td className="overflow-hidden text-center">
							{transaction.recipient}
						</td>
						<td className="overflow-hidden text-center">
							{transaction.timestamp.human}
						</td>
						<td className="overflow-hidden text-center">
							{transaction.amount}
						</td>
						<td className="overflow-hidden text-center">
							{transaction.fee}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default memo(TransactionTable);
