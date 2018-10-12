<template>
    <jr-body class="c-body">
        <jr-head slot="head" :back="false"></jr-head>
        <jr-foot slot="foot"></jr-foot>
        <div class="c-body__content">
            <div class="c-order">
                <p class="c-order__p" @click="setPage(0)">
                    <span class="c-order__span" :class="{action : index == 0}">游客定制</span>
                </p>
                <p class="c-order__p" @click="setPage(1)">
                    <span class="c-order__span" :class="{action : index == 1}">产品订单</span>
                </p>
            </div>
            <m-swiper style="height: 100%;" :init="init" v-model="index">
                <m-swiper-item>
                    <div style="height: 100%;">
                        <m-refresh :down="downCustom" :up="upCustom">
                            <div class="c-frame" v-for="(item, key) in listCustom" :key="key">
                                <div class="c-content">
                                    <div class="c-list">
                                        <p class="c-serial">订单编号</p>
                                        <p class="c-serial__right">{{item.order_no}}</p>
                                        <p class="c-robOrder">{{status[item.status - 1]}}</p>
                                    </div>
                                    <div class="c-list">
                                        <p class="c-serial">来源</p>
                                        <p class="c-pink">{{item.from}}</p><!--来源两种展现颜色-->
                                        <!--<p class="c-green">旅行社</p>-->
                                    </div>
                                    <div class="c-list">
                                        <p class="c-serial">发布日期</p>
                                        <p class="c-serial__right">{{item.create_time}}</p>
                                    </div>
                                    <div class="c-list">
                                        <p class="c-serial">行程日期</p>
                                        <p class="c-serial__right">{{item.start_time + '--' + item.end_time}}</p>
                                    </div>
                                    <div class="c-list">
                                        <p class="c-serial">目的地</p>
                                        <p class="c-serial__right">{{item.region}}</p>
                                    </div>
                                    <div class="c-list">
                                        <p class="c-serial">成人</p>
                                        <p class="c-serial__right">{{item.adult_num}}</p>
                                    </div>
                                    <div class="c-list">
                                        <p class="c-serial">儿童</p>
                                        <p class="c-serial__right">{{item.children_num}}</p>
                                    </div>
                                    <div class="c-yuji">
                                        <p class="c-reward">预计报酬</p>
                                        <p class="c-money">￥{{item.leader_money}}</p>
                                        <router-link :to="{name: 'touristDetail', query:{id: item.id, type: 1}}">
                                            <p class="c-particular">详情</p>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </m-refresh>
                    </div>
                </m-swiper-item>
                <m-swiper-item>
                    <div style="height: 100%;">
                        <m-refresh :down="downProduct" :up="upProduct">
                            <div class="c-frame" v-for="(item, key) in listProduct" :key="key">
                                <div class="c-content">
                                    <div class="c-list">
                                        <p class="c-serial">订单编号</p>
                                        <p class="c-serial__right">{{item.order_no}}</p>
                                        <p class="c-robOrder">{{status[item.status - 1]}}</p>
                                    </div>
                                    <div class="c-list">
                                        <p class="c-serial">来源</p>
                                        <p class="c-pink">{{item.from}}</p><!--来源两种展现颜色-->
                                        <!--<p class="c-green">旅行社</p>-->
                                    </div>
                                    <div class="c-list">
                                        <p class="c-serial">发布日期</p>
                                        <p class="c-serial__right">{{item.create_time}}</p>
                                    </div>
                                    <div class="c-list">
                                        <p class="c-serial">行程日期</p>
                                        <p class="c-serial__right">{{item.start_time + '--' + item.end_time}}</p>
                                    </div>
                                    <div class="c-list">
                                        <p class="c-serial">目的地</p>
                                        <p class="c-serial__right">{{item.region}}</p>
                                    </div>
                                    <div class="c-list">
                                        <p class="c-serial">成人</p>
                                        <p class="c-serial__right">{{item.adult_num}}</p>
                                    </div>
                                    <div class="c-list">
                                        <p class="c-serial">儿童</p>
                                        <p class="c-serial__right">{{item.children_num}}</p>
                                    </div>
                                    <div class="c-list">
                                        <p class="c-serial">产品名称</p>
                                        <p class="c-serial__right">{{item.product_name}}</p>
                                    </div>
                                    <div class="c-yuji">
                                        <p class="c-reward">预计报酬</p>
                                        <p class="c-money">￥{{item.leader_money}}</p>
                                        <router-link :to="{name: 'productDetail', query:{id: item.id, type: 2}}">
                                            <p class="c-particular">详情</p>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </m-refresh>
                    </div>
                </m-swiper-item>
            </m-swiper>
        </div>
    </jr-body>
</template>

<script>
    import JrBody from "../../components/layout/body.vue";
    import JrHead from "../../components/layout/head.vue";
    import JrFoot from "../../components/layout/foot.vue";
    import MRefresh from "../../components/refresh/refresh";
    import MSwiper from "../../components/swiper/swiper";
    import MSwiperItem from "../../components/swiper/swiper-item";

    export default {
        //组件名字
        name: '',

        //子组件引入
        components: {
            MSwiperItem,
            MSwiper,
            MRefresh,
            JrFoot,
            JrHead,
            JrBody,
        },

        //组件私有数据
        data() {
            return {
                index: 1,//当前索引
                init: {
                    loop: false,
                    width: window.innerWidth,
                },
                listCustom: [],//定制订单
                listProduct: [],//产品订单
                pageCustom: 1,//定制页面
                pageProduct: 1,//产品页码
                status: ['抢单中', '待支付', '待出行', '进行中', '待审核', '已完成', '已取消', '待退款', '已关闭'],//订单状态
            }
        },

        //生命周期钩子：组件钩子函数
        created() {
        },

        //生命周期钩子：组件渲染后调用
        mounted() {
        },

        //生命周期钩子：组件更新渲染后调用
        update() {
        },

        //计算属性
        computed: {},

        //数据监听
        watch: {},

        //自定义函数
        methods: {
            /**
             * 左右滑动
             * @param id
             */
            setPage(id) {
                this.index = id
            },

            /**
             * 定制订单下拉
             */
            downCustom(obj) {
                const self = this
                self.api.getCustomOrderList({
                    page: 1,
                }).then(res => {
                    self.listCustom = res.data.data
                    obj.endDownLoading()
                }, () => {
                    obj.endDownLoading(true)
                })
            },

            /**
             * 定制订单上拉
             */
            upCustom(obj) {
                const self = this
                self.api.getCustomOrderList({
                    page: self.pageCustom,
                }).then(res => {
                    self.listCustom = self.listCustom.concat(res.data.data)
                    if (res.data.data.length <= 10) {
                        obj.endUpLoading(true)
                    } else {
                        self.pageCustom++
                        obj.endUpLoading()
                    }
                }, () => {
                    obj.endUpLoading(true)
                })
            },

            /**
             * 产品订单下拉
             */
            downProduct(obj) {
                const self = this
                self.api.getProductOrderList({
                    page: 1,
                }).then(res => {
                    self.listProduct = res.data.data
                    obj.endDownLoading()
                }, () => {
                    obj.endDownLoading(true)
                })
            },

            /**
             * 产品订单上拉
             * @param obj
             */
            upProduct(obj) {
                const self = this
                self.api.getProductOrderList({
                    page: self.pageProduct,
                }).then(res => {
                    self.listProduct = self.listProduct.concat(res.data.data)
                    if (res.data.data.length <= 10) {
                        obj.endUpLoading(true)
                    } else {
                        self.pageProduct++
                        obj.endUpLoading()
                    }
                }, () => {
                    obj.endUpLoading(true)
                })
            },


        },
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";

    .c-body {
        height: 100%;
        padding: rem(190) 0 rem(100);
    }

    .c-body__content {
        height: 100%;
    }

    .c-order {
        position: absolute;
        top: rem(100);
        left: 0;
        z-index: 998;
        width: 100%;
        height: rem(90);
        display: flex;
        align-items: center;
        color: rgba(30, 30, 30, 0.6);
        font-size: rem(32);
        background: #fff;
    }

    .action {
        height: rem(94);
        box-sizing: border-box;
        border-bottom: rem(4) solid #fc957e;
        color: #fc957e;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .c-order__p {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .c-order__span {
        width: rem(170);
        height: rem(94);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .c-frame {
        width: rem(750);
        padding: rem(30) 0;
    }

    .c-pink {
        color: #fea38e;
        font-size: rem(28);
    }

    .c-green {
        color: #8cd9c0;
        font-size: rem(28);
    }

    .c-content {
        width: 100%;
        background: #fff;
        box-shadow: 0px rem(2) rem(2
        ) 0px #eee9e7;
        border-radius: rem(8);
    }

    .c-list {
        display: flex;
        border-bottom: 1px solid rgba(222, 218, 218, 0.6);
        padding: rem(20) rem(30);
    }

    .c-serial {
        width: rem(210);
        color: #1e1e1e;
        font-size: rem(28);
    }

    .c-serial__right {
        width: rem(345);
        color: rgba(30, 30, 30, 0.8);
        font-size: rem(29);
    }

    .c-robOrder {
        text-align: right;
        color: #fc957e;
        font-size: rem(28);
    }

    .c-yuji {
        display: flex;
        padding: rem(30) rem(30) rem(43) rem(30);
        color: #1e1e1e;
        font-size: rem(32);
    }

    .c-reward {
        width: rem(200);
    }

    .c-particular {
        width: rem(168);
        height: rem(50);
        color: #ffffff;
        font-size: rem(28);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: rem(190);
        background-color: #fea38e;
        border-radius: rem(8);
    }
</style>
