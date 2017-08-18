const webpack = require("webpack");
const wbdevserver = require("webpack-dev-server");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const path = require("path");
const autoprefixer = require('autoprefixer');

const ROOT_PATH = path.resolve(__dirname);
const srcPath = path.resolve(ROOT_PATH,'./src');
// 如果预先定义过环境变量，就将其赋值给`ASSET_PATH`变量，否则赋值为根目录
const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry:[
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:3000',
        path.resolve(srcPath, './index')
    ],
    output:{
        path: path.resolve(__dirname,'./build'),
        filename: 'bundle.js', 
        publicPath: ASSET_PATH
    },
    resolve:{
        extensions: ['.js', '.scss', '.jsx']
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_module/,
                use: ['babel-loader']
            },{
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader?sourceMap',
                    'sass-loader?sourceMap',
                    'autoprefixer-loader'
                ]
            },{
                test: /\.(jpg|png|gif)$/,
                use: ['url-loader?limit=25000']
            },{
                test: /\.(eot|ttf|oft|woff2?)(\?.*)?$/,
                use: ['url-loader']
            }
        ]
    }, 
    plugins: [
        //该插件帮助我们安心地使用环境变量
        new webpack.DefinePlugin({
            'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
        }),
        new HtmlWebpackPlugin({
            title: 'c-ui module',
            template: path.resolve(srcPath, './index.html'),
            filename: 'index.html',
            inject: true,
            hash: false,
            favicon: './favicon.ico'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({ url: 'http://localhost:3000' })
    ] /* , 
    devServer:{
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: './src',
        port: 3000,
        host: '0.0.0.0'
    }  */
}