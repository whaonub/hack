const state = {
    currentTab: 1,
    tabbarList: [
        { title: '详情', id: 1 },
        { title: '须知', id: 2 },
        { title: '报名游客', id: 3 },
        { title: '评论', id: 4 }
    ],
    navList: [
        { title: '组团', id: 1 },
        { title: '需求', id: 2 },
        { title: '圈圈', id: 3 },
    ],
    imgSrc:"@/pages/index/images/productdetail.png",
    loading: true,
    hasData: false,
    parameters: {},
    footerList:{
        titleLeft:"咨询管家",
        titleRight:"立即报名"
    },
    guestList:[
        {photo:'张三的照片',name:'张三',location:'北京',id:0},
        {photo:'李四的照片',name:'李四',location:'上海',id:1},
        {photo:'王五的照片',name:'王五',location:'广州',id:2},
        {photo:'张三的照片',name:'张三',location:'北京',id:3},
        {photo:'李四的照片',name:'李四',location:'上海',id:4},
        {photo:'王五的照片',name:'王五',location:'广州',id:5},
        {photo:'张三的照片',name:'张三',location:'北京',id:6},
        {photo:'李四的照片',name:'李四',location:'上海',id:7},
        {photo:'王五的照片',name:'王五',location:'广州',id:8},
    ],
    guideList:[
        {photo:'张三的照片',name:'张三',location:'北京',id:0,star:3,tags:['娱乐','温柔','会游泳']},
        {photo:'李四的照片',name:'李四',location:'上海',id:1,star:1,tags:['娱乐','温柔','会游泳']},
        {photo:'王五的照片',name:'王五',location:'广州',id:2,star:4,tags:['娱乐','温柔','会游泳']},
        {photo:'张三的照片',name:'张三',location:'北京',id:3,star:5,tags:['娱乐','温柔','会游泳']},
        {photo:'李四的照片',name:'李四',location:'上海',id:4,star:2,tags:['娱乐','温柔','会游泳']},
        {photo:'王五的照片',name:'王五',location:'广州',id:5,star:3,tags:['娱乐','温柔','会游泳']},
        {photo:'张三的照片',name:'张三',location:'北京',id:6,star:4,tags:['娱乐','温柔','会游泳']},
        {photo:'李四的照片',name:'李四',location:'上海',id:7,star:1,tags:['娱乐','温柔','会游泳']},
        {photo:'王五的照片',name:'王五',location:'广州',id:8,star:3,tags:['娱乐','温柔','会游泳']},
    ],
}
const mutations = {
    CHANGESTATE(state, payload) {
        for (let i in payload) {
            state[i] = payload[i]
        }
    }
}
const actions = {
    changeState({ commit, state }, id) {
        commit('CHANGESTATE', id)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}