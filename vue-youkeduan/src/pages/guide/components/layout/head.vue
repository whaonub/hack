<template>
    <div class="head">
        <div class="head__left">
            <img class="head__back" v-if="back && icon == 'back'" @click="goBack" src="../../assets/icon/left.png">
            <img class="head__close" v-if="back && icon == 'close'" @click="goBack" src="../../assets/icon/close.png">
        </div>
        <div class="head__center">
            <div class="head__title" v-if="title">{{headTitle}}</div>
            <slot v-else></slot>
        </div>
        <div class="head__right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        //组件名字
        name: 'my-head',

        //子组件引入
        components: {},

        //接收父级的传值
        props: {
            back: {//是否有返回箭头
                type: Boolean,
                default: true,
            },
            icon: {//返回的icon
                type: String,
                default: 'back',
            },
            backFn: {//返回的自定义函数
                type: Function,
            },
            title: {//标题
                type: [Boolean, String],
                default: true,
            },
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
        computed: {
            headTitle() {
                const self = this
                return (typeof self.title == 'string' && self.title) ? self.title : self.$route.meta.title
            }
        },

        //数据监听
        watch: {},

        //自定义函数
        methods: {
            /**
             * 返回上一页
             */
            goBack() {
                const self = this
                if (typeof self.backFn == 'function') {
                    self.backFn()
                } else {
                    self.$router.back()
                }
            }
        },
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";

    .head {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: rem(88);
        background-color: #fff;
        border-bottom: solid 1px #f3f3f3;
    }

    .head__left {
        display: flex;
        justify-content: center;
        align-items: center;
        width: rem(88);
        height: 100%;
    }

    .head__back {
        width: rem(16);
        height: rem(28);
    }

    .head__close {
        height: rem(34);
        width: rem(34);
    }

    .head__center {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    .head__title {
        font-size: rem(30);
        color: #000;
        text-align: center;
    }

    .head__right {
        display: flex;
        justify-content: flex-end;
        font-size: rem(34);
        color: #1e1e1e;
    }
</style>
