const state = {
    currentTab: 1,
    tabbarList: [
        { title: '详情', id: 1 },
        { title: '须知', id: 2 },
        { title: '报名游客', id: 3 },
        { title: '评论', id: 4 }
    ],
    imgSrc:"@/pages/index/images/productdetail.png",
    loading: true,
    hasData: false,
    parameters: {},
    footerList:{
        titleLeft:"预约定制",
        titleRight:"对话"
    }
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