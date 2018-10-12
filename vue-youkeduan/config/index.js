'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')
const config = require('./prod.env')

module.exports = {
    dev: {
        // Paths
        // 资源路径设置
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        // 代理设置
        proxyTable: {},
        // Various Dev Server settings
        // 本地服务器地址
        host: '0.0.0.0', // can be overwritten by prod.HOST
        // 本地服务器地址端口
        port: 7001, // can be overwritten by prod.PORT, if port is in use, a free one will be determined
        // 自动打开浏览器
        autoOpenBrowser: false,
        // 页面错误提示
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

        // Use Eslint Loader?
        // If true, your code will be linted during bundling and
        // linting errors and warnings will be shown in the console.
        // 代码格式检查工具
        useEslint: true,
        // If true, eslint errors and warnings will also be shown in the error overlay
        // in the browser.
        showEslintErrorsInOverlay: false,
        /**
         * Source Maps
         */

        // https://webpack.js.org/configuration/devtool/#development
        devtool: 'cheap-module-eval-source-map',

        // If you have problems debugging vue-files in devtools,
        // set this to false - it *may* help
        // https://vue-loader.vuejs.org/en/options.html#cachebusting
        cacheBusting: true,
        // css资源地图
        cssSourceMap: true
    },

    build: {
        // Template for index.html
        // 输出的入口文件地址
        index: config.INDEX ? config.INDEX : path.resolve(__dirname, '../dist/index.html'),

        // Paths
        // 资源路径设置
        assetsRoot: config.ASSETS_ROOT ? config.ASSETS_ROOT : path.resolve(__dirname, '../dist/'),
        assetsSubDirectory: config.ASSETS_SUB_DIRECTORY ? config.ASSETS_SUB_DIRECTORY : 'static',
        assetsPublicPath: config.ASSETS_PUBLIC_PATH ? config.ASSETS_PUBLIC_PATH : './',

        /**
         * Source Maps
         */
        // 资源地图
        productionSourceMap: false,
        // https://webpack.js.org/configuration/devtool/#production
        devtool: '#source-map',

        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        // 添加gzip压缩文件
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],

        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        // 打包分析
        bundleAnalyzerReport: false
    }
}
