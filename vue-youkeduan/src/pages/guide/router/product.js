/**
 * 路由设置
 * meta 的参数（网页标题：title(必填)，index: 当前页面的层级， 当前激活菜单：active(底部展示时必填)， 是否缓存：cache）
 */

//根据不同环境采用不同的方法引入视图文件
const load = require('./load_' + process.env.NODE_ENV)

const index = load('product/index') //产品首页
const detail = load('product/detail') //产品详情
const share = load('product/share') //共享产品
const release = load('product/release') //已发布的产品


export default [
    {
        path: '/product',
        name: 'product',
        component: index,
        meta: {
            title: '我的产品',
            index: 2,
        },
    }, {
        path: '/product/detail',
        name: 'productDetail',
        component: detail,
        meta: {
            title: '产品提交',
            index: 3,
        },
    },{
        path: '/product/share',
        name: 'productShare',
        component: share,
        meta: {
            title: '共享产品库',
            index: 3,
        },
    },{
        path: '/product/release',
        name: 'productRelease',
        component: release,
        meta: {
            title: '已发布的产品',
            index: 2,
        },
    },
]
