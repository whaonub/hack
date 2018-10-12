module.exports = path => {
    return require('../views/' + path + '.vue').default
}