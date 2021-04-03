import { Connection } from "@arkecosystem/client";
import React, { createContext } from "react";

const server = "https://dwallets.ark.io";
const client = new Connection(`${server}/api`);

const ConnectionContext = createContext<Connection>(client);

type Props = { children: React.ReactNode };

export const ConnectionProvider = ({ children }: Props) => (
	<ConnectionContext.Provider value={client}>
		{children}
	</ConnectionContext.Provider>
);

export const useConnection = () => {
	const context = React.useContext(ConnectionContext);
	if (context === undefined) {
		throw new Error(
			"useConnection must be used within a ConnectionProvider"
		);
	}
	return context;
};
