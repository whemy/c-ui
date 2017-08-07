const webpack = require("webpack");
const wbdevserver = require("webpack-dev-server");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const path = require("path");
const autoprefixer = require('autoprefixer');

const ROOT_PATH = path.resolve(__dirname);
const srcPath = path.resolve(ROOT_PATH,'./src');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry:[
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:3000',
        path.resolve(srcPath, './main.jsx')
    ],
    output:{
        path: path.resolve(__dirname,'./build'),
        filename: 'bundle.js', 
        publicPath: '/'
    },
    resolve:{
        extensions: ['.js', '.scss', 'jsx']
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
                    'css-loader',
                    'sass-loader',
                    'autoprefixer-loader'
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
    plugins: [
        new HtmlWebpackPlugin({
            title: 'c-ui module',
            template: path.resolve(srcPath, './index.html'),
            filename: 'index.html',
            inject: true,
            hash: false
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