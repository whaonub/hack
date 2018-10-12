<template>
    <jr-body>
        <jr-head slot="head"></jr-head>
        <div>
            <div class="c-createJourney">
                <ul class="c-createJourney__ul">
                    <li class="c-createJourney__li">
                        <p class="c-createJourney__title">选择起止日期：</p>
                        <p class="c-createJourney__content  c-createJourney__content--color">选择日期</p>
                    </li>
                    <li class="c-createJourney__li">
                        <p class="c-createJourney__title">选择目的地：</p>
                        <p class="c-createJourney__content">昆明</p>
                        <img class="c-createJourney__content--eliminate" src="../../assets/order/eliminate.png" alt="">
                    </li>
                </ul>
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

    .c-createJourney__ul {
        width: 100%;
        margin-top: rem(20);
    }

    .c-createJourney__li {
        position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        height: rem(88);
        box-sizing: border-box;
        padding: 0 rem(30);
        color: #333333;
        font-size: rem(28);
        background-color: #ffffff;
    }

    .c-createJourney__title {
        width: rem(200);
    }

    .c-createJourney__content--color {
        color: #dec190;
    }

    .c-createJourney__content {
        width: rem(450);
        height: rem(88);
        line-height: rem(88);
        margin-left: rem(35);
        box-sizing: border-box;
        padding-right: rem(20);
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;

    }

    .c-createJourney__content--eliminate {
        position: absolute;
        top: rem(33);
        right: rem(30);
        z-index: 999;
        height: rem(22);
    }
</style>
