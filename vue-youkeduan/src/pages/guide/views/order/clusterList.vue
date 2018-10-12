<template>
    <jr-body>
        <jr-head slot="head"></jr-head>
        <div>
            <div class="c-journey">
                <div class="c-journey__title">
                    <p class="c-journey__left">韩国一日游</p>
                    <p class="c-journey__right">+1</p>
                </div>
                <div class="c-status">
                    <p class="c-status__title">状态：</p>
                    <p class="c-status__title--cluster">正在组团</p>
                </div>
                <div class="c-status">
                    <p class="c-status__title">出行时间：</p>
                    <p class="c-status__property">2018-05-05 09.00--04-08 19.00</p>
                </div>
                <div class="c-status">
                    <p class="c-status__title">报名截止：</p>
                    <p class="c-status__property">2018-05-05 09.00--04-08 19.00</p>
                </div>
                <div class="c-status">
                    <p class="c-member__quantity">最低组团：<span class="c-status__property">15人</span></p>
                    <p class="c-member__quantity">最多组团：<span class="c-status__property">20人</span></p>
                    <p class="c-member__quantity">目前参团：<span class="c-status__property">18人</span></p>
                </div>
                <div class="c-status">
                    <p class="c-member__quantity">现价：<span class="c-status__property">45</span></p>
                    <p class="c-member__quantity">原价：<span class="c-status__property">80</span></p>
                </div>
            </div>
            <router-link :to="{name: 'orderDetails'}">
                <div class="c-list">
                <div class="c-list__content">
                    <div class="c-list__left">
                        <img class="c-list__img" src="../../assets/icon/addSymbol.png" alt="">
                        <div class="c-list__introduce">
                            <p class="c-list__name">姓名</p>
                            <p class="c-list__introduce">北京</p>
                        </div>
                    </div>
                    <div class="c-list__contentright">待收到</div>
                </div>
                <div class="c-status">
                    <p class="c-status__title">订单编号：</p>
                    <p class="c-status__property">GHJGH67867978</p>
                </div>
                <div class="c-status">
                    <p class="c-status__title">下单时间：</p>
                    <p class="c-status__property">2018-05-05 09.00--04-08 19.00</p>
                </div>
                <div class="c-status">
                    <p class="c-member__quantity">人数：<span class="c-status__property">成人2人</span></p>
                    <p class="c-member__quantity">原价：<span class="c-status__property">儿童4人</span></p>
                </div>
                <div class="c-status">
                    <p class="c-status__title">备注：</p>
                    <p class="c-status__property">大哥大法官的非官方电话</p>
                </div>
            </div>
            </router-link>
        </div>
    </jr-body>
</template>

<script>
    import JrBody from "../../components/layout/body.vue";
    import JrHead from "../../components/layout/head.vue";

    export default {
        //组件名字
        name: '',

        //引入子组件
        components: {
            JrHead,
            JrBody
        },

        //接收父组件的传值
        props: {},

        //组件私有数据
        data() {
            return {}
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
        methods: {},
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";

    .c-journey {
        width: 100%;
        min-height: rem(283);
        box-sizing: border-box;
        padding: rem(5) rem(27);
        background: #fff;
    }

    .c-journey__title {
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding-top: rem(15);
        line-height: 1;
    }

    .c-journey__left {
        color: #000000;
        font-size: rem(28);
    }

    .c-journey__right {
        color: #ff3333;
        font-size: rem(28);
    }

    .c-status {
        display: flex;
        line-height: 1;
        margin-top: rem(19);
        overflow: hidden;
    }

    .c-status__title {
        color: #333333;
        font-size: rem(20);
    }

    .c-member__quantity {
        color: #333333;
        font-size: rem(20);
        width: rem(220);
    }

    .c-status__property {
        color: #999999;
        font-size: rem(20);
    }

    .c-status__title--cluster {
        font-size: rem(20);
        color: #7fc690;
    }

    .c-list {
        width: rem(690);
        height: rem(300);
        margin: rem(30) rem(30) 0 rem(30);
        box-sizing: border-box;
        padding: rem(20);
        background: #fff;
    }

    .c-list__content {
        display: flex;
        justify-content: space-between;
        margin-bottom: rem(40);
    }

    .c-list__left {
        display: flex;
    }

    .c-list__img {
        display: block;
        height: rem(75);
        border-radius: 50%;
        margin-right: rem(20);
    }

    .c-list__introduce {
        line-height: 1;
    }

    .c-list__name {
        color: #333333;
        font-size: rem(28);
    }

    .c-list__introduce {
        color: #333333;
        font-size: rem(28);
        margin-top: rem(10);
    }

    .c-list__contentright {
        color: #ff3333;
        font-size: rem(28);
    }

</style>
