<template>
    <div class="c-but"
         :class="[diyClass, {'c-but--delete': size == 'delete'}, {'c-but--edit': size == 'edit'}, {'c-but--full': size == 'full'},{'c-but--original': size == 'original'}]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        //组件名字
        name: 'jr-button',

        //引入子组件
        components: {},

        //接收父组件的传值
        props: {
            size: {//大小
                size: String,
                default: 'small',//可选（small：小的，full：大的）
            },
            type: String,
            diyClass: String,
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

    .c-but {
        display: flex;
        justify-content: center;
        align-items: center;
        width: rem(174);
        height: rem(62);
        color: #fea38e;
        font-size: rem(28);
        border: solid 1px #dedada;
        border-radius: rem(8);
        background-color: #f7f7f7;
    }

    .c-but--full {
        width: 100%;
        height: rem(90);
        color: #fff;
        font-size: rem(36);
        background-color: #fea38e;
        border: none;
    }

    .c-but--delete {
        width: rem(168);
        height: rem(50);
        border: solid 1px #c7c2c2;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #ffffff;
        color: #c7c2c2;
        font-size: rem(28);
        border-radius: rem(8);
    }

    .c-but--edit {
        width: rem(168);
        height: rem(50);
        border: solid 1px #fea38e;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #ffffff;
        color: #fea38e;
        font-size: rem(28);
        border-radius: rem(8);
    }

    .c-but--original {
        width: rem(168);
        height: rem(50);
        border: solid rem(1) #fea38e;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fea38e;
        color: #fff;
        font-size: rem(28);
        border-radius: rem(8);
    }
</style>
