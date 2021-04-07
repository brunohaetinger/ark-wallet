import { render } from "@testing-library/react";
import React from "react";

import { HumanBigInt } from "../HumanBigInt";

describe("HumanBigInt", () => {
	it("should not render anything with an empty bigInt", () => {
		const { container } = render(<HumanBigInt bigInt="" />);
		expect(container).toBeEmptyDOMElement();
	});

	it("should render human readable number", () => {
		const { queryByText } = render(
			<HumanBigInt bigInt="2009342693388606" />
		);
		expect(queryByText("20093426.93388606")).toBeTruthy();
	});

	it("should render human readable number with sufix", () => {
		const { queryByText } = render(
			<HumanBigInt bigInt="2009342693388606" sufix={"DARK"} />
		);
		expect(queryByText("20093426.93388606 DARK")).toBeTruthy();
	});
});
