const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/js/homePageJS/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: 'css-hot-loader',
                    },
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }), 
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: '!!ejs-webpack-loader!./index.ejs'
       }),
        new HtmlWebpackPlugin({
            filename: 'list.html',
            template: '!!ejs-webpack-loader!./list.ejs'
        }),
        new HtmlWebpackPlugin({
            filename: 'contacts.html',
            template: '!!ejs-webpack-loader!./contacts.ejs'
        }),
        new HtmlWebpackPlugin({
            filename: 'forecast.html',
            template: '!!ejs-webpack-loader!./forecast.ejs'
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        compress: true,
        writeToDisk: true,
        watchContentBase: true,
        port: 9000,
    }
};