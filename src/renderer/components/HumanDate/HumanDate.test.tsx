import { render } from "@testing-library/react";
import React from "react";

import { HumanDate } from "../HumanDate";

describe("HumanDate", () => {
	it("should render old date, with small unix timestap", () => {
		const { getByText } = render(<HumanDate unixTimestamp={50000} />);
		expect(getByText("01.01.1970")).toBeTruthy();
	});
});
