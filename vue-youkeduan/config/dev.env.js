'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',//node运行环境
    VERSIONS: '"1.0.0"',//版本号
    ENVIRONMENT: '"local"', //运行环境

    //客户端
    INDEX_ENVIRONMENT_PREFIX: '"local_index_"', //运行环境前缀
    INDEX_API_URL: '"http://ly.xuanwenkeji.com"', //api接口地址
    INDEX_FILE_URL: '"http://image.jingruiwangke.com/"',//文件地址
    INDEX_FILE_UPLOAD_URL: '"https://develop.jingruiwangke.com/jrPlatformWeb/fileUpload"',//文件上传地址
    INDEX_RAVEN_URL: '"https://b2d0d7af37bf48f09903c2b0c977f503@sentry.io/1191532"',//错误收集地址

    //导游端
    GUIDE_ENVIRONMENT_PREFIX: '"local_guide_"', //运行环境前缀
    GUIDE_API_URL: '"http://ly.xuanwenkeji.com"', //api接口地址
    GUIDE_FILE_URL: '"https://xnxz-oss.oss-cn-qingdao.aliyuncs.com/"',//文件地址
    GUIDE_FILE_UPLOAD_URL: '""',//文件上传地址
    GUIDE_RAVEN_URL: '"https://c1c8b7393f314c21b30cb2d05fe3f459@sentry.io/1191535"',//错误收集地址
})
