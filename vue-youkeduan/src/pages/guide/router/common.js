/**
 * 路由设置
 * meta 的参数（网页标题：title(必填)，index: 当前页面的层级， 当前激活菜单：active(底部展示时必填)， 是否缓存：cache）
 */

//根据不同环境采用不同的方法引入视图文件
const load = require('./load_' + process.env.NODE_ENV)

//异步加载的视图
const region = load('common/region') //服务地区

export default [
    {
        path: '/region',
        name: 'region',
        component: region,
        meta: {
            title: '服务地区',
            index: 4,
        },
    },
]
