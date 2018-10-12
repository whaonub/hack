<template>
    <svg class="icon" aria-hidden="true" :style="'font-size:' + size + '; color:' + color + ';'">
        <use :xlink:href="'#' + name "></use>
    </svg>
</template>

<script>
    export default {
        //组件名字
        name: 'MyIcon',

        //子组件引入
        components: {},

        //接收父级的传值
        props: {
            name: String,//icon 的href
            size: String,//icon 大小
            color: String,//icon 颜色
        },

        //组件私有数据
        data() {
            return {}
        },

        //生命周期钩子：组件钩子函数
        created() {
        },

        //生命周期钩子：组件渲染后调用
        mounted() {
        },

        //生命周期钩子：组件更新渲染后调用
        update() {
        },

        //计算属性
        computed: {},

        //数据监听
        watch: {},

        //自定义函数
        methods: {},
    }
</script>

<style lang="scss">
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: middle;
        fill: currentColor;
        overflow: hidden;
    }
</style>