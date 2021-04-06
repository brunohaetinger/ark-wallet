process.env.TZ = "UTC";

module.exports = {
	preset: "ts-jest",
	automock: false,
	collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!<rootDir>/dist/*"],
	coverageDirectory: "coverage",
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	transform: {
		"^.+\\.(ts|tsx)?$": "ts-jest",
		"^.+\\.(js|jsx)$": "babel-jest",
	},
	moduleNameMapper: {
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
			"<rootDir>/assetsTransformer.js",
		"\\.(css|less)$": "<rootDir>/assetsTransformer.js",
	},
};
