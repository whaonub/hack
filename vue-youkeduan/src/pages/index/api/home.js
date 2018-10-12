import utils from '../js/index'

export default {
    /* 导游列表 */
    async guideList(data = {}) {
        let keys = {}
        data = utils.queryKeyChange(data, keys)
        const res = await utils.post('/tourist/guide/get_guide_list', data)
        res.data = utils.queryKeyChange(res.data, data)
        return res
    },
    /* 导游详情 */
    async guideDetail(data = {}) {
        let keys = {}
        data = utils.queryKeyChange(data, keys)
        const res = await utils.post('/tourist/guide/guide_detail', data)
        res.data = utils.dataKeyChange(res.data, keys)
        return res
    }

}