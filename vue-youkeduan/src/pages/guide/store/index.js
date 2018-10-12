import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import config from '../js/config'
import router from './router'
import common from './common'
import user from './user'

Vue.use(Vuex);

//ie兼容问题（未定义Promise）
window.Promise = Promise;

const vuexLocal = new VuexPersistence({
    key: config.environmentPrefix + 'vuex',
    storage: window.localStorage,
})

let store = new Vuex.Store({
    //strict: process.env.NODE_ENV !== 'production',
    plugins: [vuexLocal.plugin],
    modules: {
        'router': router,
        'common': common,
        'user': user,
    }
})

export default store
