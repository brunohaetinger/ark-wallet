import { render, screen } from "@testing-library/react";
import React from "react";

import { App } from "./App";

test("should render with footer copyrights", () => {
	render(<App />);
	expect(
		screen.findByText("2020 © ARK.io | All rights reserved")
	).toBeTruthy();
});
