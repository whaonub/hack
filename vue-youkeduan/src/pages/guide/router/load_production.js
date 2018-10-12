module.exports = path => {
    let file = () => import('../views/' + path + '.vue')
    return file
}