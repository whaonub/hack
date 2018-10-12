const load = require('./load_' + process.env.NODE_ENV)
const Daoyou = load('mine/daoyou/Index')
const Fapiao = load('mine/fapiao/Index')
const Guanzhu = load('mine/guanzhu/Index')
const Quanquan = load('mine/quanquan/Index')
const Shezhi = load('mine/shezhi/Index')
const Shoucang = load('mine/shoucang/Index')
const Tuangou = load('mine/tuangou/Index')
const Xiaoxi = load('mine/xiaoxi/Index')
const Xuqiu = load('mine/xuqiu/Index')
const AddXuqiu = load('mine/addXuqiu/Index')

export default [
   
    {
        path: '/mine/daoyou',
        name: 'mine/daoyou',
        component: Daoyou,
        meta: {
            index: 2,
            title: ''
        },
    },
    {
        path: '/mine/fapiao',
        name: 'mine/fapiao',
        component: Fapiao,
        meta: {
            index: 2,
            title: ''
        },
    },
    {
        path: '/mine/guanzhu',
        name: 'mine/guanzhu',
        component: Guanzhu,
        meta: {
            index: 2,
            title: ''
        },
    },
    {
        path: '/mine/quanquan',
        name: 'mine/quanquan',
        component: Quanquan,
        meta: {
            index: 2,
            title: ''
        },
    },
    {
        path: '/mine/shezhi',
        name: 'mine/shezhi',
        component: Shezhi,
        meta: {
            index: 2,
            title: ''
        },
    },
    {
        path: '/mine/shoucang',
        name: 'mine/shoucang',
        component: Shoucang,
        meta: {
            index: 2,
            title: ''
        },
    },
    {
        path: '/mine/tuangou',
        name: 'mine/tuangou',
        component: Tuangou,
        meta: {
            index: 2,
            title: ''
        },
    },
    {
        path: '/mine/xiaoxi',
        name: 'mine/xiaoxi',
        component: Xiaoxi,
        meta: {
            index: 2,
            title: ''
        },
    },
    {
        path: '/mine/xuqiu',
        name: 'mine/xuqiu',
        component: Xuqiu,
        meta: {
            index: 2,
            title: ''
        },
    },
    {
        path: '/mine/addxuqiu',
        name: 'mine/addXuqiu',
        component: AddXuqiu,
        meta: {
            index: 2,
            title: ''
        },
    },
]