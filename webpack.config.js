// module.exports = {
export default {
	entry: ['@babel/polyfill', './html/ttt.js'],
	output: {
		path: '/Users/jade/workspace/fpp/jsbasic/dist/js',
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},

	devtool: 'source-map',
	mode: 'development',
};
