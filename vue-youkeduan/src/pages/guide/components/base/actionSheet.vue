<template>
    <mt-action-sheet
        :actions="actions"
        v-model="curAction">
    </mt-action-sheet>
</template>

<script>
    import {Actionsheet} from 'mint-ui';

    /*操作表，从屏幕下方移入*/
    export default {
        //组件名字
        name: 'jr-action-sheet',

        //引入子组件
        components: {
            MtActionSheet: Actionsheet,
        },

        //接收父组件的传值
        props: {
            actions: Array,//操作列表
            value: String,//选中的值
        },

        //组件私有数据
        data() {
            return {}
        },

        //数据计算
        computed: {
            curAction() {//当前选中的值
                return this.value
            }
        },

        //生命周期钩子：组件实例创建之后调用
        created() {
        },

        //生命周期钩子：组件实例渲染之后调用
        mounted() {
        },

        //数据监听
        watch: {
            curAction(val) {
                this.$emit('input', val)
            }
        },

        //自定义函数
        methods: {},
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";
</style>
