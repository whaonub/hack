import utils from '../js/index'

/**
 * 个人中心
 */
export default {
    /**
     * 完善用户信息
     * @param data
     * @returns {Promise}
     */
    setUserInfo(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {
                status: 'status',//认证状态
                name: 'name',//姓名
                areaName: 'area_name',//地区
                identityNum: 'id_num',//身份证号,
                guideNum: 'guide_card',//导游证号,
                bankName: 'bank_name',//开户银行,
                bankNum: 'bank_num',//银行卡号,
                headPhoto: 'portrait',//头像
                identityFrontPhoto: 'positive_id_path',//身份证正面
                identityReversePhoto: 'negative_id_path',//身份证反面
                identityInHandPhoto: 'hand_id_path',//手持身份证
                guidePhoto: 'guide_card_path',//导游证
                drivingNum: 'drivers',//驾驶证号
                travelNum: 'travel',//行驶证号
                vehicleType: 'car_type',//车型
                vehicleFrame: 'frame',//车架号
                vehicleMannedNum: 'manned',//载人数
                vehicleLicenceNum: 'plate',//车牌号
            }
            data = utils.queryKeyChange(data, keys)
            utils.post('/api/user_Info/perfect_guide_info', data).then(res => {
                let keys = {}
                res.data = utils.dataKeyChange(res.data, keys)
                utils.userInfoUpdate(res.data)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 完善车辆信息
     * @param data
     * @returns {Promise}
     */
    setVehicleInfo(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {
                status: 'status',//认证状态
                name: 'name',//姓名
                areaName: 'area_name',//地区
                identityNum: 'id_num',//身份证号,
                guideNum: 'guide_card',//导游证号,
                bankName: 'bank_name',//开户银行,
                bankNum: 'bank_num',//银行卡号,
                headPhoto: 'portrait',//头像
                identityFrontPhoto: 'positive_id_path',//身份证正面
                identityReversePhoto: 'negative_id_path',//身份证反面
                identityInHandPhoto: 'hand_id_path',//手持身份证
                guidePhoto: 'guide_card_path',//导游证
                drivingNum: 'drivers',//驾驶证号
                travelNum: 'travel',//行驶证号
                vehicleType: 'car_type',//车型
                vehicleFrame: 'frame',//车架号
                vehicleMannedNum: 'manned',//载人数
                vehicleLicenceNum: 'plate',//车牌号
            }
            data = utils.queryKeyChange(data, keys)
            utils.post('/api/user_Info/perfect_guide_drivers', data).then(res => {
                let keys = {}
                res.data = utils.dataKeyChange(res.data, keys)
                utils.userInfoUpdate(res.data)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 获取用户信息
     * @param data
     * @returns {Promise}
     */
    getUserInfo(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {}
            data = utils.queryKeyChange(data, keys)
            utils.post('/api/user_Info/get_guide_info', data).then(res => {
                let keys = {
                    status: 'status',//认证状态
                    name: 'name',//姓名
                    areaName: 'area_name',//地区
                    identityNum: 'id_num',//身份证号,
                    guideNum: 'guide_card',//导游证号,
                    bankName: 'bank_name',//开户银行,
                    bankNum: 'bank_num',//银行卡号,
                    headPhoto: 'portrait',//头像
                    identityFrontPhoto: 'positive_id_path',//身份证正面
                    identityReversePhoto: 'negative_id_path',//身份证反面
                    identityInHandPhoto: 'hand_id_path',//手持身份证
                    guidePhoto: 'guide_card_path',//导游证
                    drivingNum: 'drivers',//驾驶证号
                    travelNum: 'travel',//行驶证号
                    vehicleType: 'car_type',//车型
                    vehicleFrame: 'frame',//车架号
                    vehicleMannedNum: 'manned',//载人数
                    vehicleLicenceNum: 'plate',//车牌号
                }
                res.data = utils.dataKeyChange(res.data, keys)
                utils.userInfoUpdate(res.data)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 获取用户基本信息
     * @param data
     * @returns {Promise}
     */
    getUserBasicInfo(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {}
            data = utils.queryKeyChange(data, keys)
            utils.post('/api/guide/get_guide_info', data).then(res => {
                let keys = {
                    starLevel: 'lv',//星级级
                    account: 'account',//账户余额
                }
                res.data = utils.dataKeyChange(res.data, keys)
                utils.userBasicInfoUpdate(res.data)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 获取全部标签
     * @param data
     * @returns {Promise}
     */
    getAllLabel(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {}
            data = utils.queryKeyChange(data, keys)
            utils.post('/api/label/label_list', data).then(res => {
                let keys = {}
                res.data = utils.dataKeyChange(res.data, keys)
                utils.userInfoUpdate(res.data)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 获取用户标签
     * @param data
     * @returns {Promise}
     */
    getUserLabel(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {}
            data = utils.queryKeyChange(data, keys)
            utils.post('/api/label/get_guide_label', data).then(res => {
                let keys = {}
                res.data = utils.dataKeyChange(res.data, keys)
                utils.userInfoUpdate(res.data)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 设置用户标签
     * @param data
     * @returns {Promise}
     */
    setUserLabel(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {
                label: 'label',
            }
            data = utils.queryKeyChange(data, keys)
            utils.post('/api/label/add_label', data).then(res => {
                let keys = {}
                res.data = utils.dataKeyChange(res.data, keys)
                utils.userInfoUpdate(res.data)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 账单列表
     * @param data
     * @returns {Promise}
     */
    getUserBill(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {}
            data = utils.queryKeyChange(data, keys)
            utils.post('/api/bill/bill_list', data).then(res => {
                let keys = {
                    type: 'type',//类型
                    status: 'status',//状态
                    money: 'money',//金额
                    createTime: 'create_time',//创建时间
                }
                res.data = utils.dataKeyChange(res.data, keys)
                utils.userInfoUpdate(res.data)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 申请提现
     * @param data
     * @returns {Promise}
     */
    userWithdraw(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {
                money: 'money',//金额
            }
            data = utils.queryKeyChange(data, keys)
            utils.post('/api/bill/guide_withdraw', data).then(res => {
                let keys = {}
                res.data = utils.dataKeyChange(res.data, keys)
                utils.userInfoUpdate(res.data)
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    //下面是旧的

    /**
     * 更新头像
     * @param data
     * @returns {Promise}
     */
    setUserPhoto(data) {
        return new Promise((resolve, reject) => {
            let keys = {
                portraitUrl: 'photo',//头像图片路径
            }
            data = utils.queryKeyChange(data, keys)
            utils.post('leader/setPhoto', data).then(res => {
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 更换手机号
     * @param data
     * @returns {Promise}
     */
    setUserMobile(data) {
        return new Promise((resolve, reject) => {
            let keys = {}
            data = utils.queryKeyChange(data, keys)
            utils.post('leader/changeMobile', data).then(res => {
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 修改密码
     * @param data
     * @returns {Promise}
     */
    setUserPassword(data) {
        return new Promise((resolve, reject) => {
            let keys = {}
            data = utils.queryKeyChange(data, keys)
            utils.post('leader/changePassword', data).then(res => {
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 积分记录
     * @param data
     * @returns {Promise}
     */
    integralRecord(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {
                page: 'page',//页码
            }
            data = utils.queryKeyChange(data, keys)
            utils.post('score_record/index', data).then(res => {
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },

    /**
     * 积分记录
     * @param data
     * @returns {Promise}
     */
    setArea(data = {}) {
        return new Promise((resolve, reject) => {
            let keys = {
                id: 'region_id',//地区id
            }
            data = utils.queryKeyChange(data, keys)
            utils.post('leader/setMyRegion', data).then(res => {
                resolve(res)
            }, (res) => {
                reject(res)
            })
        })
    },
}
