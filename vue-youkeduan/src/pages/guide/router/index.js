import Vue from 'vue'
import Router from 'vue-router'
import Vuex from '../store'
import utils from '../js'
import test from './test'
import common from './common'
import home from './home'
import login from './login'
import user from './user'
import product from './product'
import strategy from './strategy'
import message from './message'
import order from './order'

Vue.use(Router)

let router = new Router({
    mode: 'hash', //可选值: "hash" | "history"
    routes: [
        ...test,
        ...common,
        ...home,
        ...login,
        ...user,
        ...product,
        ...strategy,
        ...message,
        ...order,
    ]
})

//路由跳转前的处理
router.beforeEach((to, from, next) => {
    //路由不存在跳转到首页
    if (to.name === null) {
        return next({name: 'index'})
    }

    //登录控制
    let notLogin = [] //不需要要验证的路由
    for (let key in login) {
        notLogin.push(login[key].name)
    }
    if (!Vuex.state.user.token && notLogin.indexOf(to.name) == -1) {
        return next({name: 'login'})
    }

    //底部导航切换
    if (to.meta.currentNav) {
        Vuex.commit('common/update', {
            currentNav: to.meta.currentNav
        })
    }

    next()
})

//路由跳转后的处理
router.afterEach((to, from, next) => {
    utils.setTitle(to.meta.title) //设置网页标题
})

export default router
