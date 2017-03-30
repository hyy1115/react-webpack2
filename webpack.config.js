/**
 * Created by yongyuehuang on 2017/3/29.
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:3133',
            'webpack/hot/only-dev-server',
            'babel-polyfill',
            'react-hot-loader/patch',
            './src/index'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist'
    },
    module: {
        rules: [
            {test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/},
            {test: /\.css$/, use: ['style-loader', 'css-loader?importLoaders=1']},
        ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({template: './index.html'}),
        new webpack.HotModuleReplacementPlugin(), //热更新
        new webpack.NamedModulesPlugin(), //在控制台打印模块
    ],
    devtool: 'eval'
}