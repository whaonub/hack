/**
 * 工具类
 */
import qs from "qs"
import CryptoJS from 'crypto-js'

export default {
    /**
     * 获取系统类型
     * @returns {{userAgent: string, isAndroid: boolean, isIphone: boolean, isIpad: boolean, isWeixin: boolean}}
     */
    osType() {
        const type = {
            userAgent: navigator.userAgent.toLowerCase(),
            isAndroid: Boolean(navigator.userAgent.match(/android/ig)),
            isIphone: Boolean(navigator.userAgent.match(/iphone|ipod/ig)),
            isIpad: Boolean(navigator.userAgent.match(/ipad/ig)),
            isWeixin: Boolean(navigator.userAgent.match(/MicroMessenger/ig)),
        }
        return type
    },

    /**
     * wap端使用rem单位
     * @param doc
     * @param win
     */
    setRem(doc = document, win = window) {
        let width = 750 //设计稿的宽度（1rem = 100px）
        let docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                let clientWidth = docEl.clientWidth
                if (!clientWidth) {
                    return false
                }

                if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {//移动端
                    docEl.style.fontSize = 100 * (clientWidth / width) + 'px'
                } else {//pc端
                    docEl.style.fontSize = '50px'
                }
            }
        win.addEventListener(resizeEvt, recalc, false)
        doc.addEventListener('DOMContentLoaded', recalc, false)
    },

    /**
     * 设置当前url地址
     * @param parameter
     */
    setUrl(parameter) {
        let url = window.location
        let parameterOld = qs.parse(url.hash.split("?")[1])

        for (let key in parameter) {
            parameterOld[key] = parameter[key]
        }

        parameterOld = qs.stringify(parameterOld)
        window.location.href = url.origin + url.pathname + '#/?' + parameterOld
    },

    /**
     * 设置网页标题
     * @param title
     */
    setTitle(title = '管理平台') {
        window.document.title = '向内行走 | ' + title
    },

    /**
     * 对象排序
     * @param obj
     * @returns {{}}
     */
    objSort(obj) {
        //先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
        let newkey = Object.keys(obj).sort()
        //创建一个新的对象，用于存放排好序的键值对
        let newObj = {}
        //遍历newkey数组
        for (let i = 0; i < newkey.length; i++) {
            //向新创建的对象中按照排好的顺序依次增加键值对
            newObj[newkey[i]] = obj[newkey[i]]
        }
        return newObj
    },

    /**
     * 更改对象的key (用于请求参数的key转化)
     * @param data
     * @param keys
     * @returns {*}
     */
    queryKeyChange(data, keys, negative = false) {
        data = this.deepClone(data) //对象深拷贝
        if (negative) {//开启反向
            for (let key in keys) {
                let value = keys[key]
                if (key == value) {
                    continue
                } else {
                    let tmp = data[value]
                    if (tmp !== undefined) {
                        data[key] = tmp
                        delete data[value]
                    }
                }
            }
        } else {
            for (let key in keys) {
                let value = keys[key]
                if (key == value) {
                    continue
                } else {
                    let tmp = data[key]
                    if (tmp !== undefined) {
                        data[value] = tmp
                        delete data[key]
                    }
                }
            }
        }
        return data
    },

    /**
     * 更改数据的key (用于接收的key转化)
     * @param data
     * @param keys
     * @returns {*}
     */
    dataKeyChange(data, keys, negative = true) {
        if (this.getType(data) == 'array') {
            for (let key in data) {
                let val = data[key]
                data[key] = this.dataKeyChange(val, keys, negative)
            }
        } else if (this.getType(data) == "object") {
            data = this.queryKeyChange(data, keys, negative)
            for (let key in data) {
                let val = data[key]
                data[key] = this.dataKeyChange(val, keys, negative)
            }
        }
        return data
    },

    /**
     * 判断是否是数组
     * @param data
     * @returns {boolean}
     */
    isArray(data) {
        return this.getType(data) == 'array'
    },

    /**
     * 判断数据类型
     * @param obj
     * @returns {*}
     */
    getType(obj) {
        let toString = Object.prototype.toString
        let map = {
            '[object Boolean]': 'boolean',
            '[object Number]': 'number',
            '[object String]': 'string',
            '[object Function]': 'function',
            '[object Array]': 'array',
            '[object Date]': 'date',
            '[object RegExp]': 'regExp',
            '[object Undefined]': 'undefined',
            '[object Null]': 'null',
            '[object Object]': 'object'
        }
        if (obj instanceof Element) {
            return 'element'
        }
        return map[toString.call(obj)]
    },

    /**
     * 深拷贝 //未检测
     * @param initalObj
     * @param finalObj
     * @returns {*|{}}
     */
    deepClone(data) {
        const self = this
        let type = self.getType(data)
        let obj
        if (type === 'array') {
            obj = []
        } else if (type === 'object') {
            obj = {}
        } else {
            //不再具有下一层次
            return data
        }
        if (type === 'array') {
            for (let i = 0, len = data.length; i < len; i++) {
                obj.push(self.deepClone(data[i]))
            }
        } else if (type === 'object') {
            for (let key in data) {
                obj[key] = self.deepClone(data[key])
            }
        }
        return obj
    },

    /**
     * DES对称加密
     * @param message
     * @param key
     * @returns {string}
     */
    encryptByDES(message, key) {
        let keyHex = CryptoJS.enc.Utf8.parse(key)
        let encrypted = CryptoJS.DES.encrypt(message, keyHex, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        })
        return encrypted.toString()
    },

    /**
     * 时间日期格式化
     * @param format
     * @returns {*}
     */
    dateFormat(dateObj, format) {
        let date = {
            "M+": dateObj.getMonth() + 1,
            "d+": dateObj.getDate(),
            "h+": dateObj.getHours(),
            "m+": dateObj.getMinutes(),
            "s+": dateObj.getSeconds(),
            "q+": Math.floor((dateObj.getMonth() + 3) / 3),
            "S+": dateObj.getMilliseconds()
        }
        if (/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, (dateObj.getFullYear() + '').substr(4 - RegExp.$1.length))
        }
        for (let k in date) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1
                    ? date[k] : ("00" + date[k]).substr(("" + date[k]).length))
            }
        }
        return format
    },

    /**
     * 版本号转化为数字
     * @param versions
     * @returns {string}
     */
    versionsToNum(versions) {
        let numPlace = ["", "0", "00", "000", "0000"]
        numPlace = numPlace.reverse()
        versions = versions.toString().split('.')

        for (let i = 0; i < versions.length; i++) {
            let len = versions[i].length;
            versions[i] = numPlace[len] + versions[i];
        }
        return versions.join('');
    }
}
