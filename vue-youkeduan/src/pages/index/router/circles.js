const load = require('./load_' + process.env.NODE_ENV)
const CirclesIndex = load('circles/index/Index')
const CirclesTheme = load('circles/theme/index')
const CirclesCircle = load('circles/circle/index')
const CirclesPiLun = load('circles/pinglun/PingLun')

export default [
    {
        path: '/circles_index',
        name: 'circlesindex',
        component: CirclesIndex,
        meta: {
            index: 2,
            title: '',
        }
    },
    {
        path: '/circles_theme',
        name: 'circlestheme',
        component: CirclesTheme,
        meta: {
            index: 2,
            title: '',
        }
    },
    {
        path: '/circles_circle',
        name: 'circlescircle',
        component: CirclesCircle,
        meta: {
            index: 2,
            title: '',
        }
    },
    {
        path: '/circles_pinglun',
        name: 'circlespinglun',
        component: CirclesPiLun,
        meta: {
            index: 2,
            title: '',
        }
    },
]