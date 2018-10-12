import utils from '../js/index'
import vuex from '../store/index'

/**
 * 我的攻略
 */
export default {
    /**
     * 获取攻略列表
     * @param data
     * @returns {Promise}
     */
    getStrategyList(data = {}) {
        return new Promise((resolve, reject) => {
            utils.post('travel/index', data).then(res => {
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 获取攻略详情
     * @param data
     * @returns {Promise}
     */
    getStrategyDetails(data = {}) {
        return new Promise((resolve, reject) => {
            utils.post('travel/details', data).then(res => {
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 添加攻略
     * @param data
     * @returns {Promise}
     */
    addStrategy(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {
                areaId: 'region_id',//地区id
                title: 'title',//标题
                content: 'content',//正文,
                cover: 'img',//封面
                imgList: 'img_list',//图片列表
            }
            data = utils.queryKeyChange(data, keys)
            utils.post('travel/add', data).then(res => {
                let keys = {}
                res.data = utils.queryKeyChange(res.data, keys)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     *修改攻略
     * @param data
     * @returns {Promise}
     */
    editStrategy(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {
                areaId: 'region_id',//地区id
                title: 'title',//标题
                content: 'content',//正文,
                cover: 'img',//封面
                imgList: 'img_list',//图片列表
            }
            data = utils.queryKeyChange(data, keys)
            utils.post('travel/edit', data).then(res => {
                let keys = {}
                res.data = utils.queryKeyChange(res.data, keys)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 攻略评论列表
     * @param data
     * @returns {Promise}
     */
    strategyCommentList(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {
                id: 'travel_id'
            }
            data = utils.queryKeyChange(data, keys)
            utils.post('travel_comment/index', data).then(res => {
                let keys = {}
                res.data = utils.queryKeyChange(res.data, keys)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 添加攻略评论
     * @param data
     * @returns {Promise}
     */
    addStrategyComment(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {
                id: 'travel_id'
            }
            data = utils.queryKeyChange(data, keys)
            utils.post('travel_comment/add', data).then(res => {
                let keys = {}
                res.data = utils.queryKeyChange(res.data, keys)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },
}
