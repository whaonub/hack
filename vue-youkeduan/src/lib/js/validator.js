/**
 * 数据验证
 */

export default {
    /**
     * 用户名验证
     * @param rule
     * @param value
     * @param callback
     */
    userName(rule, value, callback) {
        callback() //关闭验证
        let re = /^[a-zA-Z0-9_-]{4,16}$/
        if (!re.test(value)) {
            callback(new Error('用户名必须为字母、数字、下划线、减号，4到16个字符'));
        } else {
            callback()
        }
    },

    /**
     *  密码验证
     * @param rule
     * @param value
     * @param callback
     */
    password(rule, value, callback) {
        callback() //关闭验证
        let re = /^(?![^a-zA-Z]+$)(?!\D+$).{6,16}$/
        if (!re.test(value)) {
            callback(new Error('密码中必须包含字母、数字，6到16个字符'));
        } else {
            callback()
        }
    },
}
