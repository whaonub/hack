import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import config from '../js/config'
//登陆注册
import user from './login/user'
import registerHoby from '../views/register/hoby/module'
import registerCircles from '../views/register/circles/module'
import registerProduct from '../views/register/product/module'
//主页
import index from '../views/index/module'
/* home */
import home from '../views/home/index/module'
import homeProductDetail from '../views/home/product_detail/module'
import homeShopDetail from '../views/home/shop_detail/module'
import homeGuideDetail from '../views/home/guide_detail/module'
import homeZuTuanDetail from '../views/home/zutuan_detail/module'

/* circles */
import circles from '../views/circles/index/module'
import circlesTheme from '../views/circles/theme/module'
import circlesCircle from '../views/circles/circle/module'

/* session */
import session from '../views/session/index/module'
/* mine */
import mine from '../views/mine/index/module'
import mineDaoyou from '../views/mine/daoyou/module'
import mineFapiao from '../views/mine/fapiao/module'
import mineGuanzhu from '../views/mine/guanzhu/module'
import mineQuanquan from '../views/mine/quanquan/module'
import mineShezhi from '../views/mine/shezhi/module'
import mineShoucang from '../views/mine/shoucang/module'
import mineTuangou from '../views/mine/tuangou/module'
import mineXiaoxi from '../views/mine/xiaoxi/module'
import mineXuqiu from '../views/mine/xuqiu/module'
import mineAddXuqiu from '../views/mine/addXuqiu/module'


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
        user,
        register: {
            modules: {
                registerHoby,
                registerCircles,
                registerProduct
            }
        },
        index: {
            modules: {
                index,
                home,
                circles,
                session,
                mine,
            }
        },
        home: {
            modules: {
                homeProductDetail,
                homeShopDetail,
                homeGuideDetail,
                homeZuTuanDetail
            }
        },
        circles: {
            modules: {
                circlesTheme,
                circlesCircle
            }
        },
        session: {
            modules: {

            }
        },
        mine: {
            modules: {
                daoyou: mineDaoyou,
                fapiao: mineFapiao,
                guanzhu: mineGuanzhu,
                quanquan: mineQuanquan,
                shezhi: mineShezhi,
                shoucang: mineShoucang,
                tuangou: mineTuangou,
                xiaoxi: mineXiaoxi,
                xuqiu: mineXuqiu,
                addXuqiu: mineAddXuqiu
            }
        },
    }
})

export default store