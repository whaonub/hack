<template>
    <my-page>
        <my-head></my-head>
        <my-body>
            <ul class="list">
                <li class="list__li">
                    <span class="list__title">账户余额</span>
                    <span class="list__right">
                        <span>¥</span>
                        <span class="list__span--orange">{{userInfo.account}}</span>
                    </span>
                </li>
            </ul>
            <ul class="list mt-20">
                <li class="list__li" @click="routerJump('userBill')">
                    <span class="list__title">查看账单</span>
                    <div class="list__right">
                        <img class="list__arrows--right" src="../../assets/common/arrows_right.png" alt="">
                    </div>
                </li>
                <li class="list__li" @click="routerJump('userWithdraw')">
                    <span class="list__title">申请提现</span>
                    <div class="list__right">
                        <img class="list__arrows--right" src="../../assets/common/arrows_right.png" alt="">
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

    /**
     * 我的钱包
     */
    export default {
        //组件名字
        name: '',

        //引入子组件
        components: {MyBody, MyHead, MyPage},

        //接收父组件的传值
        props: {},

        //组件私有数据
        data() {
            return {}
        },

        //数据计算
        computed: {
            userInfo() {
                return this.$store.state.user.userInfo
            }
        },

        //数据监听
        watch: {},

        //生命周期钩子：组件实例创建之后调用
        created() {
            this.getUserInfo()
        },

        //生命周期钩子：组件实例渲染之后调用
        mounted() {
        },

        //自定义函数
        methods: {
            /**
             * 路由跳转
             * @param config
             */
            routerJump(name, query = {}) {
                const self = this
                self.$router.push({
                    name: name,
                    query: query,
                })
            },

            /**
             * 获取用户信息
             */
            getUserInfo() {
                const self = this
                self.api.getUserBasicInfo()
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
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: rem(88);
        box-sizing: border-box;
        padding: 0 rem(30);
        font-size: rem(28);
        color: #333;
        &:first-child {
            @include m-border();
        }
    }

    .list__arrows--right {
        width: rem(10);
        height: rem(18);
    }

    .list__span--orange {
        color: #dec291;
    }
</style>
