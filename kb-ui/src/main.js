import 'babel-polyfill';
import Vue from 'vue';
import axios from './router/axios';

import VueAxios from 'vue-axios';
import App from './App';
import './permission' // 权限
import './errorLog' // 错误日志
import router from './router/router';
import store from './store';

import Element from 'element-ui';
import AVUE from '../packages/index.js';
import {
    loadStyle
} from './util/util'
import * as urls from '@/config/env'
import {
    iconfontUrl,
    iconfontVersion
} from '@/config/env'
import * as filters from './filters' // 全局filter
import './styles/common.scss'


import iView from "iview"
import "iview/dist/styles/iview.css"
Vue.config.productionTip = false
Vue.use(Element)
Vue.use(VueAxios, axios)

Object.keys(urls).forEach(key => {
    Vue.prototype[key] = urls[key]
})

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})
iconfontVersion.forEach(ele => {
    loadStyle(iconfontUrl.replace('$key', ele))
})


export function createApp() {
    const app = new Vue({
        router,
        store,
        render: h => h(App)
    })
    return {
        app,
        router,
        store
    }
}