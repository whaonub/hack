import utils from '../js/index'
import vuex from '../store/index'

/**
 * 钱包
 */
export default {

    /**
     * 余额接口
     * @param data
     * @returns {Promise}
     */
    balance(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {}
            data = utils.queryKeyChange(data, keys)
            utils.post('leader_bill/balance', data).then(res => {
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 账单记录接口
     * @param data
     * @returns {Promise}
     */
    bill(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {}
            data = utils.queryKeyChange(data, keys)
            utils.post('leader_bill/index', data).then(res => {
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 提现接口
     * @param data
     * @returns {Promise}
     */
    withdraw(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {}
            data.money = 'money'
            data = utils.queryKeyChange(data, keys)
            utils.post('leader_bill/withdraw', data).then(res => {
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    }
}
