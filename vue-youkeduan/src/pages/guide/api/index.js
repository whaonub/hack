import common from './common.js'
import home from './order.js'
import login from './login.js'
import user from './user.js'
import product from './product.js'
import strategy from './strategy.js'
import wallet from './wallet.js'
import order from './home.js'

/**
 * 接口类
 * @type {{}}strategy
 */
let api = {
    ...common,
    ...home,
    ...login,
    ...user,
    ...product,
    ...strategy,
    ...wallet,
    ...order,
}

export default api
