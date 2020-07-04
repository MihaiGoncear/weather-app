const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry:  {
        index: './src/js/homePageJS/index.js',
        list: './src/js/listPageJS/listDiv.js',
        forecast: './src/js/forecastJS/forecast.js',
        contacts: './src/js/contactsJS/contacts.js',
        shared: './src/js/commonJS/styles.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
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
        new CopyPlugin ({
            patterns: [
                {from: './src/images', to: 'images'}
            ]
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: '!!ejs-webpack-loader!./index.ejs',
            chunks: ['shared', 'index']
        }),
        new HtmlWebpackPlugin({
            filename: 'list.html',
            template: '!!ejs-webpack-loader!./list.ejs',
            chunks: ['shared', 'list']
        }),
        new HtmlWebpackPlugin({
            filename: 'contacts.html',
            template: '!!ejs-webpack-loader!./contacts.ejs',
            chunks: ['shared', 'contacts']
        }),
        new HtmlWebpackPlugin({
            filename: 'forecast.html',
            template: '!!ejs-webpack-loader!./forecast.ejs',
            chunks: ['shared', 'forecast']
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