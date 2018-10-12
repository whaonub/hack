const state = {
    currentTab: 1,
    loading: true,
    hasData: false,
    selected:0,
    parameters: {},
    popupData: "",
    popupVisible:false,
    guideSelectList: [{
            name: 'tag',
            title: '标签',
            id: 1,
            values: [
                { title: '011' },
                { title: '好玩的' },
                { title: '011' },
                { title: '好玩的' },
                { title: '011' },
                { title: '好玩的' },
                { title: '011' },
                { title: '好玩的' }
            ]
        },
        {
            name: 'location',
            title: '时间',
            id: 2,
            values: [
                { title: '7月' },
                { title: '8月' }
            ]
        },
        {
            name: 'guide',
            title: '话题',
            id: 3,
            values: [
                { title: '美食' },
                { title: '美景' }
            ]
        }
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