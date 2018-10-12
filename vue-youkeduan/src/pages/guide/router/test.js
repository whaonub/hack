/**
 * 路由设置
 * meta 的参数（网页标题：title(必填)，index: 当前页面的层级， 当前激活菜单：active(底部展示时必填)， 是否缓存：cache）
 */

//根据不同环境采用不同的方法引入视图文件
const load = require('./load_' + process.env.NODE_ENV)

const test = load('test/index') //测试使用

export default [
    {
        path: '/test',
        name: 'test',
        component: test,
        meta: {
            index: 1,
            title: '测试',
        },
    },
]
