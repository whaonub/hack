import api from '@/pages/index/api'

const state = {
    list:[ ]
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
    },
    async getData({commit,state},data){
        const res = await api.getlabelList()
        commit('CHANGESTATE',{list:res.data})
    }
 }
 
 export default {
     namespaced: true,
     state,
     mutations,
     actions,
 }