const state = {
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