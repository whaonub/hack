//定要模块
const module = {
    namespaced: true,
}

//定义状态变量
module.state = {}

//计算
module.getters = {}

//定义修改的方法(同步)
module.mutations = {
    update(state, data) {//更新数据
        for (let key in data) {
            state[key] = data[key]
        }
    },
    remove(state, name) {//移除数据
        if (typeof name == 'string') {
            delete state[name]
        } else {
            for (let key in name) {
                delete state[name[key]]
            }
        }
    },
}

//定义修改的方法（异步）
module.actions = {}

export default module
