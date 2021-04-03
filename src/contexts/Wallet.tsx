import { Wallet } from "@arkecosystem/client";
import React, { createContext, useState } from "react";

export interface WalletContextValue {
	activeWallet: Wallet | undefined;
	setActiveWallet: React.Dispatch<React.SetStateAction<Wallet | undefined>>;
}

const WalletContext = createContext<WalletContextValue | undefined>(undefined);

type Props = { children: React.ReactNode };

export const WalletProvider = ({ children }: Props) => {
	const [activeWallet, setActiveWallet] = useState<Wallet>();

	return (
		<WalletContext.Provider value={{ activeWallet, setActiveWallet }}>
			{children}
		</WalletContext.Provider>
	);
};

export const useWallet = () => {
	const context = React.useContext(WalletContext);
	if (context === undefined) {
		throw new Error("useWallet must be used within a WalletProvider");
	}
	return context;
};
