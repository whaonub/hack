<template>
    <my-page :foot="true" class="page">
        <div class="c-order">
            <p class="c-order__cluster" @click="setPage(0)">
                <span class="c-order__span" :class="{action : index == 0}">组团</span>
            </p>
            <p class="c-order__customization" @click="setPage(1)">
                <span class="c-order__span" :class="{action : index == 1}">定制</span>
            </p>
        </div>
        <my-foot></my-foot>
        <my-body>
            <my-swipe style="height: 100%" :init="init" v-model="index">
                <my-swipe-item>
                    <my-refresh>
                        <ul>
                            <li class="c-frame">
                                <div class="c-content">
                                    <p class="c-title">目的地：</p>
                                    <p class="c-property">韩国三日游</p>
                                    <p class="c-quantity">18/20</p>
                                </div>
                                <div class="c-content">
                                    <p class="c-title">状态：</p>
                                    <!-- 类c-property--underway为正在组团-->
                                    <p class="c-property  c-property--underway">正在组团</p>
                                </div>
                                <div class="c-content">
                                    <p class="c-title">现价：</p>
                                    <p class="c-current">45</p>
                                    <p class="c-original">原价：</p>
                                    <p class="c-original__amount">60</p>
                                </div>
                                <div class="c-content">
                                    <p class="c-title">出行时间：</p>
                                    <p class="c-property">2018/06/06 09.00~2018/06/06 12.00</p>
                                </div>
                                <div class="c-content">
                                    <p class="c-title">报名截止：</p>
                                    <p class="c-property">2018-04-03 19.00</p>
                                </div>
                                <div class="c-content">
                                    <div class="c-content__control">
                                        <p class="c-content__require">最低成团:</p>
                                        <p class="c-content__number">15人</p>
                                    </div>
                                    <div class="c-content__control">
                                        <p class="c-content__require">最高成团:</p>
                                        <p class="c-content__number">25人</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </my-refresh>
                </my-swipe-item>
                <my-swipe-item>
                    <my-refresh>
                        <ul>
                            <li class="c-frame">
                                <div class="c-content">
                                    <p class="c-title">订单编号：</p>
                                    <p class="c-property">JKHH44334535</p>
                                    <p class="c-quantity">18/20</p>
                                </div>
                                <div class="c-content">
                                    <p class="c-title">目的地：</p>
                                    <p class="c-property">韩国三日游</p>
                                    <p class="c-quantity">18/20</p>
                                </div>
                                <div class="c-content">
                                    <p class="c-title">状态：</p>
                                    <!-- 类c-property--underway为正在组团-->
                                    <p class="c-property  c-property--underway">正在组团</p>
                                </div>
                                <div class="c-content">
                                    <p class="c-title">出行时间：</p>
                                    <p class="c-property">2018/06/06 09.00~2018/06/06 12.00</p>
                                </div>
                                <div class="c-content">
                                    <p class="c-title">报名截止：</p>
                                    <p class="c-property">2018-04-03 19.00</p>
                                </div>
                                <div class="c-content">
                                    <div class="c-content__control">
                                        <p class="c-content__require">最低成团:</p>
                                        <p class="c-content__number">15人</p>
                                    </div>
                                    <div class="c-content__control">
                                        <p class="c-content__require">最高成团:</p>
                                        <p class="c-content__number">25人</p>
                                    </div>
                                </div>
                                <div class="c-content">
                                    <p class="c-title">总价：</p>
                                    <p class="c-property">110</p>
                                </div>
                            </li>
                        </ul>
                    </my-refresh>
                </my-swipe-item>
            </my-swipe>
        </my-body>
    </my-page>
</template>

<script>
    import MyBody from "../../components/layout/body.vue";
    import MyHead from "../../components/layout/head.vue";
    import MyPage from "../../components/layout/page";
    import MyFoot from "../../components/layout/foot";
    import MySwipe from "../../components/swiper/swiper";
    import MySwipeItem from "../../components/swiper/swiper-item";
    import MyRefresh from "../../components/refresh/refresh";

    export default {
        //组件名字
        name: '',

        //子组件引入
        components: {
            MyRefresh,
            MySwipeItem,
            MySwipe,
            MyFoot,
            MyPage,
            MyHead,
            MyBody,
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
        },
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";

    .c-order {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 998;
        width: 100%;
        height: rem(90);
        display: flex;
        align-items: center;
        color: rgba(30, 30, 30, 0.6);
        font-size: rem(32);
        background: #fff;
        border-bottom: 1px solid #f3f3f3;
    }

    .action {
        height: rem(94);
        box-sizing: border-box;
        padding-top: rem(4);
        border-bottom: rem(4) solid #000000;
        color: #000000;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .c-order__cluster {
        width: 50%;
        padding-right: rem(30);
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .c-order__customization {
        width: 50%;
        padding-left: rem(30);
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    .c-order__span {
        width: rem(70);
        height: rem(94);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .c-page {
        position: relative;
        height: 100%;
        box-sizing: border-box;
        padding-top: rem(100);
    }

    .c-page__status {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
        width: 100%;
        height: rem(100);
        background: #fff;
    }

    .c-frame {
        width: 100%;
        min-height: rem(310);
        margin: rem(20) 0;
        box-sizing: border-box;
        padding: rem(20) rem(30) 0 rem(30);
        background: #fff;
    }

    .c-content {
        width: 100%;
        display: flex;
        line-height: 1;
        margin-bottom: rem(20);
        box-sizing: border-box;
        padding-bottom: rem(10);
    }

    .c-content__control {
        width: 50%;
        display: flex;
    }

    .c-content__require {
        color: #333333;
        font-size: rem(24);
    }

    .c-content__number {
        color: #999999;
        font-size: rem(24);
        margin-left: rem(39);
    }

    .c-title {
        display: flex;
        align-items: center;
        width: rem(150);
        color: #333333;
        font-size: rem(24);
    }

    .c-adult {
        color: #333333;
        font-size: rem(24);
    }

    .c-child {
        color: #333333;
        font-size: rem(24);
        margin-left: rem(40);
    }

    .c-current {
        color: #999999;
        font-size: rem(24);
    }

    .c-original {
        color: #333333;
        font-size: rem(24);
        margin-left: rem(110);
    }

    .c-original__amount {
        color: #666;
        font-size: rem(24);
        margin-left: rem(100);
    }

    .c-property {
        width: rem(450);
        color: #999999;
        font-size: rem(24);
        line-height: rem(30);
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
    }

    .c-property--underway {
        color: #7fc690;
    }

    .c-quantity {
        display: flex;
        align-items: center;
        height: rem(30);
        color: #ff3333;
        font-size: rem(24);
    }

</style>
