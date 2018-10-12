/**
 * 服务功能，直接被js调用
 */
import {Toast} from 'mint-ui';

export default {
    /**
     * 信息弹出框
     * @param text
     * @param position
     */
    myMessage(text, position = 'bottom') {
        Toast({
            message: text,
            position: position,
        })
    },
}