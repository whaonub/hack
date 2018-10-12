import utils from '../js/index'

export default {
    /* 登录 */
    async login(data={}){
        let keys = {}
        data = utils.queryKeyChange(data,keys)
        const res = await utils.post('/tourist/login/login_by_password',data)
        res.data = utils.dataKeyChange(res.data,keys)
        return res
    },
    /**
    * 注册
    * @param data
    * @returns {Promise<any>}
    **/
    async register(data={}){
        let keys = {}
        data = utils.queryKeyChange(data,keys)
        const res = await utils.post('/tourist/register/reg',data)
        res.data = utils.dataKeyChange(res.data,keys)
        return res
    },
    /* 标签列表 */
    async getlabelList(data={}){
        let keys = {}
        data = utils.queryKeyChange(data,keys)
        const res = await utils.post('/tourist/label/label_list',data)
        res.data = utils.dataKeyChange(res.data,keys)
        return res
    },
    /* 添加标签 */
    async addLabel(data={}){
        let keys = {}
        data = utils.queryKeyChange(data,keys)
        const res = await utils.post('/tourist/label/add_label',data)
        res.data = utils.dataKeyChange(res.data,keys)
        return res
    },
    /* 圈圈列表 */
    async getCircleList(data={}){
        let keys = {}
        data = utils.queryKeyChange(data,keys)
        const res = await utils.post('/tourist/circle/circle_list',data)
        res.data = utils.dataKeyChange(res.data,keys)
        return res
    },
    /* 关注圈圈 */
    async followCircle(data={}){
        let keys = {}
        data = utils.queryKeyChange(data,keys)
        const res = await utils.post('/tourist/circle/follow_circle',data)
        res.data = utils.dataKeyChange(res.data,keys)
        return res
    }
}
