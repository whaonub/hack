<template>
    <div class="c-cell-box">
        <slot></slot>
    </div>
</template>

<script>
    //列表的容器（相当于ul）
    export default {
        //组件名字
        name: 'jr-cell-box',

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

    .c-cell-box {
        padding-left: rem(24);
        background-color: #fff;
        box-shadow: 0px 2px 2px 0px #eee9e7;
    }
</style>