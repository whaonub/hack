const state = {
    currentTab: 1,
    loading: true,
    hasData: false,
    parameters: {},
    informationList:[
        {
            photolist:1
        },
        {
           
        },
        {
            product:1
        }
    ]

}
const mutations = {
    CHANGESTATE(state, payload) {
        for (let i in payload) {
            state[i] = payload[i]
        }
    }
}
const actions = {
    changeState({ commit, state }, data) {
        commit('CHANGESTATE', data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}