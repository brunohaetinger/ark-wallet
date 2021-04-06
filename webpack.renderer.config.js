module.exports = {
	module: {
		loaders: [{ loader: "file-loader", test: /\.(ttf|eot|svg)$/ }],
		rules: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: ["postcss-loader"],
			},
		],
	},
	resolve: {
		extensions: [".js", ".ts"],
	},
};
