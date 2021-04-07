import React from "react";

import SvgCollection from "../../../assets/svgs";
import { HumanBigInt } from "../HumanBigInt";

export interface BalanceIndicatorProps {
	balance: string | undefined;
	isLoading: boolean;
}

const { Balance } = SvgCollection;

export const BalanceIndicator = ({
	balance,
	isLoading,
}: BalanceIndicatorProps) => (
	<div className="flex flex-row">
		<div className="rounded-full h-13 w-13 border-2 border-dark-1 flex items-center">
			<img src={Balance} className="h-4 w-4 m-auto" />
		</div>

		<div className="flex flex-col ml-3">
			<span className="text-gray-2 font-semibold text-sm">Balance</span>
			<span
				data-testid="balance__amount"
				className="text-white font-bold text-base"
			>
				{balance && !isLoading ? (
					<>
						<HumanBigInt bigInt={balance} sufix={"DARK"} />
					</>
				) : (
					"-"
				)}
			</span>
		</div>
	</div>
);
