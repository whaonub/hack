<template>
    <jr-cell-box>
        <jr-cell v-for="(item, key) in data" :key="key" :label="item.label" @click.native="setCurrent(item.value)">
            <img class="c-radio__icon" v-if="item.value == current" src="../assets/icon/radio_current.png">
        </jr-cell>
    </jr-cell-box>
</template>

<script>
    import JrCellBox from "../cell/cellBox";
    import JrCell from "../cell/cell";

    export default {
        //组件名字
        name: 'jr-radio',

        //引入子组件
        components: {JrCell, JrCellBox},

        model: {
            prop: 'current',
            event: 'radio'
        },

        //接收父组件的传值
        props: {
            data: {//数据源
                type: Array,
            },
            current: {//当前选中的值
                type: String,
            }
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
        methods: {
            /**
             * 修改当前选中的值
             * @param value
             */
            setCurrent(value) {
                this.$emit('radio', value)
            },
        },
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";

    .c-radio__icon {
        width: rem(38);
        height: rem(38);
    }
</style>
