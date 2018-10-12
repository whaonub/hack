<template>
    <mt-loadmore ref="refresh" :top-method="down ? topMethod : null" :bottom-method="up ? bottomMethod : null" :bottom-all-loaded="upStatus"
                 topDropText="释放刷新" topLoadingText="刷新中..." bottomPullText="上拉加载" bottomDropText="释放加载">
        <div class="c-refresh">
            <slot></slot>
        </div>
    </mt-loadmore>
</template>

<script>
    import {Loadmore} from 'mint-ui';

    export default {
        //组件名字
        name: 'jr-refresh',

        //子组件引入
        components: {
            MtLoadmore: Loadmore
        },

        //接收父级的传值
        props: {
            down: Function,//下拉
            up: Function,//上拉
            upStatus: {//是否到达底部
                type: Boolean,
                default: false,
            }
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
        methods: {
            /**
             * 下拉刷新
             */
            topMethod() {
                const self = this
                self.down(self.$refs.refresh.onTopLoaded)
            },

            /**
             * 上拉加载
             */
            bottomMethod() {
                const self = this
                self.up(self.$refs.refresh.onBottomLoaded)
            },
        }
    }
</script>

<style lang="scss" scoped="">
    .c-refresh {
        position: relative;
    }
</style>
