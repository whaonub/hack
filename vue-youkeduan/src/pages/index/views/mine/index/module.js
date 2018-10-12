const state = {
    list:[
        {icon:'dingdan1',title:'团购订单',link:'/mine/tuangou'},
        {icon:'dingdan',title:'导游订单',link:'/mine/daoyou'},
        {icon:'xuqiuicon',title:'我的需求',link:'/mine/xuqiu'},
        {icon:'fapiaoguanli',title:'我的发票',link:'/mine/fapiao'},
        {icon:'guanzhu',title:'我的关注',link:'/mine/guanzhu'},
        {icon:'diqiu',title:'我的圈圈',link:'/mine/quanquan'},
        {icon:'shoucang',title:'我的收藏',link:'/mine/shoucang'},
        {icon:'xiaoxixinfengnews2',title:'系统消息',link:'/mine/xiaoxi'},
    ],
    userInfo:{
        photo: '',
        name: 'Joker',
        phone: '17600377919',
        location: '云南·红河',
        tag: ['码农','全宇宙最帅','牛逼逼逼~~']
    }
}
const mutations = {
    CHANGESTATE (state,payload) {
        for( let i in payload){
            state[i] = payload[i]
        }
    }
}
const actions = {
    changeState({commit,state},id){
        commit('CHANGESTATE',id)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}