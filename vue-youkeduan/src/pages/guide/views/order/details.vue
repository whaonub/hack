<template>
    <jr-body class="c-body__content">
        <jr-head slot="head"></jr-head>
        <div>
            <div>
                <div class="c-material">
                    <div class="c-material__left">
                        <img class="c-material__img" src="../../assets/icon/register_pic--two.png" alt="">
                        <div class="c-material__data">
                            <p class="c-material__name">姓名</p>
                            <p class="c-material__site">地址</p>
                        </div>
                    </div>
                    <div class="c-material__right">对话</div>
                </div>
                <div class="c-order__information">
                    <p class="c-order__title">订单编号：</p>
                    <p class="c-order__data">qwew345345345</p>
                </div>
                <div class="c-order__information">
                    <p class="c-order__title">出游时间：</p>
                    <div class="c-order__data">
                        <span>2018-04-03 19.00</span>
                        <span>--05-03 19.00</span>
                    </div>
                </div>
                <div class="c-order__information">
                    <p class="c-order__title">预计费用：</p>
                    <p class="c-order__data">110</p>
                </div>
                <div class="c-order__information">
                    <p class="c-order__title">目的地：</p>
                    <p class="c-order__data">中国</p>
                </div>
                <div class="c-order__information">
                    <p class="c-order__title">订单编号：</p>
                    <p class="c-order__data">qwew345345345</p>
                </div>
                <div class="c-order__information">
                    <p class="c-order__title">人数：</p>
                    <p class="c-order__data">成人2人</p>
                    <p class="c-order__data c-ml20">儿童2人</p>
                </div>
                <div class="c-order__information">
                    <p class="c-order__title">状态：</p>
                    <p class="c-order__data c-order__data--await">待接单</p>
                </div>
                <!-- <div class="c-order__information">
                     <p class="c-order__title">总价：</p>
                     <p class="c-order__data">110</p>
                 </div>-->
                <div class="c-order__remark">
                    <p class="c-order__title">备注：</p>
                    <p class="c-order__data">你的你的你的</p>
                </div>
                <div class="c-verify">
                    <div class="c-verify__date">
                        <div class="c-verify__left">
                            <span class="c-verify__title">联系人：</span>
                            <span class="c-verify__name">阿宝</span>
                        </div>
                        <div class="c-verify__right">
                            <img class="c-phone__img" src="../../assets/order/phone.png" alt="">
                            <p class="c-phone__dial">拨打电话</p>
                        </div>
                    </div>
                    <div class="c-verify__date">
                        <div class="c-verify__left">
                            <span class="c-verify__title">出行口令：</span>
                            <input type="text" class="c-shibboleth__input" placeholder="请输入">
                        </div>
                    </div>
                </div>
            </div>
            <div class="c-footer">
                <p class="c-footer__left">不接单</p>
                <p class="c-footer__right">接单</p>
            </div>
            <!--制作行程单时候的底部-->
            <!-- <div class="c-footers">制作行程单</div>-->
        </div>
    </jr-body>
</template>

<script>
    import JrBody from "../../components/layout/body";
    import JrHead from "../../components/layout/head";

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

    .c-body__content {
        height: 100%;
        box-sizing: border-box;
        padding-bottom: rem(98);
    }

    .c-ml20 {
        margin-left: rem(20);
    }

    .c-material {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: rem(135);
        box-sizing: border-box;
        padding: 0 rem(30);
        background: #fff;
        border-bottom: 1px solid #f5f5f9;
    }

    .c-material__left {
        display: flex;
        line-height: 1;
    }

    .c-material__img {
        display: block;
        width: rem(75);
        height: rem(75);
        border-radius: rem(75);
        margin-right: rem(20);
    }

    .c-material__name {
        color: #333333;
        font-size: rem(28);
    }

    .c-material__site {
        margin-top: rem(11);
        color: #333333;
        font-size: rem(28);
    }

    .c-material__right {
        display: flex;
        align-items: center;
        justify-content: center;
        width: rem(168);
        height: rem(58);
        color: #ffffff;
        font-size: rem(24);
        background-color: #dec190;
        border-radius: rem(10);
    }

    .c-order__information {
        display: flex;
        align-items: center;
        width: 100%;
        height: rem(88);
        box-sizing: border-box;
        padding: 0 rem(30);
        background: #fff;
        border-bottom: 1px solid #f5f5f9;
    }

    .c-order__remark {
        display: flex;
        align-items: center;
        width: 100%;
        height: rem(128);
        box-sizing: border-box;
        padding: 0 rem(30);
        background: #fff;
        border-bottom: 1px solid #f5f5f9;
    }

    .c-order__title {
        color: #999999;
        font-size: rem(28);
    }

    .c-order__data {
        color: #333333;
        font-size: rem(28);
    }

    .c-order__data--await {
        color: #7fc690;
    }

    .c-footer {
        display: flex;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 999;
        width: 100%;
        height: rem(98);
    }

    .c-footers {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 999;
        width: 100%;
        height: rem(98);
        color: #ffffff;
        font-size: rem(30);
        background-color: #dec190;
    }

    .c-footer__left {
        width: 50%;
        height: rem(98);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #666666;
        font-size: rem(30);
        background-color: #fff;
    }

    .c-verify__title {
        color: #333;
        font-size: rem(30);
    }

    .c-verify__name {
        color: #999;
        font-size: rem(30);
    }

    .c-footer__right {
        width: 50%;
        height: rem(98);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: rem(30);
        background-color: #dec190;
    }

    .c-verify {
        width: rem(682);
        height: rem(210);
        margin: 0 auto;
        margin-top: rem(20);
        margin-bottom: rem(30);
        box-sizing: border-box;
        padding: 0 rem(69);
        background: url("../../assets/order/card.png") no-repeat;
        background-size: rem(682) rem(210);
    }

    .c-verify__date {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: rem(105);
        line-height: 1;
    }

    .c-verify__left {
        line-height: 1;
        color: #333333;
        font-size: rem(30);
    }

    .c-verify__right {
        display: flex;
        align-items: center;
        width: rem(168);
        height: rem(58);
        box-sizing: border-box;
        padding-left: rem(22);
        color: #ffffff;
        font-size: rem(24);
        background-color: #dec190;
        border-radius: rem(10);
    }

    .c-verify__shibboleth {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: rem(105);
        line-height: 1;
    }

    .c-phone__img {
        width: rem(20);
        height: rem(24);
        margin-right: rem(8);
    }

    .c-shibboleth__input {
        width: rem(370);
        height: rem(105);
        border: 0;
        color: #999999;
        font-size: rem(30);
    }

</style>
