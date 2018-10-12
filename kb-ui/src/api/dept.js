import request from '@/router/axios'

export function fetchTree(obj) {
    return request({
        url: '/admin/fdcom/selectAllComInfo',
        method: 'get',
        data: obj
    })
}

export function addObj(obj) {
    return request({
        url: '/admin/fdcom/addcominfo',
        method: 'post',
        data: obj
    })
}

export function getObj(id) {
    return request({
        url: '/admin/fdcom/selectcominfobyid/' + id,
        method: 'get'
    })
}

export function delObj(id) {
    return request({
        url: '/admin/fdcom/deletecominfo/' + id,
        method: 'get'
    })
}

export function putObj(obj) {
    return request({
        url: '/admin/fdcom/updatecominfo',
        method: 'post',
        data: obj
    })
}
// 查询方法
export function filterObj(obj) {
    return request({
        url: '/admin/fdcom/selectbycondition',
        method: 'post',
        data: obj
    })
}
// 省、市、县
export function selectAddress() {
    return request({
        url: '/admin/fdcom/selectAddress',
        method: 'get',
    })
}

export function deleteEmptyData(data) {
    data.forEach(element => {
        if (element.children instanceof Array && element.children.length) {
            deleteEmptyData(element)
        } else {
            delete element.children
        }
    });
}