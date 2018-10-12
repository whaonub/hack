<template>
    <div class="c-list">
        <slot name="left"></slot>
        <slot name="right"></slot>
    </div>
</template>

<script>
    export default {
        //组件名字
        name: 'jr-list',

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

    .c-list {
        display: flex;
        justify-content: space-between;
        min-height: rem(140);
        box-sizing: border-box;
        padding: rem(35) rem(24);
        border-bottom: solid 1px #dedada;
    }
</style>
