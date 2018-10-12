<template>
    <jr-body>
        <jr-head slot="head"></jr-head>
        <jr-radio class="mt-30" v-model="current" :data="list"></jr-radio>
    </jr-body>
</template>

<script>
    /*语言选择*/
    import JrBody from "../../components/layout/body";
    import JrRadio from "../../components/base/radio";
    import JrHead from "../../components/layout/head";

    export default {
        //组件名字
        name: '',

        //引入子组件
        components: {JrHead, JrRadio, JrBody},

        //接收父组件的传值
        props: {},

        //组件私有数据
        data() {
            return {
                list: [
                    {
                        label: '无限制',
                        value: '无限制'
                    },
                    {
                        label: '10~20',
                        value: '10~20',
                    }
                ],
                current: '',//当前选中的值
            }
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
</style>
