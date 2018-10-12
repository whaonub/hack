const state = {
    navList:[
        {title:'游客',id:1},
        {title:'导游',id:2},
    ],
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
    currentTab:1,
}
const mutations = {
    CHANGESTATE (state,payload) {
        for( let i in payload){
            state[i] = payload[i]
        }
    }
}
const actions = {
    changeState({commit,state},data){
        commit('CHANGESTATE',data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}