import common from './common.js'
import register from './register'
import home from './home'
/**
 * 接口类
 * @type {{}}strategy
 */
let api = {
    ...common,
    ...register,
    ...home
}

export default api