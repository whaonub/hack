<template>
    <div class="c-head">

    </div>
</template>

<script>
    export default {
        //组件名字
        name: 'jr-head-change',

        //引入子组件
        components: {},

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

    .c-head {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
        width: 100%;
        height: rem(120);
        border: solid 1px red;
    }
</style>