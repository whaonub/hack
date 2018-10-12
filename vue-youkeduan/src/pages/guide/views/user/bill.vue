<template>
    <my-page>
        <my-head></my-head>
        <my-body>
            <ul class="list">
                <li class="list__li" v-for="(item, key) in list" :key="key">
                    <!--<div v-if="item.type == 1" class="list__row">订单编号：</div>-->
                    <div class="list__row">
                        <span class="list__span">{{item.type == 1 ? '收入' : '提现'}}</span>
                        <div class="list__right">
                            <span class="list__span--symbol">{{item.type == 1 ? '+' : '-'}}</span>
                            <span class="list__span">¥{{item.money}}</span>
                        </div>
                    </div>
                    <div class="list__row">
                        <span class="list__span--time">{{item.createTime}}</span>
                        <span v-if="item.type == 2" class="list__span--red">{{item.status == 1 ? '审核中' : (item.status == 2 ? '审核通过' : '审核未通过')}}</span>
                    </div>
                </li>
            </ul>
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
                list: [],
            }
        },

        //数据计算
        computed: {},

        //数据监听
        watch: {},

        //生命周期钩子：组件实例创建之后调用
        created() {
            this.getList()
        },

        //生命周期钩子：组件实例渲染之后调用
        mounted() {
        },

        //自定义函数
        methods: {
            /**
             * 获取账单列表
             */
            getList() {
                const self = this
                self.api.getUserBill().then(res => {
                    self.list = res.data
                })
            },
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
