<template>
    <my-page>
        <my-head></my-head>
        <my-body>
            <div>等级规则</div>
        </my-body>
    </my-page>
</template>

<script>
    import MyPage from "../../components/layout/page";
    import MyHead from "../../components/layout/head";
    import MyBody from "../../components/layout/body";

    export default {
        //组件名字
        name: '',

        //引入子组件
        components: {MyBody, MyHead, MyPage},

        //接收父组件的传值
        props: {},

        //组件私有数据
        data() {
            return {}
        },

        //数据计算
        computed: {},

        //数据监听
        watch: {},

        //生命周期钩子：组件实例创建之后调用
        created() {
        },

        //生命周期钩子：组件实例渲染之后调用
        mounted() {
        },

        //自定义函数
        methods: {},
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";
</style>
