<template>
    <div class="c-cell-box-title">{{title}}</div>
</template>

<script>
    export default {
        //组件名字
        name: 'jr-cell-box-title',

        //引入子组件
        components: {},

        //接收父组件的传值
        props: {
            title: String,//标题
        },

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

    .c-cell-box-title {
        height: rem(91);
        box-sizing: border-box;
        padding: rem(30) rem(24) rem(20);
        color: #1e1e1e;
        font-size: rem(32);
    }
</style>
