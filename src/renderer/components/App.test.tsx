import { render } from "@testing-library/react";
import React from "react";

import { App } from "./App";

test("should render with footer copyrights", () => {
	const { queryByText } = render(<App />);
	expect(queryByText("2020 © ARK.io | All rights reserved")).toBeTruthy();
});
