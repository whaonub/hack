<template>
    <jr-body>
        <jr-head slot="head"></jr-head>
        <div>
            <div class="c-addJourney">
                <img class="c-addJourney__img" src="../../assets/icon/jiahao.png" alt="">
                <p class="c-addJourney__p">添加行程</p>
            </div>
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

    .c-addJourney {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: rem(88);
        background-color: #dec190;
    }

    .c-addJourney__img {
        display: block;
        height: rem(15);
        margin-right: rem(10);
    }

    .c-addJourney__p {
        color: #ffffff;
        font-size: rem(28);
    }
</style>
