<template>
    <div>
        <jr-body>
            <jr-head slot="head"></jr-head>
            <div class="c-body__content">
                <div class="c-filter">
                    <div class="c-filter__item">
                        <div class="c-filter__title" @click="setPopup('popupLeft')">
                            <p :class="{'c-filter__item--active': filterLeft}">{{filterLeftName || '上架产品'}}</p>
                            <img v-if="filterLeft" class="c-filter__icon" src="../../assets/icon/cp_xl_sel.png" alt="">
                            <img v-else="" class="c-filter__icon" src="../../assets/icon/cp_xl-nor.png" alt="">
                        </div>
                        <div class="c-popup" v-show="popupLeft">
                            <div class="c-popup__item" @click="setPopup('popupLeft', 'shelves_up', '上架产品')">上架产品</div>
                            <div class="c-popup__item" @click="setPopup('popupLeft', 'shelves_down', '下架产品')">下架产品</div>
                        </div>
                    </div>
                    <div class="c-filter__item">
                        <div class="c-filter__title" @click="setPopup('popupRight')">
                            <p :class="{'c-filter__item--active': filterRight}">{{filterRightName || '审核中'}}</p>
                            <img v-if="filterRight" class="c-filter__icon" src="../../assets/icon/cp_xl_sel.png" alt="">
                            <img v-else="" class="c-filter__icon" src="../../assets/icon/cp_xl-nor.png" alt="">
                        </div>
                        <div class="c-popup" v-show="popupRight">
                            <div class="c-popup__item" @click="setPopup('popupRight', 'checking', '审核中')">审核中</div>
                            <!--<div class="c-popup__item" @click="setPopup('popupRight', 'check_success', '审核成功')">审核成功</div>-->
                            <div class="c-popup__item" @click="setPopup('popupRight', 'check_fail',' 审核失败')">审核失败</div>
                        </div>
                    </div>
                </div>
                <div v-show="popupLeft || popupRight" @click="setPopup()" class="c-popup__bg"></div>
                <m-refresh :down="down" :up="up">
                    <div class="c-product__box">
                        <div class="c-product" v-for="(item, key) in list" :key="key">
                            <div class="c-product__top">
                                <img class="c-product__img" :src="fileUrl + item.img" alt="">
                                <img v-if="item.flag == 'check_fail'" class="c-product__img--icon" src="../../assets/icon/shangjia_2.png" alt="">
                                <img v-else="" class="c-product__img--icon" src="../../assets/icon/shangjia.png" alt="">
                                <p class="c-product__img--text">{{item.flag_str}}</p>
                            </div>

                            <div class="c-product__content">
                                <div class="c-travel mt-30">
                                    <p class="c-site">{{item.name}}</p>
                                    <p class="c-price">￥{{item.price}}</p>
                                </div>
                                <div class="c-introduce">{{item.content}}</div>
                                <ul class="c-status">
                                    <li class="c-delete">
                                        <jr-button size="delete" @click.native="deleteProduct(item.id)">删除</jr-button>
                                    </li>
                                    <router-link :to="{name: 'productIssue',query: {id: item.id}}">
                                        <li class="c-edit">
                                            <jr-button size="edit">修改</jr-button>
                                        </li>
                                    </router-link>
                                    <router-link :to="{name: 'productDetails',query: {id: item.id}}">
                                        <li class="c-original">
                                            <jr-button size="original">详情</jr-button>
                                        </li>
                                    </router-link>
                                </ul>
                            </div>
                        </div>
                    </div>
                </m-refresh>
                <router-link :to="{name: 'productIssue'}">
                    <div class="c-add__product">
                        <jr-button size="full">
                            <img class="c-addSymbol" src="../../assets/icon/addSymbol.png" alt="">
                            <span>添加产品</span>
                        </jr-button>
                    </div>
                </router-link>
            </div>
        </jr-body>
    </div>
</template>

<script>
    import JrBody from "../../components/layout/body.vue";
    import JrHead from "../../components/layout/head.vue";
    import JrButton from "../../components/base/button.vue";
    import MRefresh from "../../components/refresh/refresh";

    export default {
        //组件名字
        name: '',

        //引入子组件
        components: {
            MRefresh,
            JrButton,
            JrHead,
            JrBody
        },

        //接收父组件的传值
        props: {},

        //组件私有数据
        data() {
            return {
                fileUrl: this.config.fileUrl,
                filter: 'shelves_up',//过滤器
                filterLeft: true,//左边过滤器
                filterRight: false,//右边过滤器
                filterLeftName: '',//左边过滤器
                filterRightName: '',//右边过滤器
                popupLeft: false,//左边下拉框
                popupRight: false,//右边下拉框
                page: 1,//页码
                list: [],
            }
        },

        //数据计算
        computed: {},

        //生命周期钩子：组件实例创建之后调用
        created() {
        },

        //生命周期钩子：组件实例渲染之后调用
        mounted() {
        },

        //数据监听
        watch: {},

        //自定义函数
        methods: {
            /**
             * 下拉刷新
             */
            down(obj) {
                const self = this
                self.api.getProductList({
                    page: 1,
                    filter: self.filter
                }).then(res => {
                    self.list = res.data.data
                    obj.endDownLoading()
                }, err => {
                    obj.endDownLoading(true)
                })
            },

            /**
             * 上拉加载
             */
            up(obj) {
                const self = this
                self.api.getProductList({
                    page: self.page,
                    filter: self.filter
                }).then(res => {
                    self.page++
                    self.list = self.list.concat(res.data.data)

                    if (res.data.data.length <= 10) {
                        obj.endUpLoading(true)
                    } else {
                        obj.endUpLoading()
                    }
                }, () => {
                    obj.endUpLoading(true)
                })
            },

            /**
             * 设置下拉
             */
            setPopup(name, value, nameText) {
                const self = this
                self[name] = !self[name]

                if (value) {
                    self.filter = value
                }

                if (name == 'popupLeft') {
                    self.popupRight = false
                    if (value) {
                        self.filterLeft = true
                        self.filterRight = false
                        self.filterLeftName = nameText
                        self.page = 1
                        self.getList()
                    }
                } else if (name == 'popupRight') {
                    self.popupLeft = false
                    if (value) {
                        self.filterLeft = false
                        self.filterRight = true
                        self.filterRightName = nameText
                        self.page = 1
                        self.getList()
                    }
                } else {
                    self.popupRight = false
                    self.popupLeft = false
                }
            },

            /**
             * 获取产品列表
             */
            getList() {
                const self = this
                self.api.getProductList({
                    page: self.page,
                    filter: self.filter
                }).then(res => {
                    self.list = res.data.data
                })
            },

            /**
             * 删除产品
             */
            deleteProduct(id) {
                const self = this
                self.api.deleteProduct({
                    id: id
                }).then(() => {
                    self.list.forEach((item, index) => {
                        if (item.id == id) {
                            self.list.splice(index, 1)
                        }
                    })
                    self.fn.myMessage('删除成功')
                })
            },
        },
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";

    .c-body__content {
        height: 100%;
        box-sizing: border-box;
        padding: rem(100) 0 rem(130);
    }

    .c-filter {
        position: absolute;
        top: rem(100);
        left: 0;
        z-index: 998;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: rem(100);
        background: #fff;
        box-shadow: 0 rem(2) rem(2) 0 #eee9e7;
    }

    .c-filter__item {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: rem(250);
        height: 100%;
        color: rgba(30, 30, 30, 0.6);
        font-size: rem(32);
    }

    .c-filter__title {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .c-filter__item--active {
        color: #fc957e;
    }

    .c-filter__icon {
        width: rem(32);
        margin-left: rem(20);
    }

    .c-popup {
        position: absolute;
        top: rem(96);
        left: 0;
        z-index: 10;
        width: 100%;
        background-color: #fff;
        box-sizing: border-box;
        border-top: rem(4) #fc957e solid;
    }

    .c-popup__bg {
        position: absolute;
        top: rem(200);
        bottom: rem(130);
        left: 0;
        z-index: 9;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, .8);
    }

    .c-popup__item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: rem(80);
        color: #fc957e;
        font-size: rem(32);
        border-top: solid 1px #dedada;
    }

    .c-popup__item:first-child {
        border-top: none;
    }

    .c-product__box {
        box-sizing: border-box;
        padding: rem(30) rem(25) 0;
        background-color: #f7f7f7;
    }

    .c-product {
        height: rem(655);
        margin-bottom: rem(30);
        border-radius: rem(8);
        background-color: #fff;
        box-shadow: 0 rem(2) rem(2) 0 #eee9e7;
    }

    .c-product__top {
        position: relative;
        width: 100%;
        height: rem(340);
    }

    .c-product__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .c-product__img--icon {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 9;
        width: rem(83);

    }

    .c-product__img--text {
        position: absolute;
        top: rem(13);
        right: rem(8);
        z-index: 10;
        color: #fff;
        font-size: rem(24);
        transform: rotate(45deg);
    }

    .c-product__content {
        box-sizing: border-box;
        padding: 0 rem(30);
    }

    .c-travel {
        display: flex;
        justify-content: space-between;
        line-height: rem(32);
    }

    .c-site {
        color: #1e1e1e;
        font-size: rem(32);
    }

    .c-price {
        color: #fc957e;
        font-size: rem(32);
    }

    .c-introduce {
        height: rem(113);
        margin-top: rem(20);
        color: rgba(30, 30, 30, 0.8);
        font-size: rem(28);
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
    }

    .c-status {
        display: flex;
        align-items: center;
        margin-top: rem(30);
    }

    .c-delete {
        margin-right: rem(116);
    }

    .c-edit {
        margin-right: rem(22);
    }

    .c-add__product {
        position: absolute;
        bottom: rem(20);
        left: rem(24);
        width: rem(702);
        height: rem(90);
        border-radius: rem(8);
        border: solid 1px #fea38e;
        background: #fff;
    }

    .c-but--full {
        color: #fea38e !important;
        background-color: #fff !important;
    }

    .c-addSymbol {
        height: rem(33);
        margin-right: rem(18);
    }
</style>
