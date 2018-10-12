<template>
    <my-page>
        <my-head></my-head>
        <div class="btn" @click="userWithdraw()">确认申请</div>
        <my-body>
            <div class="withdraw">
                <span class="withdraw__span">提现金额</span>
                <input class="withdraw__input" type="number" v-model="money" :placeholder="'可提现金额为¥' + userInfo.account">
            </div>
        </my-body>
    </my-page>
</template>

<script>
    import MyPage from "../../components/layout/page";
    import MyHead from "../../components/layout/head";
    import MyBody from "../../components/layout/body";

    /**
     * 提现
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
            return {
                money: '',//金额
            }
        },

        //数据计算
        computed: {
            userInfo() {
                return this.$store.state.user.userInfo
            },
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
             * 获取用户信息
             */
            getUserInfo() {
                const self = this
                self.api.getUserInfo()
                self.api.getUserBasicInfo()
            },

            /**
             * 申请提现
             */
            userWithdraw() {
                const self = this
                if (!self.money) {
                    self.fn.myMessage('请填写金额')
                } else {
                    self.api.userWithdraw({
                        money: self.money
                    }).then(() => {
                        self.fn.myMessage('提交成功，等待审核')
                    })
                }
            },
        },
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";

    .withdraw {
        display: flex;
        align-items: center;
        height: rem(88);
        box-sizing: border-box;
        padding: 0 rem(30);
        background-color: #fff;
    }

    .withdraw__span {
        font-size: rem(28);
        color: #333;
    }

    .withdraw__input {
        width: rem(500);
        margin-left: rem(40);
        border: none;
    }

    .btn {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: rem(88);
        font-size: rem(28);
        color: #fff;
        background-color: #dec190;
    }
</style>
