import React from "react";

import Balance from "../../../assets/balance.svg";

export interface BalanceIndicatorProps {
	balance: string | undefined;
}

export const BalanceIndicator = ({ balance }: BalanceIndicatorProps) => (
	<div className="flex flex-row">
		<div className="rounded-full h-13 w-13 border-2 border-dark-1 flex items-center">
			<img src={Balance} className="h-4 w-4 m-auto" />
		</div>

		<div className="flex flex-col ml-3">
			<span className="text-gray-2">BALANCE</span>
			<span className="text-white">{balance || "-"} DARK</span>
		</div>
	</div>
);
