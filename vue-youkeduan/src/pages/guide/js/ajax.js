import qs from 'qs'
import cookie from 'js-cookie'
import axios from 'axios'
import md5 from 'js-md5'
import config from './config'
import utils from './index'
import vuex from '../store'
import router from '../router/index'

export default {
    /**
     * ajax请求
     * @param type
     * @param url
     * @param data
     * @param synchronization
     * @returns {Promise}
     */
    axios(type, url, data = {}, synchronization = false) {
        const self = this
        let key = config.environmentPrefix + url + '_' + synchronization

        //上个请求未结束时终止本次请求(针对同一个请求)
        if (cookie.get(key)) {
            return new Promise((resolve, reject) => {
                console.log('多次请求')
                reject()
            })
        } else {
            var time = new Date(new Date().getTime() + 3 * 1000);
            cookie.set(key, true, {expires: time})
        }

        return new Promise((resolve, reject) => {
            axios({
                method: type, //类型
                baseURL: config.apiUrl, //请求的基地址
                url: url, //请求的资源地址
                data: data, //请求的参数
                headers: { //自定义头部
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                },
                transformRequest: [function (data) { //请求前的数据处理
                    data = self.getSign(data) //添加用户信息和加密标识
                    data = qs.stringify(data) //转化为表单数据
                    return data
                }],
                withCredentials: false, //是否允许携带cookie
            }).then(response => {
                cookie.remove(key)

                if (response.config.method == 'options') {
                    cookie.remove(key)
                } else if (synchronization) {
                    //同一个请求限制3000毫秒可以请求一次
                    setTimeout(() => {
                        cookie.remove(key)
                    }, 3000)
                } else {
                    //同一个请求限制500毫秒可以请求一次
                    setTimeout(() => {
                        cookie.remove(key)
                    }, 500)
                }

                let data = response.data //服务器响应的信息
                let res = {
                    code: data.code,
                    errorCode: data.error_code,
                    message: data.msg,
                    data: data.data,
                }

                if (res.code == 0) {//服务器处理成功
                    resolve(res)
                } else {//服务器处理失败
                    //服务器处理失败时，移除请求限制
                    setTimeout(() => {
                        cookie.remove(key)
                    }, 500)
                    if (res.errorCode == '10002') {
                        router.push({
                            name: 'login'
                        })
                    } else {
                        utils.myMessage(res.message);
                        reject(res)
                    }
                }
            }, error => {//请求异常处理
                //单个请求限制500毫秒可以请求一次
                if (response.config.method == 'options') {
                    cookie.remove(key)
                } else {
                    setTimeout(() => {
                        cookie.remove(key)
                    }, 500)
                }

                if (config.environment == 'local') {
                    if (error.response) {
                        console.warn(error.response);
                    } else {
                        console.warn('无响应：', error.message);
                    }
                }
                reject()
                utils.myMessage('服务器无响应，请检查网络或者稍后再试！！！')
            })
        })
    },

    /**
     * 签名处理
     * @param data
     * @returns {*|{}}
     */
    getSign(data) {
        data.platform = 'android' //系统类型
        data.equ = 'simulation' //设备号
        data.version = '1.0.0' //系统版本
        data.token = vuex.state.user.token || ''

        for (let key in data) {
            let val = data[key]
            if (!key || !val) {
                delete data[key]
            }
        }

        data = utils.objSort(data)
        data.sign = md5(decodeURIComponent(qs.stringify(data) + '&key=' + config.salt)).toUpperCase()
        return data
    },

    /**
     * ajax获取
     * @param url
     * @param data
     * @returns {*|Promise}
     */
    get(url, data) {
        let tmp = url.split("?")
        let parameter = qs.parse(tmp[1])
        for (let key in data) {
            parameter[key] = data[key]
        }
        url = tmp[0] + '?' + qs.stringify(parameter)
        return this.axios('get', url)
    },

    /**
     * ajax更新
     * @param url
     * @param data
     * @param synchronization
     * @returns {*|Promise}
     */
    post(url, data, synchronization) {
        return this.axios('post', url, data, synchronization)
    },

    /**
     * ajax添加
     * @param url
     * @param data
     * @returns {*|Promise}
     */
    put(url, data) {
        return this.axios('put', url, data)
    },

    /**
     *  ajax删除
     * @param url
     * @param data
     * @returns {*|Promise}
     */
    delete(url, data) {
        return this.axios('delete', url, data)
    }
}
