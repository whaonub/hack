const state = {
    currentTab: 1,
    tabbarList: [
      {title:'首页',icon:'shouye',id:1,link:'/home'},
      {title:'圈圈',icon:'iconset0456',id:2,link:'/circles'},
      {title:'会话',icon:'huihua',id:3,link:'/session'},
      {title:'我的',icon:'wode1',id:4,link:'/mine'}
    ],
    loading: true,
    hasData: false,
    parameters:{},
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