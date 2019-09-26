const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const webpackBMSC = {
    entry: ['./index.js'],
    output: {
        filename: 'main-react-bmsc.js',
        path: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            'module:metro-react-native-babel-preset',
                            '@babel/preset-flow',
                        ],
                        plugins: [
                            ['@babel/plugin-transform-object-assign'],
                            [
                                '@babel/plugin-proposal-decorators',
                                { legacy: true },
                                'emotion',
                            ],
                            /* ['transform-remove-console'], */
                        ],
                    },
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
        ],
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: true,
            }),
            new OptimizeCSSAssetsPlugin({}),
        ],
    },
    devtool: 'source-map',
    devServer: {
        port: 8085,
        hot: true,
        allowedHosts: [
            'local.ultracreditos.com',
            'betalocal.ultracreditos.com',
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            // 'process.env.YASTA_ENV': JSON.stringify('BMSC'),
            'process.env.YASTA_ENV': JSON.stringify('LOCAL'),
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new HtmlWebPackPlugin({
            template: './index.html',
            filename: './index.html',
        }),
       
        new webpack.HotModuleReplacementPlugin(),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new Dotenv(),
    ],
};

const webpackUltraCreditos = {
    entry: ['./index.js'],
    output: {
        filename: 'main-react.js',
        path: path.resolve(__dirname , 'build'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react',
                            'module:metro-react-native-babel-preset',
                            '@babel/preset-flow',
                        ],
                        plugins: [
                            ['@babel/plugin-transform-object-assign'],
                            [
                                '@babel/plugin-proposal-decorators',
                                { legacy: true },
                                'emotion',
                            ],
                            /* ['transform-remove-console'], */
                        ],
                    },
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
        ],
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: true,
            }),
            new OptimizeCSSAssetsPlugin({}),
        ],
    },
    devtool: 'source-map',
    devServer: {
        port: 8085,
        hot: true,
        allowedHosts: [
            'local.ultracreditos.com',
            'betalocal.ultracreditos.com',
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            // 'process.env.YASTA_ENV': JSON.stringify('PRODUCTION'),
            'process.env.YASTA_ENV': JSON.stringify('LOCAL'),
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new HtmlWebPackPlugin({
            template: './index.html',
            filename: './index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new Dotenv(),
    ],
};

module.exports = [webpackBMSC, webpackUltraCreditos];
