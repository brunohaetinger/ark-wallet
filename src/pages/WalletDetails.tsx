import React, { useEffect } from "react";

import { useWalletContext } from "../contexts/Wallet";
import { useTransaction } from "../hooks/useTransaction";
import TransactionTable from "../renderer/components/TransactionTable";
import { WalletDetailsHeader } from "../renderer/components/WalletDetailsHeader/WalletDetailsHeader";

// TODO: move wallets
const initialWalletsIds = [
	"DR7WwjwGdw6mXoBrispUcTUHVV31AkAfs5",
	"D6Z26L69gdk9qYmTv5uzk3uGepigtHY4ax",
	"DNPBUxxGQUKDPX3XKUXa3pc4GK8yz7L97T",
	"DRgF3PvzeGWndQjET7dZsSmnrc6uAy23ES",
	"DRHPX3fxEvXrKPmuy9RstC2gqNWdz5DDNk",
];

const WalletDetails = () => {
	const { activeWallet } = useWalletContext();
	const {
		transactions,
		isLoading,
		fetchWalletTransactions,
	} = useTransaction();

	useEffect(() => {
		try {
			if (activeWallet) {
				fetchWalletTransactions(activeWallet.address);
			}
		} catch (err) {
			console.log("Error while fetching wallet", err);
		}
	}, [activeWallet, fetchWalletTransactions]);

	return (
		<div className="w-full h-full overflow-hidden">
			<div className="h-102 lg:h-52 flex justify-center items-center px-10 py-12 bg-dgreen-3 ">
				<WalletDetailsHeader walletsIds={initialWalletsIds} />
			</div>
			<div className="w-full h-full p-12">
				{!isLoading ? (
					<TransactionTable
						transactions={transactions ? transactions : []}
					/>
				) : (
					<h1 className="text-dark-2 text-center font-bold">
						Loading...
					</h1>
				)}
			</div>
		</div>
	);
};

export default WalletDetails;
