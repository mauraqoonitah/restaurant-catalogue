const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/scripts/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [{
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                loader: 'url-loader?limit=100000'
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/templates/index.html'),
            filename: 'index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, 'src/public/'),
                to: path.resolve(__dirname, 'dist/'),
            }, ],
        }),
        new ServiceWorkerWebpackPlugin({
            entry: path.resolve(__dirname, 'src/scripts/sw.js'),
        }),
    ],
};