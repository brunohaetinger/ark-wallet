import { render } from "@testing-library/react";
import React from "react";

import { ViewportSizeProvider } from "../../../contexts/Viewport";
import { WalletProvider } from "../../../contexts/Wallet";
import TransactionTable from "./TransactionTable";

const customRender = (ui: JSX.Element, { ...renderOptions }) =>
	render(
		<ViewportSizeProvider>
			<WalletProvider>{ui}</WalletProvider>
		</ViewportSizeProvider>,
		renderOptions
	);

describe("TransactionTable", () => {
	it("should not render if transactions array is empty", () => {
		const { container } = customRender(
			<TransactionTable transactions={[]} />,
			{}
		);
		expect(container).toBeEmptyDOMElement();
	});
});
