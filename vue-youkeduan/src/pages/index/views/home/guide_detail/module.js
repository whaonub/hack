const state = {
    navList: [
        { title: '组团', id: 1 },
        { title: '产品', id: 2 },
        { title: '圈圈', id: 3 },
    ],
    footerList:{
        titleLeft:"预约定制",
        titleRight:"对话"
    },
    guideList:[
        {photo:'张三的照片',name:'张三',location:'北京',id:0,star:3,tags:['娱乐','温柔','会游泳']},
        {photo:'李四的照片',name:'李四',location:'上海',id:1,star:1,tags:['娱乐','温柔','会游泳']},
        {photo:'王五的照片',name:'王五',location:'广州',id:2,star:4,tags:['娱乐','温柔','会游泳']},
        {photo:'张三的照片',name:'张三',location:'北京',id:3,star:5,tags:['娱乐','温柔','会游泳']},
        {photo:'李四的照片',name:'李四',location:'上海',id:4,star:2,tags:['娱乐','温柔','会游泳']},
        {photo:'王五的照片',name:'王五',location:'广州',id:5,star:3,tags:['娱乐','温柔','会游泳']},
        {photo:'张三的照片',name:'张三',location:'北京',id:6,star:4,tags:['娱乐','温柔','会游泳']},
        {photo:'李四的照片',name:'李四',location:'上海',id:7,star:1,tags:['娱乐','温柔','会游泳']},
        {photo:'王五的照片',name:'王五',location:'广州',id:8,star:3,tags:['娱乐','温柔','会游泳']},
    ],
    currentTab: 1,
    circle: {
        imgList: [
            { img: '哈哈哈', id: 1, link: '/' },
            { img: '呵呵呵', id: 2, link: '/' },
            { img: '啦啦啦', id: 3, link: '/' },
            { img: '嘀嘀嘀', id: 4, link: '/' },
        ]
    },
    topic: {
        list: [{
                id: 1,
                photo: '照片呀',
                name: '晨晨',
                isNotice: true,
                title: '世界上会玩的人又少了一个',
                content: '安东尼去世了',
                tags: ['餐饮', '娱乐'],
                hasJion: {
                    num: 382,
                    photos: ['照片1', '照片2', '照片3']
                }
            },
            {
                id: 2,
                photo: '照片呀',
                name: '晨晨',
                isNotice: true,
                title: '世界上会玩的人又少了一个',
                content: '安东尼去世了',
                tags: ['餐饮', '娱乐'],
                hasJion: {
                    num: 382,
                    photos: ['照片1', '照片2', '照片3']
                }
            }
        ],
    },
    dynamic: {
        list: [{
                id: 1,
                photo: '照片呀',
                name: '晨晨',
                time: '2018-07-08',
                content: '安东尼去世了',
                imgList: ['123', '123'],
                tags: ['餐饮', '娱乐'],
                message: 5,
                agree: 4
            },
            {
                id: 2,
                photo: '照片呀',
                name: '晨晨',
                time: '2018-07-08',
                content: '安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了',
                imgList: ['123', '123'],
                tags: ['餐饮', '娱乐'],
                message: 5,
                agree: 4
            },
            {
                id: 3,
                photo: '照片呀',
                name: '晨晨',
                time: '2018-07-08',
                content: '安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了安东尼去世了',
                imgList: ['123', '123'],
                tags: ['餐饮', '娱乐'],
                message: 5,
                agree: 4
            }
        ]
    }
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