<template>
    <my-page>
        <my-head></my-head>
        <my-body>
            <my-refresh :down="down" :up="up" auto-load="up">
                <ul class="list">
                    <li class="list__li">
                        <div class="list__row">
                            <span class="list__span">增加</span>
                            <div class="list__right">
                                <span class="list__span--symbol">+</span>
                                <span class="list__span">155</span>
                            </div>
                        </div>
                        <div class="list__row">
                            <span class="list__span--time">20016-12-26  23:00</span>
                            <div class="list__right">
                                <span class="list__span--red">审核中</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </my-refresh>
        </my-body>
    </my-page>
</template>

<script>
    import MyPage from "../../components/layout/page";
    import MyHead from "../../components/layout/head";
    import MyBody from "../../components/layout/body";
    import MyRefresh from "../../components/refresh/refresh";

    export default {
        //组件名字
        name: '',

        //引入子组件
        components: {MyRefresh, MyBody, MyHead, MyPage},

        //接收父组件的传值
        props: {},

        //组件私有数据
        data() {
            return {
                list: [],//成长记录列表
                page: 0,//页码
            }
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
        methods: {
            /**
             * 下拉刷新
             * @param obj
             */
            down(obj) {
                obj.endDownLoading()
            },

            /**
             * 上拉加载
             * @param obj
             */
            up(obj) {
                obj.endUpLoading(true)
            }
        },
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";

    .list {
        background-color: #fff;
    }

    .list__li {
        @include m-border(t);
        box-sizing: border-box;
        padding: 0 rem(30);
        &:first-child {
            @include m-border();
        }
    }

    .list__row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: rem(74);
    }

    .list__span {
        font-size: rem(28);
        color: #333;
    }

    .list__span--symbol {
        margin-right: rem(20);
        font-size: rem(28);
        color: #333;
    }

    .list__span--time {
        font-size: rem(22);
        color: #999;
    }

    .list__span--red {
        font-size: rem(22);
        color: #f53531;
    }
</style>
