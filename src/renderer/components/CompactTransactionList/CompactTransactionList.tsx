import { Transaction } from "@arkecosystem/client";
import React, { memo, useCallback, useMemo } from "react";

import { useViewportSize } from "../../../contexts/Viewport";
import { useWalletContext } from "../../../contexts/Wallet";
import { HumanBigInt } from "../HumanBigInt";
import { HumanDate } from "../HumanDate";
import { TruncateMiddle } from "../TruncateMiddle";
import { ListItemRow } from "./ListItemRow";

type Props = {
	transactions: Transaction[] | null;
};

const CompactTransactionList = ({ transactions }: Props) => {
	const { activeWallet } = useWalletContext();
	const { isXS } = useViewportSize();

	const data = useMemo(() => transactions, [transactions]);

	const textLinkClass = useCallback(
		(address: string) =>
			address === activeWallet?.address
				? ""
				: "text-dgreen-3 font-semibold",
		[activeWallet]
	);

	if (!data || !data.length) return null;

	const listItem = (transaction: Transaction) => (
		<div className="flex flex-col py-8">
			<ListItemRow label={"Txid"}>
				<TruncateMiddle
					text={transaction.id}
					className="text-dgreen-3 font-semibold"
				/>
			</ListItemRow>
			<ListItemRow label={"Sender"}>
				{isXS ? (
					<TruncateMiddle
						text={transaction.sender}
						className={textLinkClass(transaction.sender)}
					/>
				) : (
					<span className={textLinkClass(transaction.sender)}>
						{transaction.sender}
					</span>
				)}
			</ListItemRow>
			<ListItemRow label={"Recipient"}>
				{isXS ? (
					<TruncateMiddle
						text={transaction.recipient}
						className={textLinkClass(transaction.recipient)}
					/>
				) : (
					<span className={textLinkClass(transaction.recipient)}>
						{transaction.sender}
					</span>
				)}
			</ListItemRow>
			<ListItemRow label={"Timestamp"}>
				<HumanDate unixTimestamp={transaction.timestamp.unix} />
			</ListItemRow>
			<ListItemRow label={"Amount"}>
				<HumanBigInt bigInt={transaction.amount} sufix={"DARK"} />
			</ListItemRow>
			<ListItemRow label={"Fee"}>
				<HumanBigInt bigInt={transaction.fee} sufix={"DARK"} />
			</ListItemRow>
		</div>
	);

	return (
		<div className="divide-y h-full overflow-y-scroll overscroll-contain">
			{data?.map((t) => listItem(t))}
		</div>
	);
};

export default memo(CompactTransactionList);
