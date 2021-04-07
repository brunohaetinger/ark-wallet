import React from "react";

import { ConnectionProvider } from "../../contexts/Connection";
import { ViewportSizeProvider } from "../../contexts/Viewport";
import { WalletProvider } from "../../contexts/Wallet";
import WalletDetails from "../../pages/WalletDetails";

export const App = () => (
	<div className="h-screen flex flex-col justify-between">
		<ViewportSizeProvider>
			<ConnectionProvider>
				<WalletProvider>
					<WalletDetails />
				</WalletProvider>
			</ConnectionProvider>
		</ViewportSizeProvider>
		<footer className="bg-lgray-2 h-15 flex justify-center items-center">
			{" "}
			<span data-testid="footer__span" className="text-sm text-gray-2">
				2020 © ARK.io | All rights reserved
			</span>{" "}
		</footer>
	</div>
);
