<template>
    <div class="page" :class="{'page__head': head, 'page__foot': foot}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        //组件名字
        name: 'my-page',

        //引入子组件
        components: {},

        //接收父组件的传值
        props: {
            head: {//是否有头部
                type: Boolean,
                default: true,
            },
            foot: {//是否有底部
                type: Boolean,
                default: false,
            },
        },

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

    .page {
        position: relative;
        width: rem(750);
        height: 100vh;
        overflow: hidden;
        box-sizing: border-box;
        background-color: #f3f3f3;
    }

    .page__head {
        padding-top: rem(88);
    }

    .page__foot {
        padding-bottom: rem(100);
    }
</style>
