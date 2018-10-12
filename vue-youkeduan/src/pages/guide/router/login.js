/**
 * 路由设置
 * meta 的参数（网页标题：title(必填)，index: 当前页面的层级， 当前激活菜单：active(底部展示时必填)， 是否缓存：cache）
 */

//根据不同环境采用不同的方法引入视图文件
const load = require('./load_' + process.env.NODE_ENV)

//异步加载的视图
const login = load('login/login') //登录
const resetPassword = load('login/resetPassword') //重置密码
const register = load('login/register') //注册
const check = load('login/check') //等待审核
const checkLoser = load('login/checkLoser') //审核失败

//带有底部导航的路由
export default [
    {
        path: '/login',
        name: 'login',
        component: login,
        meta: {
            title: '登录',
            index: 1,
        },
    }, {
        path: '/resetPassword',
        name: 'resetPassword',
        component: resetPassword,
        meta: {
            title: '重置密码',
            index: 1,
        },
    }, {
        path: '/register',
        name: 'register',
        component: register,
        meta: {
            title: '注册账号',
            index: 1,
        },
    }, {
        path: '/check',
        name: 'check',
        component: check,
        meta: {
            title: '认证管理',
            index: 3,
        },
    }, {
        path: '/checkLoser',
        name: 'checkLoser',
        component: checkLoser,
        meta: {
            title: '审核失败',
            index: 3,
        },
    },
]
