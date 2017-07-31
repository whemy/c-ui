const webpack = require("webpack");
const wbdevserver = require("webpack-dev-server");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const ROOT_PATH = path.resolve(__dirname);

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        app: './src/app.jsx'
    },
    output:{
        path: path.join(ROOT_PATH,'./bulid'),
        filename: '[name].js',
        publicPath: '/'
    },
    resolver:{
        extensions: ['.js', '.sass', 'jsx']
    },
    module:{
        rule: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_module/,
                use: ['babel-loader']
            },{
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader?sourceMap',
                    'postcss-loader',
                    'sass-loader?sourceMap'
                ]
            },{
                test: /.(jpg|png|gif)$/,
                use: ['url-loader?limit=25000']
            },{
                test: /.(eot|ttf|oft|woff2?)(\?.*)?$/,
                use: ['url-loader']
            }
        ]
    },
    plugin: [
        new HtmlWebpackPlugin({
            title: 'c-ui module',
            template: './src/index.html',
            filename: 'index.html',
            inject: true,
            hash: false
        })
    ]
}