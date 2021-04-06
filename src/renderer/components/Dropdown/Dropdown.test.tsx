import { fireEvent, render } from "@testing-library/react";
import React from "react";

import { Dropdown } from "./Dropdown";

describe("Dropdown", () => {
	it("should not let options visible before clicking in DropdownHeader", () => {
		const { queryByText } = render(
			<Dropdown
				title="Select"
				options={["op1", "op2"]}
				onSelect={() => null}
			/>
		);
		expect(queryByText("op1")).toBeFalsy();
	});

	it("should render DropdownMenu after clicking on Header", () => {
		const { getByText } = render(
			<Dropdown
				title="Select"
				options={["op1", "op2"]}
				onSelect={() => null}
			/>
		);

		fireEvent(
			getByText("Select"),
			new MouseEvent("click", {
				bubbles: true,
				cancelable: true,
			})
		);
		expect(getByText("op1")).not.toBeEmptyDOMElement();
	});
});
