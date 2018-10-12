import utils from '../js/index'
import vuex from '../store/index'

/**
 * 我的产品
 */
export default {
    /**
     * 获取产品列表
     * @param data
     * @returns {Promise}
     */
    getProductList(data = {}) {
        return new Promise((resolve, reject) => {
            utils.post('/api/goods/guide_goods', data).then(res => {
                let keys = {
                    currentPrice: 'current_price',//当前价格
                }
                res.data = utils.dataKeyChange(res.data, keys)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 获取共享产品列表
     * @param data
     * @returns {Promise}
     */
    getShareProductList(data = {}) {
        return new Promise((resolve, reject) => {
            utils.post('/api/goods/goods_share_list', data).then(res => {
                let keys = {
                    currentPrice: 'current_price',//当前价格
                    areaId: 'area_id',//区域id
                    areaName: 'area_name',//区域名字
                    createTime: 'create_time',//创建时间
                }
                res.data = utils.dataKeyChange(res.data, keys)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 获取已发布的产品列表
     * @param data
     * @returns {Promise}
     */
    getReleaseProductList(data = {}) {
        return new Promise((resolve, reject) => {
            utils.post('/api/goods/release_goods', data).then(res => {
                let keys = {
                    currentPrice: 'current_price',//当前价格
                    areaName: 'area_name',//区域名字
                    aggregateAddress: 'aggregate_address',//集合地址
                }
                res.data = utils.dataKeyChange(res.data, keys)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 获取产品详情
     * @param data
     * @returns {Promise}
     */
    getProductDetail(data = {}) {
        return new Promise((resolve, reject) => {
            utils.post('product/details', data).then(res => {
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 添加产品
     * @param data
     * @returns {Promise}
     */
    addProduct(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {
                title: 'name',//标题
                price: 'price',//价格
                peopleNo: 'people',//人数限制
                areaId: 'region_id',//地区id
                journey: 'content',//行程描述
                notice: 'inform',//须知
                coverImage: 'img',//封面图
                images: 'img_list',//产品图列表
                status: 'is_shelves',//上架状态
            }
            data = utils.queryKeyChange(data, keys)
            utils.post('product/add', data).then(res => {
                let keys = {}
                res.data = utils.queryKeyChange(res.data, keys)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 修改产品
     * @param data
     * @returns {Promise}
     */
    editProduct(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {
                title: 'name',//标题
                price: 'price',//价格
                peopleNo: 'people',//人数限制
                areaId: 'region_id',//地区id
                journey: 'content',//行程描述
                notice: 'inform',//须知
                coverImage: 'img',//封面图
                images: 'img_list',//产品图列表
                status: 'is_shelves',//上架状态
            }
            data = utils.queryKeyChange(data, keys)
            utils.post('product/edit', data).then(res => {
                let keys = {}
                res.data = utils.queryKeyChange(res.data, keys)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 删除产品
     * @param data
     * @returns {Promise}
     */
    deleteProduct(data = {}) {
        return new Promise((resolve, reject) => {
            utils.post('product/delete', data).then(res => {
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },
}
