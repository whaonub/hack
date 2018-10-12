/**
 * 全局配置
 */
export default {
    versions: process.env.VERSIONS,//版本号
    environment: process.env.ENVIRONMENT,//运行环境
    environmentPrefix: process.env.GUIDE_ENVIRONMENT_PREFIX,//运行环境前缀
    apiUrl: process.env.GUIDE_API_URL,//api接口地址
    fileUrl: process.env.GUIDE_FILE_URL,  //文件地址
    fileUploadUrl: process.env.GUIDE_FILE_UPLOAD_URL,//文件上传地址
    ravenUrl: process.env.GUIDE_RAVEN_URL,//错误收集地址
    salt: 'b8c021e98f537578807d9d0ad17fe935',//签名的盐
}
