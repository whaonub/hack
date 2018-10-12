import utils from '../js/index'

export default {
    /**
     * 抢单大厅接口
     * @param data
     * @returns {Promise}
     */
    getHome(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {}
            data = utils.queryKeyChange(data, keys)
            utils.post('vie_order/index', data).then(res => {
                let keys = {}
                res.data = utils.dataKeyChange(res.data, keys)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 订单详情
     * @param data
     * @returns {Promise<any>}
     */
    getHomeDetail(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {}
            data = utils.queryKeyChange(data, keys)
            utils.post('vie_order/details', data).then(res => {
                let keys = {}
                res.data = utils.dataKeyChange(res.data, keys)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 抢单
     * @param data
     * @returns {Promise<any>}
     */
    grabOrder(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {}
            data = utils.queryKeyChange(data, keys)
            utils.post('vie_order/handle', data).then(res => {
                let keys = {}
                res.data = utils.dataKeyChange(res.data, keys)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 未读消息数
     * @param data
     * @returns {Promise<any>}
     */
    getMessageNum(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {}
            data = utils.queryKeyChange(data, keys)
            utils.post('news/notReadNum', data).then(res => {
                let keys = {}
                res.data = utils.dataKeyChange(res.data, keys)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 消息列表
     * @param data
     * @returns {Promise<any>}
     */
    getMessageList(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {}
            data = utils.queryKeyChange(data, keys)
            utils.post('news/index', data).then(res => {
                let keys = {}
                res.data = utils.dataKeyChange(res.data, keys)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 消息详情
     * @param data
     * @returns {Promise<any>}
     */
    getMessageDetail(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {}
            data = utils.queryKeyChange(data, keys)
            utils.post('news/details', data).then(res => {
                let keys = {}
                res.data = utils.dataKeyChange(res.data, keys)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 读取消息
     * @param data
     * @returns {Promise<any>}
     */
    readMessage(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {}
            data = utils.queryKeyChange(data, keys)
            utils.post('news/read', data).then(res => {
                let keys = {}
                res.data = utils.dataKeyChange(res.data, keys)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 删除消息
     * @param data
     * @returns {Promise<any>}
     */
    removeMessage(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {}
            data = utils.queryKeyChange(data, keys)
            utils.post('news/del', data).then(res => {
                let keys = {}
                res.data = utils.dataKeyChange(res.data, keys)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },
}

