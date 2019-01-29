const path = require('path');

module.exports = {
	entry: path.join(__dirname, '/source/create-element.ts'),
	output: {
		filename: './dist/create-element.js',
		path: __dirname
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			},
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	},
	devServer: {
		contentBase: path.join(__dirname, 'example'),
		compress: true,
	},
};
