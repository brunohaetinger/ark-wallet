import { Wallet } from "@arkecosystem/client";
import { Wallets } from "@arkecosystem/client/dist/resources/wallets";
import React, { createContext, useCallback, useContext, useState } from "react";

import { Endpoint } from "../utils/endpoint";
import { useConnection } from "./Connection";

export interface WalletContextValue {
	activeWallet: Wallet | undefined;
	fetchWallet: (walletId: string) => Promise<void>;
	getWalletHref: (walletId: string) => string;
	isLoading: boolean;
}

const WalletContext = createContext<WalletContextValue | undefined>(undefined);

type Props = { children: React.ReactNode };

export const WalletProvider = ({ children }: Props) => {
	const [activeWallet, setActiveWallet] = useState<Wallet>();
	const connection = useConnection();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const fetchWallet = useCallback(
		async (walletId: string) => {
			try {
				setIsLoading(true);
				const transactionRes = await new Wallets(connection).get(
					walletId
				);
				setActiveWallet(transactionRes.body.data);
			} catch (error) {
				console.error("Error while fetching wallet", error);
			} finally {
				setIsLoading(false);
			}
		},
		[connection]
	);

	const getWalletHref = useCallback(
		(address: string) =>
			address !== activeWallet?.address ? Endpoint.wallet(address) : "#",
		[activeWallet]
	);

	return (
		<WalletContext.Provider
			value={{ activeWallet, fetchWallet, isLoading, getWalletHref }}
		>
			{children}
		</WalletContext.Provider>
	);
};

export const useWalletContext = () => {
	const context = useContext(WalletContext);
	if (context === undefined) {
		throw new Error("useWallet must be used within a WalletProvider");
	}
	return context;
};
