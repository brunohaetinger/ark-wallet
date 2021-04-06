import { render } from "@testing-library/react";
import React from "react";

import { BalanceIndicator } from "./BalanceIndicator";

describe("BalanceIndicator", () => {
	it("should not render value while loading", () => {
		const { getByTestId } = render(
			<BalanceIndicator balance="2133213123" isLoading={true} />
		);
		const amount = getByTestId("balance__amount");
		expect(amount.innerHTML === "-").toBeTruthy();
	});
});
