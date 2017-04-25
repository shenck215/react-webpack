'use strict'

import webpack from 'webpack';
import path from 'path';
import glob from 'glob';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import precss from 'precss';
import autoprefixer from 'autoprefixer';
//import HtmlWebpackPlugin from 'html-webpack-plugin';

const myWebpackConfig = {
    entry: path.resolve(__dirname, './src/js/app/app.jsx'),
    output: {
        path: path.resolve(__dirname),
        filename: 'dist/index.js',
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
                        ['import', [{ libraryName: 'antd', style: true }]]
                    ],
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader?modules&localIdentName=[path][name]---[local]---[hash:base64:5]',
                        'postcss-loader'
                    ],

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
        publicPath: '/',
        inline: true,
        historyApiFallback: true,
    },
    plugins: [
        new ExtractTextPlugin('dist/index.css'),
        // new HtmlWebpackPlugin({
        //     title: 'My App',
        //     inject: true,
        //     template: path.resolve(__dirname,'./index.html'),
        // }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        }),

        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function () {
                    return [precss, autoprefixer];
                },
            }
        })
    ]

};

module.exports = myWebpackConfig;