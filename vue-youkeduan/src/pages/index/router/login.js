const load = require('./load_' + process.env.NODE_ENV)
const Login = load('login/Index')
const Register = load('register/index/Index')
const ResetPassword = load('register/resetPassword/Index')
const RegisterByWeixin = load('register/registerByWeixin/Index')
const RegisterHoby = load('register/hoby/Index')
const RegisterCircles = load('register/circles/Index')
const RegisterProduct = load('register/product/Index')
export default [
    { 
        path:'/login',
        name:'login',
        component: Login,
        meta: {
            index: 1,
            title: '登陆'
        }
    },
    { 
        path:'/register',
        name:'register',
        component: Register,
        meta: {
            index: 1,
            title: '注册'
        }
    },
    {
        path: '/registerbyweixin',
        name: 'registerbyweixin',
        component: RegisterByWeixin,
        meta: {
            index: 1,
            title: '第三方注册'
        }
    },
    {
        path: '/resetpassword',
        name: 'resetpassword',
        component: ResetPassword,
        meta: {
            index: 1,
            title: '密码重置'
        }
    },
    {
        path: '/registerhoby',
        name: 'registerhoby',
        component: RegisterHoby,
        meta: {
            index: 1,
            title: '选择标签'
        }
    },
    {
        path: '/registercircles',
        name: 'registercircles',
        component: RegisterCircles,
        meta: {
            index: 1,
            title: '选择标签'
        }
    },
    {
        path: '/registerproduct',
        name: 'registerproduct',
        component: RegisterProduct,
        meta: {
            index: 1,
            title: '选择标签'
        }
    },
    
]