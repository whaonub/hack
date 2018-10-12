<template>
    <div class="list__item">
        <slot></slot>
        <slot name="right"></slot>
    </div>
</template>

<script>
    export default {
        //组件名字
        name: 'my-list-item',

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

    .list__item {
        display: flex;
        height: rem(88);
        @include m-border('t', #f3f3f3)
    }
</style>
