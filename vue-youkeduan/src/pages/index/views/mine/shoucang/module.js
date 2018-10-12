const state = {
    navList:[
        {title:'全部',id:1},
        {title:'执行中',id:2},
        {title:'售后',id:3},
        {title:'已完成',id:4},
    ],
    currentTab:1
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