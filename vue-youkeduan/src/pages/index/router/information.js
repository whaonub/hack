const load = require('./load_' + process.env.NODE_ENV)
const Information = load('information/index')

export default [{
    path: '/information',
    name: 'information',
    component: Information,
    // redirect: '/information',
    meta: {
        index: 1,
        title: ''
    }
}]