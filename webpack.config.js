const dev = process.env.NODE_ENV !== "production";
const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const plugins = [
	new MiniCssExtractPlugin({
		filename: "styles.css",
	}),
	// https://github.com/webpack/changelog-v5/issues/10
	new webpack.ProvidePlugin({
		Buffer: ["buffer", "Buffer"],
	}),
];

module.exports = [
	{
		mode: dev ? "development" : "production",
		context: path.join(__dirname, "src"),
		devtool: dev ? "source-map" : false,
		entry: {
			client: "./client/index.jsx",
		},
		resolve: {
			modules: [
				path.resolve("./src"),
				"node_modules",
			],
			extensions: ["", ".js", ".jsx"],
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /(node_modules|bower_components)/,
					loader: "babel-loader",
				}, 
				{
					test: /\.css$/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
						},
						{
							loader: "css-loader",
							options: {
								importLoaders: 1,
								modules: true,
							},
						},
					],
					include: /\.module\.css$/,
				},
				{
					test: /\.css$/,
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
						}, 
						"css-loader"
					],
					exclude: /\.module\.css$/,
				},
			],
		},
		output: {
			path: path.resolve(__dirname, "dist"),
			publicPath: "/public/",
			chunkFilename: "[name].[contenthash].js",
			filename: "[name].bundle.js",
		},
		plugins,
	}];
