module.exports = {
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		project: "./tsconfig.json",
		parser: "@typescript-eslint/parser",
		sourceType: "module",
	},
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	plugins: [
		"@typescript-eslint",
		"prettier",
		"react",
		"react-hooks",
		"simple-import-sort",
		"unused-imports",
	],
	rules: {
		"@typescript-eslint/ban-ts-comment": "off",
		"@typescript-eslint/ban-types": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-floating-promises": "off",
		"@typescript-eslint/no-misused-promises": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
		"@typescript-eslint/no-unsafe-assignment": "off",
		"@typescript-eslint/no-unsafe-call": "off",
		"@typescript-eslint/no-unsafe-member-access": "off",
		"@typescript-eslint/no-unsafe-return": "off",
		"@typescript-eslint/no-unused-vars": "off",
		"@typescript-eslint/no-var-requires": "off",
		"@typescript-eslint/prefer-regexp-exec": "off",
		"@typescript-eslint/restrict-template-expressions": "off",
		"@typescript-eslint/unbound-method": "off",
		"arrow-body-style": ["error", "as-needed"],
		"prefer-const": [
			"error",
			{
				destructuring: "all",
			},
		],
		"prettier/prettier": [
			"off",
			{
				endOfLine: "auto",
			},
		],
		"react-hooks/exhaustive-deps": "warn",
		"react-hooks/rules-of-hooks": "error",
		"react/self-closing-comp": "error",
		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error",
		"unused-imports/no-unused-imports-ts": "error",
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:import/typescript",
	],
	settings: {
		react: {
			version: "detect",
		},
	},
	globals: {
		__static: true,
	},
};
