const state = {
    navList:[
        {title:'圈圈',id:1},
        {title:'话题',id:2},
        {title:'动态',id:3},
    ],
    currentTab:1,
    circle:{
        imgList:[
            {img:'哈哈哈',id:1,link:'/'},
            {img:'呵呵呵',id:2,link:'/'},
            {img:'啦啦啦',id:3,link:'/'},
            {img:'嘀嘀嘀',id:4,link:'/'},
        ]
    },
    topic:{
        list:[
            {
                id:1,
                photo:'照片呀',
                name:'晨晨',
                isNotice:true,
                title:'世界上会玩的人又少了一个',
                content:'安东尼去世了',
                tags:['餐饮','娱乐'],
                hasJion:{
                    num:382,
                    photos:['照片1','照片2','照片3']
                }
            },
            {
                id:2,
                photo:'照片呀',
                name:'晨晨',
                isNotice:true,
                title:'世界上会玩的人又少了一个',
                content:'安东尼去世了',
                tags:['餐饮','娱乐'],
                hasJion:{
                    num:382,
                    photos:['照片1','照片2','照片3']
                }
            }
        ],
    },
    dynamic:{
        list:[
            {
                id:1,
                photo:'照片呀',
                name:'晨晨',
                time:'2018-07-08',
                content:'安东尼去世了',
                imgList:['123','123'],
                tags:['餐饮','娱乐'],
                message:5,
                agree:4
            },
            {
                id:2,
                photo:'照片呀',
                name:'晨晨',
                time:'2018-07-08',
                content:'安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了',
                imgList:['123','123'],
                tags:['餐饮','娱乐'],
                message:5,
                agree:4
            },
            {
                id:3,
                photo:'照片呀',
                name:'晨晨',
                time:'2018-07-08',
                content:'安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了',
                imgList:['123','123'],
                tags:['餐饮','娱乐'],
                message:5,
                agree:4
            }
        ]
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