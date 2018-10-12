const state = {
   img:'假装有图片',
   list:[
       {
           id:0,
           location: '岛象',
           date:'2018/06/06~2018/06/06',
           adult:'2',
           child:'1',
           remark:'需要接机'
       },
       {
        id:1,
        location: '岛象',
        date:'2018/06/06~2018/06/06',
        adult:'3',
        child:'2',
        remark:'哈哈哈哈哈'
    },
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
    actions
}