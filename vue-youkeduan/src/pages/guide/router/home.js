/**
 * 路由设置
 * meta 的参数（网页标题：title(必填)，index: 当前页面的层级， 当前激活菜单：active(底部展示时必填)， 是否缓存：cache）
 */

//根据不同环境采用不同的方法引入视图文件
const load = require('./load_' + process.env.NODE_ENV)

//异步加载的视图
const index = load('index/index') //首页
const im = load('im/index') //首页
const buyerDetail = load('index/buyerDetail') //抢单详情


//带有底部导航的路由
export default [
    {//默认首页
        path: '/',
        redirect: '/index',
    }, {
        path: '/index',
        name: 'index',
        component: index,
        meta: {
            index: 1,
            title: '抢单大厅',
            currentNav: 1,
        },
    }, {
        path: '/im',
        name: 'im',
        component: im,
        meta: {
            index: 1,
            title: '会话',
        },
    }, {
        path: '/buyerDetail',
        name: 'buyerDetail',
        component: buyerDetail,
        meta: {
            index: 2,
            title: '抢单详情',
        },
    }
]
