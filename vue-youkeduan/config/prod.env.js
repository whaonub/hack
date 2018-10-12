'use strict'
let production = {
    ASSETS_PUBLIC_PATH: './',//静态资源根目录
    ASSETS_SUB_DIRECTORY: 'static',// 静态资源目录名字
    ASSETS_ROOT: 'D:\\oss\\walk\\production',// 打包的入口地址
    INDEX: 'D:\\oss\\walk\\production\\index.html',// 打包的入口文件地址

    NODE_ENV: '"production"',//node运行环境
    VERSIONS: '"1.0.0"',//版本号
    ENVIRONMENT: '"production"', //运行环境

    //index入口
    INDEX_ENVIRONMENT_PREFIX: '"production_index_"', //运行环境前缀
    INDEX_API_URL: '"https://app.jingruiwangke.com/jrClientApp/"', //api接口地址
    INDEX_FILE_URL: '"http://image.jingruiwangke.com/"',//文件地址
    INDEX_FILE_UPLOAD_URL: '"https://app.jingruiwangke.com/jrClientApp/fileUpload"',//文件上传地址
    INDEX_RAVEN_URL: '"https://b2d0d7af37bf48f09903c2b0c977f503@sentry.io/1191532"',//错误收集地址

    //京睿物流入口
    GUIDE_ENVIRONMENT_PREFIX: '"production_guide_"', //运行环境前缀
    GUIDE_API_URL: '"http://xnxz.minithink.cn/leader/"', //api接口地址
    GUIDE_FILE_URL: '"http://xnxz.minithink.cn/leader/"',//文件地址
    GUIDE_FILE_UPLOAD_URL: '""',//文件上传地址
    GUIDE_RAVEN_URL: '"https://c1c8b7393f314c21b30cb2d05fe3f459@sentry.io/1191535"',//错误收集地址
}

let develop = {
    ASSETS_PUBLIC_PATH: './',//静态资源根目录
    ASSETS_SUB_DIRECTORY: 'static',// 静态资源目录名字
    ASSETS_ROOT: 'D:\\www\\xnxz',// 打包的入口地址
    INDEX: 'D:\\www\\xnxz\\index.html',// 打包的入口文件地址

    NODE_ENV: '"production"',//node运行环境
    VERSIONS: '"1.0.0"',//版本号
    ENVIRONMENT: '"development"', //运行环境

    //游客端
    INDEX_ENVIRONMENT_PREFIX: '"develop_index_"', //运行环境前缀
    INDEX_API_URL: '"https://develop.jingruiwangke.com/jrClientApp/"', //api接口地址
    INDEX_FILE_URL: '"http://image.jingruiwangke.com/"',//文件地址
    INDEX_FILE_UPLOAD_URL: '"https://develop.jingruiwangke.com/jrPlatformWeb/fileUpload"',//文件上传地址
    INDEX_RAVEN_URL: '"https://b2d0d7af37bf48f09903c2b0c977f503@sentry.io/1191532"',//错误收集地址

    //导游端
    GUIDE_ENVIRONMENT_PREFIX: '"develop_guide_"', //运行环境前缀
    GUIDE_API_URL: '"http://xnxz.minithink.cn/leader/"', //api接口地址
    GUIDE_FILE_URL: '"https://xnxz-oss.oss-cn-qingdao.aliyuncs.com/"',//文件地址
    GUIDE_FILE_UPLOAD_URL: '""',//文件上传地址
    GUIDE_RAVEN_URL: '"https://c1c8b7393f314c21b30cb2d05fe3f459@sentry.io/1191535"',//错误收集地址
}

//module.exports = production //正式包
module.exports = develop //测试包
