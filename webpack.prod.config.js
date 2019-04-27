const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	devtool: 'cheap-module-source-map',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		chunkFilename: '[id].js',
		publicPath: ''
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
        test: /\.json$/,
        loader: 'json-loader'
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: true,
							localIdentName: '[name]__[local]__[hash:base64:5]'
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: () => [
								autoprefixer({
									browsers: [
										"> 1%",
										"last 2 versions"
									]
								})
							]
						}
					}
				]
			},
			{
				test: /\.(scss)$/,
				use: [
					{
						// Adds CSS to the DOM by injecting a `<style>` tag
						loader: 'style-loader'
					},
					{
						// Interprets `@import` and `url()` like `import/require()` and will resolve them
						loader: 'css-loader'
					},
					{
						// Loader for webpack to process CSS with PostCSS
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: () => [
								autoprefixer({
									browsers: [
										"> 1%",
										"last 2 versions"
									]
								})
							]
						}
					},
					{
						// Loads a SASS/SCSS file and compiles it to CSS
						loader: 'sass-loader'
					}
				]
			},
			{
				test: /\.(png|jpe?g|gif)$/,
				loader: 'url-loader?limit=8000&name=images/[name].[ext]'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/public/index.html',
			filename: 'index.html',
			inject: 'body'
		}),
		new webpack.optimize.UglifyJsPlugin()
	]
};