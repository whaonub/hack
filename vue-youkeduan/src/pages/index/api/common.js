import utils from '../js/index'
import vuex from '../store/index'
import router from '../router/index'

/**
 * 公共接口
 */
export default {
    /**
     * 关于我们接口
     * @param data
     * @returns {Promise}
     */
    about(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {}
            data = utils.objKeyChange(data, keys)

            //发送请求
            utils.post('/pub/about', data).then(res => {
                let keys = {
                    icon: 'icon',
                    info: 'info',
                    protocol: 'protocol',//协议
                }
                res.data = utils.KeyChange(res.data, keys)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 获取短信验证码接口
     * @param data
     * @returns {Promise}
     */
    getSmsCode(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {
                typa: 'type',//类型
                mobile: 'mobile',//手机号
            }
            data = utils.objKeyChange(data, keys)
            utils.post('leader/getSmsCode', data).then(res => {
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 验证短信验证码接口
     * @param data
     * @returns {Promise}
     */
    checkSmsCode(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {
                typa: 'type',//类型
                mobile: 'mobile',//手机号
                code: 'code',//短信验证码
            }
            data = utils.objKeyChange(data, keys)
            utils.post('leader/checkSmsCode', data).then(res => {
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 获取环信token接口
     * @param data
     * @returns {Promise}
     */
    getImToken(data = {}) {
        return new Promise((resolve, reject) => {
            //发送请求
            utils.post('third_info/easemob', data).then(res => {
                let keys = {
                    'access_token': 'token'
                }
                res.data = utils.KeyChange(res.data, keys)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 图片上传token接口
     * @param data
     * @returns {Promise}
     */
    getOssToken(data = {}) {
        return new Promise((resolve, reject) => {
            //发送请求
            utils.post('third_info/oss', data).then(res => {
                let keys = {}
                res.data = utils.KeyChange(res.data, keys)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 客服热线
     * @param data
     * @returns {Promise<any>}
     */
    getServiceTell(data = {}) {
        return new Promise((resolve, reject) => {
            //发送请求
            utils.post('pub/serviceTel', data).then(res => {
                let keys = {}
                res.data = utils.KeyChange(res.data, keys)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 等级规则
     * @param data
     * @returns {Promise<any>}
     */
    getLevelRule(data = {}) {
        return new Promise((resolve, reject) => {
            //发送请求
            utils.post('pub/levelRule', data).then(res => {
                let keys = {}
                res.data = utils.KeyChange(res.data, keys)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 检查更新
     * @param data
     * @returns {Promise}
     */
    appCheck(data = {}) {
        return new Promise((resolve, reject) => {
            //发送请求
            data.system_type = 'android'
            utils.post('pub/appCheck', data).then(res => {
                let keys = {}
                res.data = utils.KeyChange(res.data, keys)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 获取地区列表
     * @param data
     * @returns {Promise<any>}
     */
    getAreaList(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {}
            data = utils.queryKeyChange(data, keys)
            utils.post('/api/area/area_list', data).then(res => {
                let keys = {}
                res.data = utils.dataKeyChange(res.data, keys)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },
    /**
     * 获取验证码
     * @param data
     * @returns {Promise<any>}
     */
    async getRegisterCode(data={}){
        let keys = {}
        data = utils.queryKeyChange(data,keys)
        const res = await utils.post('/api/code/send_code',data)
        res.data = utils.dataKeyChange(res.data,keys)
        return res
    }
}




