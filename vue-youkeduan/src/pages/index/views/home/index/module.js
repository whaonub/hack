const state = {
    currentTab:1,
    list:[
        {title:'参团',id:1,link:'/home/join_group'},
        {title:'产品',id:2,link:'/home/product'},
        {title:'导游',id:3,link:'/home/guide'}
    ],
    swiperList:[
        {

        }
    ],
    guide:{

    },
    product:{

    },
    joinGroup:{

    },
    guideSelectList:[
        {
            name:'tag',
            values:[
                {value: '-1', title: '按标签筛选'},
                {value: '0', title: '011'},
                {value: '1', title: '好玩的'}
            ]
        },
        {
            name:'location',
            values:[
                {value: '-1', title: '按地区筛选'},
                {value: '0', title: '北京'},
                {value: '1', title: '上海'}
            ]
        },
        {
            name:'guide',
            values:[
                {value: '-1', title: '按导游筛选'},
                {value: '0', title: '王浩'},
                {value: '1', title: '小王同学'}
            ]
        }
    ],
    productSelectList:[
        {
            name:'tag',
            values:[
                {value: '-1', title: '按标签筛选'},
                {value: '0', title: '111'},
                {value: '1', title: '222'}
            ]
        },
        {
            name:'location',
            values:[
                {value: '-1', title: '按地区筛选'},
                {value: '0', title: '333'},
                {value: '1', title: '444'}
            ]
        },
        {
            name:'guide',
            values:[
                {value: '-1', title: '按导游筛选'},
                {value: '0', title: '555'},
                {value: '1', title: '666'}
            ]
        }
    ],
    joinGroupSelectList:[
        {
            name:'tag',
            values:[
                {value: '-1', title: '按标签筛选'},
                {value: '0', title: '211'},
                {value: '1', title: '222'}
            ]
        },
        {
            name:'location',
            values:[
                {value: '-1', title: '按地区筛选'},
                {value: '0', title: '233'},
                {value: '1', title: '244'}
            ]
        },
        {
            name:'guide',
            values:[
                {value: '-1', title: '按导游筛选'},
                {value: '0', title: '255'},
                {value: '1', title: '266'}
            ]
        }
    ],
    location:'昆明',
    loading: true,
    hasData: false,
    parameters:{},
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