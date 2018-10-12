const state = {
    messageList:[
        {id:1,icon:'xinfengyoujian',title:'系统消息',link:'/',content:'向内行走1.0已发布'},
        {id:2,icon:'xiaoxi',title:'评论消息',link:'/',content:'向内行走1.1已发布'},
        {id:3,icon:'dingdan',title:'评论消息',link:'/',content:'向内行走1.2已发布'},
    ]
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