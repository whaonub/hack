/**
 * 路由设置
 * meta 的参数（网页标题：title(必填)，index: 当前页面的层级， 当前激活菜单：active(底部展示时必填)， 是否缓存：cache）
 */

//根据不同环境采用不同的方法引入视图文件
const load = require('./load_' + process.env.NODE_ENV)

const message = load('message/index') //消息首页
const messageList = load('message/messageList') //消息列表
const messageDetail = load('message/messageDetail') //消息详情

export default [
    {
        path: '/message',
        name: 'message',
        component: message,
        meta: {
            title: '消息',
            index: 2,
        },
    }, {
        path: '/message/list',
        name: 'messageList',
        component: messageList,
        meta: {
            title: '消息列表',
            index: 3,
        },
    }, {
        path: '/message/detail',
        name: 'messageDetail',
        component: messageDetail,
        meta: {
            title: '消息详情',
            index: 4,
        },
    },
]
