/**
 * 工具导出入口
 */

import utils from './utils'
import validator from './validator'

let index = {
    ...utils,
    validator: validator,
}

export default index