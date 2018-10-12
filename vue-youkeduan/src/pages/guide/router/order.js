/**
 * 路由设置
 * meta 的参数（网页标题：title(必填)，当前激活菜单：active(左侧展示时必填)， 是否在左侧展示：show，左侧菜单图标：icon， 是否缓存：cache, 旧的路由的别名: oldName）
 */

//根据不同环境采用不同的方法引入视图文件
const load = require('./load_' + process.env.NODE_ENV)

const index = load('order/index') //我的订单
const touristDetail = load('order/touristDetail') //游客详情
const productDetail = load('order/productDetail') //产品详情
const travelItinerary = load('order/travelItinerary') //上传行程单
const preview = load('order/preview') //预览


const clusterList = load('order/clusterList') //组团订单列表
const details = load('order/details') //订单详情
const addJourney = load('order/addJourney') //添加行程单
const createJourney = load('order/createJourney') //生成行程单
const informJourney = load('order/informJourney') //提交行程单
const journeyList = load('order/journeyList') //行程单列表
const serviceJourney = load('order/serviceJourney') //服务行程单

export default [
    {
        path: '/order',
        name: 'order',
        component: index,
        meta: {
            index: 1,
            title: '订单',
        },
    }, {
        path: '/touristDetail',
        name: 'touristDetail',
        component: touristDetail,
        meta: {
            index: 2,
            title: '订单详情',
        },
    }, {
        path: '/productDetail',
        name: 'productDetail',
        component: productDetail,
        meta: {
            index: 2,
            title: '订单详情',
        },
    }, {
        path: '/travelItinerary',
        name: 'travelItinerary',
        component: travelItinerary,
        meta: {
            index: 2,
            title: '上传行程单',
        },
    }, {
        path: '/preview',
        name: 'preview',
        component: preview,
        meta: {
            index: 4,
            title: '预览',
        },
    }, {
        path: '/order/clusterList',
        name: 'orderClusterList',
        component: clusterList,
        meta: {
            index: 2,
            title: '组团订单',
        },
    }, {
        path: '/order/details',
        name: 'orderDetails',
        component: details,
        meta: {
            index: 3,
            title: '订单详情',
        },
    }, {
        path: '/order/addJourney',
        name: 'addJourney',
        component: addJourney,
        meta: {
            index: 4,
            title: '制作行程单',
        },
    }, {
        path: '/order/createJourney',
        name: 'createJourney',
        component: createJourney,
        meta: {
            index: 5,
            title: '制作行程单',
        },
    }, {
        path: '/order/informJourney',
        name: 'informJourney',
        component: informJourney,
        meta: {
            index: 5,
            title: '制作行程单',
        },
    }, {
        path: '/order/journeyList',
        name: 'journeyList',
        component: journeyList,
        meta: {
            index: 5,
            title: '制作行程单',
        },
    }, {
        path: '/order/serviceJourney',
        name: 'serviceJourney',
        component: serviceJourney,
        meta: {
            index: 5,
            title: '制作行程单',
        },
    },
]
