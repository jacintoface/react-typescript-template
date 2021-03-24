const express = require("express");
const webpack = require('webpack');
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const colors = require('colors/safe')
require("dotenv").config();

const { PORT = 9003 } = process.env
const config = require('./webpack/webpack.config.base')
const compiler = webpack(config);
const app = express();

app.use(webpackDevMiddleware(compiler, {
    publicPath: '__Build__'
}))

app.use(webpackHotMiddleware(compiler, {
    publicPath: '__Build__'
}))

app.listen(PORT, () => {
    colors.blue('本地服务器已启动')
})
