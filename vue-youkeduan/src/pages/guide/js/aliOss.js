import aliOss from "ali-oss";
import api from '../api/index'

export default {

    /**
     * 创建随机字符串
     * @param num
     * @returns {string}
     */
    randomString(num) {
        let chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        let res = "";
        for (let i = 0; i < num; i++) {
            var id = Math.ceil(Math.random() * 35);
            res += chars[id];
        }
        return res;
    },

    /**
     * 创建oss客户端对象
     * @returns {*}
     */
    createOssClient() {
        return new Promise((resolve, reject) => {
            let client = new aliOss.Wrapper({
                region: 'oss-cn-qingdao',
                accessKeyId: 'LTAIEPIPsuJzO0Xh',
                accessKeySecret: 'FhHUHEq3UtWlf2nW4l7VoM9IXAJmdN',
                bucket: 'xnxz-oss'
            })
            resolve(client)
        })
    },

    /**
     * 创建oss客户端对象(Sts方式)
     * @returns {*}
     */
    createOssStsClient() {
        return new Promise((resolve, reject) => {
            api.getOssToken().then(res => {
                let client = new aliOss.Wrapper({
                    region: 'oss-cn-qingdao',
                    accessKeyId: res.data.AccessKeyId,
                    accessKeySecret: res.data.AccessKeySecret,
                    stsToken: res.data.SecurityToken,
                    bucket: res.data.bucket,
                })
                resolve(client)
            })
        })
    },

    /**
     * 文件上传
     * @param client
     * @param file 要上传的文件
     * @param requestProgress 上传进度条
     * @returns {Promise}
     */
    ossUploadFile(file, requestProgress = null) {
        const self = this
        return new Promise((resolve, reject) => {
            let date = self.dateFormat(new Date(), 'yyyyMMddhhmmss') //当前时间
            let randomStr = self.randomString(4)//4位随机字符串
            let extensionName = file.name.substr(file.name.indexOf('.')) //文件扩展名
            let fileName = 'image/t_' + date + '_' + randomStr + extensionName //文件名字（相对于根目录的路径 + 文件名）

            //进度条
            let progress = (p) => {
                return function (done) {
                    if (typeof requestProgress == 'function') {
                        requestProgress(Math.floor(p * 100))
                    }
                    done();
                }
            }

            //执行上传
            self.createOssClient().then(client => {

                //异步上传,返回数据
                resolve({
                    fileName: file.name,
                    fileUrl: fileName,
                })

                //上传处理
                client.multipartUpload(fileName, file, {
                    progress: progress
                }).then(() => {
                }, err => {
                    reject(err)
                })
            })
        })
    },
}
