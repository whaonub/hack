const state = {
    list:[
        {
            img: "@/pages/index/images/product1.png",
            title: '过桥米线',
            aside: '在云南，需要一场具有仪式感的过桥米线',
            price: '80',
            originalPrice: '800',
            sellOut: '34',
            tags:['美景','海鸥'],
            id:1
        },
        {
            img: "@/pages/index/images/product1.png",
            title: '过桥米线',
            aside: '在云南，需要一场具有仪式感的过桥米线',
            price: '80',
            originalPrice: '800',
            sellOut: '34',
            tags:['美景','海鸥'],
            id:2
        },
        {
            img: "@/pages/index/images/product1.png",
            title: '过桥米线',
            aside: '在云南，需要一场具有仪式感的过桥米线',
            price: '80',
            originalPrice: '800',
            sellOut: '34',
            tags:['美景','海鸥'],
            id:3
        },
        {
            img: "@/pages/index/images/product1.png",
            title: '过桥米线',
            aside: '在云南，需要一场具有仪式感的过桥米线',
            price: '80',
            originalPrice: '800',
            sellOut: '34',
            tags:['美景','海鸥'],
            id:4
        }
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
     actions,
 }