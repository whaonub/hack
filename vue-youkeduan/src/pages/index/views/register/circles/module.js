import api from '@/pages/index/api'

const state = {
    list:[
        {img:'哈哈哈',id:1,link:'/'},
        {img:'呵呵呵',id:2,link:'/'},
        {img:'啦啦啦',id:3,link:'/'},
        {img:'嘀嘀嘀',id:4,link:'/'},
        {img:'嘀嘀嘀',id:5,link:'/'},{img:'嘀嘀嘀',id:6,link:'/'},
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
    },
    async getCircleList({commit,state}){
        const res = await api.getCircleList()
        console.log(res)
        commit('CHANGESTATE',{list:res.data})
    }
}
 export default {
     namespaced: true,
     state,
     mutations,
     actions,
 }