<template>
    <div class="c-cell" @click="jumpRouter">
        <div class="c-cell__left">
            <img class="c-cell__left--icon" v-if="icon == 'star'" src="../../components/assets/icon/star.png">
            <img class="c-cell__left--icon" v-if="icon == 'wallet'" src="../../components/assets/icon/wallet.png">
            <img class="c-cell__left--icon" v-if="icon == 'account'" src="../../components/assets/icon/account.png">
            <img class="c-cell__left--icon" v-if="icon == 'tour'" src="../../components/assets/icon/tour.png">
            <img class="c-cell__left--icon" v-if="icon == 'strategy'" src="../../components/assets/icon/strategy.png">
            <img class="c-cell__left--icon" v-if="icon == 'product'" src="../../components/assets/icon/product.png">
            <img class="c-cell__left--icon" v-if="icon == 'Setting'" src="../../components/assets/icon/Setting.png">
            <img class="c-cell__left--icon" v-if="icon == 'indent'" src="../../components/assets/icon/dingdanicon.png">
            <img class="c-cell__left--icon" v-if="icon == 'comment'" src="../../components/assets/icon/pinglunicon.png">
            <img class="c-cell__left--icon" v-if="icon == 'system'" src="../../components/assets/icon/lingdangicon.png">
            <p class="c-cell__size">{{label}}</p>
        </div>
        <div class="c-cell__right">
            <slot></slot>
            <div class="c-cell__text">
                <slot name="text"></slot>
            </div>
            <img class="c-cell__icon" v-if="router" src="../../assets/icon/right.png">
        </div>
    </div>
</template>

<script>
    //列表的单元格（相当于li）
    export default {
        //组件名字
        name: 'jr-cell',

        //引入子组件
        components: {},

        //接收父组件的传值
        props: {
            icon: {//左侧的icon(判断后续可在模版中添加)
                type: String,
                default: '',
            },
            label: {//左侧标题
                type: String,
                default: '',
            },
            router: {//跳转路由别名（不穿不显示右侧箭头）
                type: String,
                default: '',
            },
            routerFn: {//跳转路由前，自定义操作
                type: Function,
            },
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
             * 页面跳转
             * @param name
             */
            jumpRouter() {
                const self = this
                if (self.routerFn) {
                    self.routerFn(self.router)
                } else if (self.router) {
                    self.$router.push({
                        name: self.router
                    })
                }
            },
        },
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";

    .c-cell {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: rem(100);
        padding-right: rem(24);
        border-top: solid 1px #dedada;
    }

    .c-cell:first-child {
        border-top: none;
    }

    .c-cell__left {
        display: flex;
        align-items: center;
    }

    .c-cell__right {
        display: flex;
        align-items: center;
    }

    .c-cell__text {
        max-width: rem(400);
        color: rgba(30, 30, 30, .8);
        font-size: rem(32);
    }

    .c-cell__left--icon {
        width: rem(38);

        margin-right: rem(18);
        display: block;
    }

    .c-cell__icon {
        height: rem(34);
        display: block;
        margin-left: rem(18);
    }

    .c-cell__size {
        color: #1e1e1e;
        font-size: rem(32);
    }
</style>
