<template>
    <jr-body>
        <jr-head slot="head"></jr-head>
        <div>
            <div class="c-journeyList">
                <div class="c-journey">
                    <p class="c-journey__title">起止时间：</p>
                    <p class="c-journey__date">2018/06/06 09.00~2018/07/06/17.00</p>
                </div>
                <div class="c-journey">
                    <p class="c-journey__title">目的地：</p>
                    <p class="c-journey__date">马家大院</p>
                </div>
                <div class="c-journey">
                    <p class="c-journey__title">供应价：</p>
                    <p class="c-journey__date">89.00</p>
                    <p class="c-journey__bazaar">市场价：</p>
                    <p class="c-journey__date">189.00</p>
                </div>
                <div class="c-journey__delete">删除</div>
            </div>
            <div class="c-serviceList">
                <p class="c-serviceList__time">2018.06.06 19.00</p>
                <p class="c-serviceList__traffic">接机</p>
                <p class="c-serviceList__price">100</p>
                <p class="c-serviceList__delete">删除</p>
            </div>
        </div>
    </jr-body>
</template>

<script>
    import JrBody from "../../components/layout/body.vue";
    import JrHead from "../../components/layout/head.vue";
    import JrFoot from "../../components/layout/foot.vue";

    export default {
        //组件名字
        name: '',

        //引入子组件
        components: {
            JrFoot,
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

    .c-journeyList {
        position: relative;
        width: 100%;
        height: rem(148);
        box-sizing: border-box;
        padding: 0 rem(30);
        margin-top: rem(20);
        background-color: #ffffff;
    }

    .c-journey {
        display: flex;
        line-height: 1;
        box-sizing: border-box;
        padding-top: rem(20);
    }

    .c-journey__title {
        width: rem(120);
        color: #333333;
        font-size: rem(24);
    }

    .c-journey__date {
        color: #333333;
        font-size: rem(24);
        margin-left: rem(20);
    }

    .c-journey__bazaar {
        width: rem(100);
        color: #333333;
        font-size: rem(24);
        margin-left: rem(40);
    }

    .c-journey__delete {
        position: absolute;
        right: rem(30);
        bottom: rem(20);
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
        width: rem(124);
        height: rem(54);
        background-color: #dec190;
        border-radius: rem(4);
        color: #ffffff;
        font-size: rem(22);
    }

    .c-serviceList {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        height: rem(94);
        box-sizing: border-box;
        padding: 0 rem(30);
        margin-top: rem(20);
        background-color: #ffffff;
    }

    .c-serviceList__time {
        width: rem(220);
        color: #333333;
        font-size: rem(24);
        margin-right: rem(20);
    }

    .c-serviceList__traffic {
        width: rem(120);
        color: #333333;
        font-size: rem(24);
    }

    .c-serviceList__price {
        width: rem(100);
        color: #333333;
        font-size: rem(24);
    }

    .c-serviceList__delete {
        position: absolute;
        right: rem(30);
        bottom: rem(20);
        display: flex;
        align-items: center;
        justify-content: center;
        width: rem(124);
        height: rem(54);
        background-color: #dec190;
        border-radius: rem(4);
        color: #ffffff;
        font-size: rem(22);
    }
</style>
