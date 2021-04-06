import { render } from "@testing-library/react";
import React from "react";

import { HumanBigInt } from "../HumanBigInt";

describe("HumanBigInt", () => {
	it("should not render anything with an empty bigInt", () => {
		const { container } = render(<HumanBigInt bigInt="" />);
		expect(container).toBeEmptyDOMElement();
	});

	it("should render human readable number", () => {
		const { container } = render(<HumanBigInt bigInt="2009342693388606" />);
		expect(container.innerText).toEqual("20093426.93388606");
	});
});
