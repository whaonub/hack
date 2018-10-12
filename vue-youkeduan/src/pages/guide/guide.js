import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import utils from './js'
import config from './js/config'
import api from './api'
import plus from './js/plus'

utils.setRem() //设置rem对应的px值

Vue.config.productionTip = false

//全局配置
Vue.prototype.config = config

//工具库
Vue.prototype.fn = utils

//api管理
Vue.prototype.api = api

//h5+ api
Vue.prototype.plus = plus

//初始化plus环境
plus.plus(function () {
    plus.goBack() //监听返回按键
})

//添加Fastclick移除移动端点击延迟
import( /* webpackChunkName: "fastclick" */ 'fastclick').then(FastClick => {
    FastClick.attach(document.body)
})

//错误上报
import( /* webpackChunkName: "raven-js" */ 'raven-js').then(Raven => {
    const RavenVue = () => import('raven-js/plugins/vue')
    if (config.environment == 'local') {
        Vue.config.errorHandler = (err, vm, info) => {
            console.log(vm.$route.name + ' --- ' + err.message)
            console.error(err)
        }
    } else {
        Raven.config(config.ravenUrl, {
            release: config.versions,
        }).addPlugin(RavenVue, Vue).install();
    }
})

//检查是否需要升级
/*api.appCheck().then(res => {
    let newVersions = res.data['v_no'] //最新的版本号
    let must = res.data.v_must //是否需要强制升级
    let content = res.data.v_content //升级内容
    let path = res.data.v_path //下载地址

    plus.plus(function () {
        //获取当前版本号
        plus.getVersion().then(res => {
            let versions = res
            if (utils.versionsToNum(versions) < utils.versionsToNum(newVersions)) {
                if (must == 1) {//需要强制升级
                    plus.downFile(path).then(res => {
                        plus.installApp(res)
                    })
                } else {
                    plus.confirm('发现新版本，是否升级？', content, ['确定', '取消'], event => {
                        if (event.index == 0) {//确认升级
                            plus.downFile(path).then(res => {
                                plus.installApp(res)
                            })
                        }
                    })
                }

            }

        })
    })
})*/


new Vue({
    el: '#app',
    store,
    router,
    components: {App},
    template: '<App/>'
})
