import utils from '../js/index'

export default {
    /**
     * 产品订单列表
     * @param data
     * @returns {Promise}
     */
    getProductOrderList(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {}
            data = utils.queryKeyChange(data, keys)
            utils.post('product_order/index', data).then(res => {
                let keys = {}
                res.data = utils.dataKeyChange(res.data, keys)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 产品订单详情
     * @param data
     * @returns {Promise}
     */
    getProductOrderDetais(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {}
            data = utils.queryKeyChange(data, keys)
            utils.post('product_order/details', data).then(res => {
                let keys = {}
                res.data = utils.dataKeyChange(res.data, keys)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 产品订单接单
     * @param data
     * @returns {Promise}
     */
    productOrderHandel(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {}
            data = utils.queryKeyChange(data, keys)
            utils.post('product_order/handel', data).then(res => {
                let keys = {}
                res.data = utils.dataKeyChange(res.data, keys)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 产品订单验证游客身份
     * @param data
     * @returns {Promise}
     */
    productOrderCheckUser(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {}
            data = utils.queryKeyChange(data, keys)
            utils.post('product_order/checkUser', data).then(res => {
                let keys = {}
                res.data = utils.dataKeyChange(res.data, keys)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 定制订单列表
     * @param data
     * @returns {Promise}
     */
    getCustomOrderList(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {}
            data = utils.queryKeyChange(data, keys)
            utils.post('custom_order/index', data).then(res => {
                let keys = {}
                res.data = utils.dataKeyChange(res.data, keys)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 定制订单详情
     * @param data
     * @returns {Promise}
     */
    getCustomOrderDetais(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {}
            data = utils.queryKeyChange(data, keys)
            utils.post('custom_order/details', data).then(res => {
                let keys = {}
                res.data = utils.dataKeyChange(res.data, keys)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 定制订单接单
     * @param data
     * @returns {Promise}
     */
    customOrderHandel(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {}
            data = utils.queryKeyChange(data, keys)
            utils.post('custom_order/handel', data).then(res => {
                let keys = {}
                res.data = utils.dataKeyChange(res.data, keys)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 定制订单验证游客身份
     * @param data
     * @returns {Promise}
     */
    customOrderCheckUser(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {}
            data = utils.queryKeyChange(data, keys)
            utils.post('custom_order/checkUser', data).then(res => {
                let keys = {}
                res.data = utils.dataKeyChange(res.data, keys)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },
}

