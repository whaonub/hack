<template>
    <div>
        <jr-body>
            <jr-head slot="head"></jr-head>
            <div>
                <div class="c-text mb-20">
                    123
                </div>
                <div class="c-print">
                    <p class="c-print__p">图片</p>
                    <div class="c-img">
                        <img class="c-img__size" src="../../assets/icon/radio_current.png" alt="">
                    </div>
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

    .c-text {
        box-sizing: border-box;
        padding: rem(30) rem(24) rem(40) rem(24);
        background: #fff;
        box-shadow: 0px 2px 2px 0px rgba(222, 200, 195, 0.2);
        color: rgba(30, 30, 30, 0.8);
        font-size: rem(24);
    }

    .c-print {
        box-sizing: border-box;
        padding: rem(30) rem(24) rem(40) rem(24);
        background: #fff;
        box-shadow: 0px 2px 2px 0px rgba(222, 200, 195, 0.2);
    }

    .c-print__p {
        color: #1e1e1e;
        font-size: rem(32);
    }

    .c-img {
        margin-top: rem(20);
        display: flex;
        flex-wrap: wrap;
    }

    .c-img img:nth-child(3n) {
        margin-right: 0px;
    }

    .c-img__size {
        width: rem(218);
        height: rem(218);
        margin-right: rem(24);
        margin-bottom: rem(24);
    }
</style>
