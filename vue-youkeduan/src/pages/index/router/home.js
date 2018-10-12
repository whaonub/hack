const load = require('./load_' + process.env.NODE_ENV)
const ProductIndex = load('home/product_detail/Index')
const ShopDetail = load('home/shop_detail/index')
const GuideDetail = load('home/guide_detail/index')
const ZuTuanDetail = load('home/zutuan_detail/index')
const AllGuest = load('home/zutuan_detail/AllGuest')
const GuestDetail = load('home/zutuan_detail/GuestDetail')

const Information = load('information/index')


export default [{
        path: '/product_detail',
        name: 'productDetail',
        component: ProductIndex,
        meta: {
            index: 2,
            title: '',
        }
    },
    {
        path: '/shop_detail',
        name: 'shopDetail',
        component: ShopDetail,
        meta: {
            index: 2,
            title: '',
        }
    },
    {
        path: '/guide_detail/:id',
        name: 'guideDetail',
        component: GuideDetail,
        meta: {
            index: 2,
            title: '',
        }
    },
    {
        path: '/zutuan_detail',
        name: 'zutuanDetail',
        component: ZuTuanDetail,
        meta: {
            index: 2,
            title: '',
        }
    },
    {
        path: '/all_guest',
        name: 'allGuest',
        component: AllGuest,
        meta: {
            index: 2,
            title: '',
        }
    }, {
        path: '/information',
        name: 'information',
        component: Information,
        // redirect: '/information',
        meta: {
            index: 2,
            title: ''
        }
    },
    {
        path: '/guest_detail',
        name: 'guestDetail',
        component: GuestDetail,
        meta: {
            index: 2,
            title: '',
        }
    },
]