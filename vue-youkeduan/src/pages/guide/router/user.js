/**
 * 路由设置
 * meta 的参数（网页标题：title(必填)，index: 当前页面的层级， 当前激活菜单：active(底部展示时必填)， 是否缓存：cache）
 */

//根据不同环境采用不同的方法引入视图文件
const load = require('./load_' + process.env.NODE_ENV)

const user = load('user/index') //个人中心
const starLevel = load('user/starLevel') //我的星级
const starLevelRecord = load('user/starLevelRecord') //成长记录
const starLevelRule = load('user/starLevelRule') //星级规则
const wallet = load('user/wallet') //我的钱包
const bill = load('user/bill') //账单
const withdraw = load('user/withdraw') //提现
const completeInfo = load('user/completeInfo') //认证管理(完善信息)
const vehicleInfo = load('user/vehicleInfo') //车辆信息
const label = load('user/label') //我的标签


const about = load('user/about') //关于我们

export default [
    {
        path: '/user',
        name: 'user',
        component: user,
        meta: {
            title: '个人中心',
            index: 1,
        },
    }, {
        path: '/user/starLevel',
        name: 'userStarLevel',
        component: starLevel,
        meta: {
            title: '我的星级',
            index: 2,
        },
    }, {
        path: '/user/starLevelRecord',
        name: 'userStarLevelRecord',
        component: starLevelRecord,
        meta: {
            title: '成长记录',
            index: 3,
        },
    }, {
        path: '/user/starLevelRule',
        name: 'userStarLevelRule',
        component: starLevelRule,
        meta: {
            title: '星级规则',
            index: 3,
        },
    }, {
        path: '/user/wallet',
        name: 'userWallet',
        component: wallet,
        meta: {
            title: '账户',
            index: 2,
        },
    }, {
        path: '/user/bill',
        name: 'userBill',
        component: bill,
        meta: {
            title: '账单',
            index: 3,
        },
    }, {
        path: '/user/withdraw',
        name: 'userWithdraw',
        component: withdraw,
        meta: {
            title: '提现',
            index: 3,
        },
    }, {
        path: '/user/completeInfo',
        name: 'userCompleteInfo',
        component: completeInfo,
        meta: {
            title: '完善资料',
            index: 2,
        },
    }, {
        path: '/user/vehicleInfo',
        name: 'userVehicleInfo',
        component: vehicleInfo,
        meta: {
            title: '车辆信息',
            index: 3,
        },
    }, {
        path: '/user/label',
        name: 'userLabel',
        component: label,
        meta: {
            title: '我的标签',
            index: 2,
        },
    },


    {
        path: '/about',
        name: 'about',
        component: about,
        meta: {
            title: '关于我们',
            index: 3,
        },
    },
]
