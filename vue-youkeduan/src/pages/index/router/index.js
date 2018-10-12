import Vue from 'vue'
import Router from 'vue-router'
import Vuex from '../store'
import utils from '../js'
import login from './login'
import home from './home'
import mine from './mine'
import circles from './circles'
import session from './session'



const load = require('./load_' + process.env.NODE_ENV)
const Index = load('index/Index')
const Session = load('session/index/Index')
const Circles = load('circles/index/Index')
const Home = load('home/index/Index')
const Mine = load('mine/index/Index')

Vue.use(Router)

let router = new Router({
    mode: 'hash', //可选值: "hash" | "history"
    routes: [{
            path: '/',
            name: 'index',
            component: Index,
            redirect: '/home',
            meta: {
                index: 1,
                title: ''
            },
            children: [{
                    path: '/home',
                    name: 'home',
                    component: Home,
                    meta: {
                        index: 2,
                        title: '首页',
                    }
                },
                {
                    path: '/circles',
                    name: 'circles',
                    component: Circles,
                    meta: {
                        index: 2,
                        title: '圈圈',
                    },
                },
                {
                    path: '/session',
                    name: 'session',
                    component: Session,
                    meta: {
                        index: 2,
                        title: '会话',
                    },
                },
                {
                    path: '/mine',
                    name: 'mine',
                    component: Mine,
                    meta: {
                        index: 2,
                        title: '我的',
                    },

                },

            ]
        },
        ...login,
        ...home,
        ...mine,
        ...circles,
        ...session,
    ]
})

//路由跳转前的处理
router.beforeEach((to, from, next) => {
    //路由不存在跳转到首页
    if (to.name === null) {
        return next({ name: 'index' })
    }
    // const notLogin = []
    // for (let key in login) {
    //     notLogin.push(login[key].name)
    // }
    // if (!localStorage.token && notLogin.indexOf(to.name) == -1) {
    //     return next({name: 'login'})
    // }
    next()
})

//路由跳转后的处理
router.afterEach((to, from, next) => {
    utils.setTitle(to.meta.title) //设置网页标题
})

export default router