const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


//模块输出  输出一个对象 所以是 module.exports
module.exports = {
	entry: path.join(__dirname, 'src', 'main.js'),
	output: {
		path: path.join(__dirname, 'dist'),
		filename: "bundle.js"
	},
	plugins: [
	new htmlWebpackPlugin({
		template: path.join(__dirname, 'src', 'index.html'),
		filename: "index.html"
	}),
	new VueLoaderPlugin()
	],
	module: {
		rules: [
		{test: /\.css$/, use: ['style-loader', 'css-loader']},
		{test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
		{test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
		{test: /\.(jpeg|jpg|gif|png)$/, use: "url-loader?limit=200000&name=[hash:8]-[name].[ext]"},
		{test: /\.(eot|svg|ttf|woff|woff2)$/, use: "url-loader"},
		{test: /\.js$/, use: "babel-loader", exclude: /node_modules/},
		{test: /\.vue$/, use: "vue-loader"}
		]
	},
	resolve: {
		alias: {
			/*"vue$": "vue/dist/vue.js"*/
		}
	}
}