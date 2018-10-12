/**
 * 工具导出入口
 */

import utils from '../../../lib/js'
import ajax from './ajax'
import service from './service'
import fn from './function'
import aliOss from './aliOss'

let index = {
    ...utils,
    ...ajax,
    ...service,
    ...fn,
    ...aliOss
}

export default index
