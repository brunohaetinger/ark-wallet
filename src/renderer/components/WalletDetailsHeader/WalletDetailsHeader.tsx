import React from "react";

import SVGS from "../../../assets/svgs";
import { useWalletContext } from "../../../contexts/Wallet";
import { BalanceIndicator } from "../BalanceIndicator";
import { Dropdown } from "../Dropdown";

const { Logo } = SVGS;

type Props = {
	walletsIds: string[];
};

export const WalletDetailsHeader = ({ walletsIds }: Props) => {
	const {
		activeWallet,
		fetchWallet,
		isLoading: isLoadingWallet,
	} = useWalletContext();

	const changeActiveWallet = (walletId: string) => {
		try {
			fetchWallet(walletId);
		} catch (err) {
			console.log("Error while fetching wallet", err);
		}
	};

	return (
		<div className="flex flex-col lg:flex-row justify-between bg-black w-full text-white h-78 lg:h-28 py-7.5 px-10 lg:divide-x divide-x-0 divide-dark-1 rounded-lg">
			<div className="pr-10 flex items-center h-13 ">
				<img src={Logo} className="h-13 w-13 min-w-13" alt="logo" />
				<h1 className="ml-3 font-extrabold text-4x1 whitespace-nowrap xl:block lg:hidden">
					ARK Wallet
				</h1>
			</div>
			<hr className="lg:hidden" />
			<Dropdown
				title="Select a wallet"
				className="lg:px-10 lg:w-2/3 h-13"
				options={walletsIds}
				onSelect={changeActiveWallet}
			/>
			<div className="lg:pl-10 lg:w-1/3 flex items-center h-13">
				<BalanceIndicator
					balance={activeWallet?.balance || ""}
					isLoading={isLoadingWallet}
				/>
			</div>
		</div>
	);
};

WalletDetailsHeader.displayName = "WalletDetailsHeader";
