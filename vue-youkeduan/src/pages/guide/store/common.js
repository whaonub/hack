//定要模块
const module = {
    namespaced: true,
}

//定义状态变量
module.state = {
    currentNav: 1,//底部导航
}

//计算
module.getters = {}

//定义修改的方法(同步)
module.mutations = {
    update(state, data) {//更新数据
        for (let key in data) {
            state[key] = data[key]
        }
    },
}

//定义修改的方法（异步）
module.actions = {}

export default module
