<template>
    <div>
        <jr-body>
            <jr-head slot="head" class="c-header__bg"></jr-head>
            <div>
                <div class="c-content">
                    <div class="c-shadow "></div>
                    <img class="c-logo" src="../../assets/icon/logo.png" alt="">
                    <p class="c-title">向内求于心,向外求于行</p>
                    <p class="c-versions">wersion 1.0</p>
                    <p class="c-agreement">用户协议</p>
                </div>
            </div>
        </jr-body>
    </div>
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

    .c-header__bg {
        background-color: rgba(255, 255, 255, 0.4) !important;
        box-shadow: 0px 0px 0px 0px #eee9e7 !important;
    }

    .c-content {
        position: relative;
        background: url("../../assets/icon/bg.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 100vh;
        margin: 0;
        padding: 0;
    }

    .c-shadow {
        width: 100%;
        height: 100vh;
        background: rgba(255, 255, 255, 0.2);
    }

    .c-logo {
        height: rem(114);
        position: absolute;
        top: rem(289);
        left: rem(318);
    }

    .c-title {
        position: absolute;
        top: rem(442);
        left: rem(232);
        color: #fc957e;
        font-size: rem(28);
    }

    .c-versions {
        position: absolute;
        top: rem(488);
        left: rem(309);
        color: rgba(60, 60, 60, 0.5);
        font-size: rem(26);
    }

    .c-agreement {
        position: absolute;
        bottom: rem(40);
        left: rem(327);
        color: rgba(255, 255, 255, 0.6);
        font-size: rem(24);
    }
</style>
