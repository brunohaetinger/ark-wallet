const defaultConfig = require("tailwindcss/defaultConfig");

module.exports = {
	purge: [],
	theme: {
		screens: {
			xs: "375px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			xxl: "1360px",
		},
		fontFamily: {
			sans: ["Inter", ...defaultConfig.theme.fontFamily.sans],
		},
		extend: {
			colors: {
				white: "#FFFFFF", // Primary backgrouynd and white text
				"lgray-1": "#F0F4F3", // Secondary background/hover, for table
				"lgray-2": "#EAEDEC", // footer background
				"gray-1": "#C7C9CD", // Input field line
				"gray-2": "#B6BEBE", // All gray text (white and dark background) and all line (white background)
				"gray-3": "#5A5D60", // Secondary text
				"dark-1": "#2F3333", // Colour of the button and line/icon for dark background
				"dark-2": "#1F2121", // Primary text and icon
				"dark-3": "#0C0D0D", // Colour hover of the button. Colour for background
				"dgreen-1": "#B1D3CF", //Colour icon for dark background
				"dgreen-2": "#65B6AE", // Colour link was pressed
				"dgreen-3": "#029383", // Colour of the button, background
				"dgreen-4": "#046E62", // Hover buttons and icons
				red: "#C93A3A", // Error
				yellow: "#FBC457", // Colour icon for dark background
			},
			height: {
				12.5: "3.125rem",
				13: "3.25rem",
				15: "3.75rem",
			},
			width: {
				12.5: "3.125rem",
				13: "3.25rem",
				15: "3.75rem",
			},
			padding: {
				7.5: "1.875rem",
			},
			fontFamily: {
				sans: ["Inter", ...defaultConfig.theme.fontFamily.sans],
			},
		},
	},
	variants: {},
	plugins: [],
};
