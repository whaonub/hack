import utils from '../js/index'
import vuex from '../store/index'
import plus from '../js/plus'

/**
 * 登录注册相关
 */
export default {
    /**
     * 登录接口
     * @param data
     * @returns {Promise}
     */
    login(data = {}) {
        return new Promise(async (resolve, reject) => {
            let keys = {
                mobile: 'mobile',//手机号
                password: 'password',//密码
                code: 'code',//短信验证码
            }

            //推送id
            data.pushId = await plus.getPushConfig().then(res => {
                return res
            }, err => {
                return err
            })

            data = utils.queryKeyChange(data, keys)
            if (data.type == 'password') {
                utils.post('/api/login/login_by_password', data).then(res => {
                    let keys = {
                        userId: 'login_num',//用户ID,
                        token: 'token',//token,
                    }
                    res.data = utils.dataKeyChange(res.data, keys)
                    utils.login(res.data)
                    resolve(res)
                }, (res) => {
                    reject(res)
                })
            } else {
                utils.post('/api/login/login_by_code', data).then(res => {
                    let keys = {
                        id: 'userId',//用户ID,
                        token: 'token',//token,
                        ease_id: 'imName',//环信im的id
                        mobile: 'mobile',//手机
                    }
                    res.data = utils.dataKeyChange(res.data, keys)
                    utils.login(res.data)
                    resolve(res)
                }, (res) => {
                    reject(res)
                })
            }
        })
    },

    /**
     * 注册接口
     * @param data
     * @returns {Promise}
     */
    register(data) {
        return new Promise((resolve, reject) => {
            let keys = {
                mobile: 'mobile',//手机号
                password: 'password',//密码
                code: 'code',//短信验证码
            }

            data = utils.queryKeyChange(data, keys)
            utils.post('/api/register/guide_reg_first', data).then(res => {
                let keys = {
                    mobile: 'mobile',//手机
                    password: 'password',//密码
                    code: 'code',//短信验证码
                }
                res.data = utils.dataKeyChange(res.data, keys)
                utils.login(res.data)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 重置密码接口
     * @param data
     * @returns {Promise}
     */
    setPassword(data) {
        vuex.commit('common/update', {
            token: '',
        })
        return new Promise((resolve, reject) => {
            let keys = {
                mobile: 'mobile',//手机号
                password: 'password',//密码
                code: 'code',//短信验证码
            }
            data = utils.queryKeyChange(data, keys)
            utils.post('leader/forgetPassword', data).then(res => {
                let keys = {}
                res.data = utils.dataKeyChange(res.data, keys)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },
}
