/**
 * h5+(plus) api
 */
export default {
    /**
     * h5+的plus初始化
     * @param plusReady
     */
    plus(plusReady, error = null) {
        let hasPlus = false
        if (window.plus) {
            hasPlus = true
            plusReady()
        }else {
            document.addEventListener('plusready', plusReady, false)
        }

        if(!hasPlus && typeof error == 'function'){
            error()
        }
    },
}
