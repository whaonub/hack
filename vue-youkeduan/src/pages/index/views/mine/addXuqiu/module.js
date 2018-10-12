const state = {
  
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