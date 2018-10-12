<template>
    <jr-body>
        <jr-head slot="head" :back-fn="goUser"></jr-head>
        <div>
            <img class="c-img" src="../../assets/icon/check.png" alt="">
            <p class="c-check">内容审核中...</p>
            <div class="c-accomplish">恭喜你完成注册,平台将尽快进行认证审核</div>
        </div>
    </jr-body>
</template>

<script>
    /*审核*/
    import JrBody from "../../components/layout/body";
    import JrHead from "../../components/layout/head";
    import JrCellBox from "../../components/cell/cellBox";
    import JrCell from "../../components/cell/cell";

    export default {
        //组件名字
        name: '',

        //引入子组件
        components: {
            JrCell,
            JrCellBox,
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
        methods: {
            goUser() {
                this.$router.push({
                    name: 'user'
                })
            },
        },
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";

    .c-img {
        height: rem(142);
        margin: 0 auto;
        display: block;
        margin-top: rem(71);
    }

    .c-check {
        text-align: center;
        color: #1e1e1e;
        font-size: rem(32);
        margin-top: rem(20);
    }

    .c-accomplish {
        text-align: center;
        color: rgba(30, 30, 30, 0.6);
        font-size: rem(30);
        margin-top: rem(80);
    }
</style>
