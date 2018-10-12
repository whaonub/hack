/**
 * 路由设置
 * meta 的参数（网页标题：title(必填)，index: 当前页面的层级， 当前激活菜单：active(底部展示时必填)， 是否缓存：cache）
 */

//根据不同环境采用不同的方法引入视图文件
const load = require('./load_' + process.env.NODE_ENV)

const strategy = load('strategy/index') //产品首页
const strategyDetails = load('strategy/strategyDetails') //攻略详情
const strategyIssue = load('strategy/strategyIssue') //添加攻略

export default [
    {
        path: '/strategy',
        name: 'strategy',
        component: strategy,
        meta: {
            title: '我的攻略',
            index: 2,
        },
    }, {
        path: '/strategyDetails',
        name: 'strategyDetails',
        component: strategyDetails,
        meta: {
            title: '攻略详情',
            index: 3,
        },
    }, {
        path: '/strategyIssue',
        name: 'strategyIssue',
        component: strategyIssue,
        meta: {
            title: '添加攻略',
            index: 3,
        },
    },
]
