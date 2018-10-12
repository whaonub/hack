<template>
    <jr-body>
        <jr-head slot="head"></jr-head>
        <div>
            <p class="c-hint">行程单已提交到用户</p>
            <p class="c-course">行程单信息已嵌入进劳务派遣合同中您可前往订单中心-待出行中查看全部信息</p>
            <p class="c-confirm">我知道了</p>
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

    .c-hint {
        color: #dec190;
        font-size: rem(36);
        margin-top: rem(309);
        text-align: center;
    }

    .c-course {
        color: #999;
        font-size: rem(28);
        margin-top: rem(43);
        text-align: center;
        box-sizing: border-box;
        padding: 0 rem(120);
    }

    .c-confirm {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        width: rem(325);
        height: rem(88);
        color: #ffffff;
        font-size: rem(28);
        margin-top: rem(180);
        background-color: #dec190;
        border-radius: rem(4);
    }
</style>
