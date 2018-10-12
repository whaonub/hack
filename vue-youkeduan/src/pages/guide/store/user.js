//定要模块
const module = {
    namespaced: true,
}

//定义状态变量
module.state = {
    token: '',//token
    userInfo: {},//用户信息
}

//计算
module.getters = {}

//定义修改的方法(同步)
module.mutations = {
    update(state, data) { //更新用户数据
        for (let key in data) {
            state[key] = data[key]
        }
    },
}

//定义修改的方法（异步）
module.actions = {}

export default module
