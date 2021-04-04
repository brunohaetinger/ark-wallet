import { Transaction } from "@arkecosystem/client";
import { Wallets } from "@arkecosystem/client/dist/resources/wallets";
import React, { useState } from "react";

import Logo from "../assets/logo.svg";
import { useConnection } from "../contexts/Connection";
import { useWallet } from "../contexts/Wallet";
import Dropdown from "../renderer/components/Dropdown/Dropdown";
import TransactionTable from "../renderer/components/TransactionTable/TransactionTable";

// TODO: move wallets
const initialWalletsIds = [
	"DR7WwjwGdw6mXoBrispUcTUHVV31AkAfs5",
	"D6Z26L69gdk9qYmTv5uzk3uGepigtHY4ax",
	"DNPBUxxGQUKDPX3XKUXa3pc4GK8yz7L97T",
	"DRgF3PvzeGWndQjET7dZsSmnrc6uAy23ES",
	"DRHPX3fxEvXrKPmuy9RstC2gqNWdz5DDNk",
];

const WalletDetails = () => {
	const { activeWallet, setActiveWallet } = useWallet();
	const connection = useConnection();
	const [transactions, setTransactions] = useState<Transaction[] | null>(
		null
	);

	const changeActiveWallet = async (walletId: string) => {
		try {
			const res = await new Wallets(connection).get(walletId);
			console.log(res.body.data);
			setActiveWallet(res.body.data);

			//transactions
			const transactionRes = await new Wallets(connection).transactions(
				walletId,
				{
					page: 1,
					limit: 15,
				}
			);
			setTransactions(transactionRes.body.data);
			console.log(transactionRes.body.data);
		} catch (err) {
			console.log("Error while fetching wallet", err);
		}
	};

	return (
		<div className="w-full h-full">
			<div className="bg-green-400 h-52 flex justify-center items-center px-10 py-12 bg-dgreen-3">
				<div className="flex justify-between bg-black w-full text-white h-28 py-7.5 px-10 divide-x rounded-lg">
					<div className="pr-10 w-1/3 flex items-center h-13">
						<img src={Logo} className="h-13 w-13" alt="logo" />
						<span className="ml-3">ARK Wallet</span>
					</div>
					<Dropdown
						className="px-10 w-2/3 h-13"
						options={initialWalletsIds}
						onSelect={changeActiveWallet}
					/>
					<div className="pl-10 w-1/3 flex items-center h-13">
						<span>Balance is: {activeWallet?.balance}</span>
					</div>
				</div>
			</div>
			<div className="w-full h-full p-12">
				<TransactionTable
					transactions={transactions ? transactions : []}
				/>
			</div>
		</div>
	);
};

export default WalletDetails;
