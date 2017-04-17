'use strict'

let path = require('path');
let glob = require('glob');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
//let CompressionWebpackPlugin = require('compression-webpack-plugin');

const myWebpackConfig = {
    entry: path.resolve(__dirname,'./src/js/app/app.jsx'),
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: 'index.js',
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.css',
            '.less',
            '.json',
        ],
    },
    module: {
        rules: [
            {
                test: /\.js|jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    plugins: [
                        ['import',[{ libraryName: 'antd', style: true }]]
                    ],
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader',
                })
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ]
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
            }
        ]
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        port: 2333,
        compress: true, /* gizp */
        publicPath: '/dist/',
    },
    plugins: [
        new ExtractTextPlugin('index.css'),

    ]

};

module.exports = myWebpackConfig;