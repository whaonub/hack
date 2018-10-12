<template>
    <my-page>
        <my-head></my-head>
        <my-body>
            <my-cell-box>
                <my-cell label="手机号" class="mt-30">
                    <div class="c-cell__right">
                        <input type="number" class="c-cell__phone" v-model="mobile" placeholder="请输入手机">
                    </div>
                </my-cell>
                <my-cell label="验证码">
                    <div class="c-cell__right c-cell__right--space">
                        <input type="number" class="c-cell__verify-code" v-model="code" placeholder="4位数验证码">
                        <my-button @click.native="getSmsCode">{{time ? time + '秒后获取' : '获取验证码'}}</my-button>
                    </div>
                </my-cell>
                <my-cell label="新密码">
                    <div class="c-cell__right c-cell__right--space">
                        <input :type="passwordStatus ? 'text' : 'password'" class="c-cell__password"
                               v-model="password" placeholder="6-20位字符">
                        <img class="c-cell__password--icon" @click="setPasswordStatus" v-if="passwordStatus"
                             src="../../assets/icon/password_show.png">
                        <img class="c-cell__password--icon" @click="setPasswordStatus" v-else=""
                             src="../../assets/icon/password_hide.png">
                    </div>
                </my-cell>
            </my-cell-box>
            <div class="c-login">
                <my-button size="full" @click.native="setPassword">确认修改</my-button>
            </div>
        </my-body>
    </my-page>
</template>

<script>
    import MyBody from "../../components/layout/body";
    import MyHead from "../../components/layout/head";
    import MyCellBox from "../../components/cell/cellBox";
    import MyCell from "../../components/cell/cell";
    import MyButton from "../../components/base/button";
    import MyPage from "../../components/layout/page";

    /*重置密码*/
    export default {
        //组件名字
        name: '',

        //引入子组件
        components: {
            MyPage,
            MyButton,
            MyCell,
            MyCellBox,
            MyBody,
            MyHead
        },

        //接收父组件的传值
        props: {},

        //组件私有数据
        data() {
            return {
                passwordStatus: false,//密码显示状态
                mobile: '',//手机号
                password: '',//密码
                code: '',//短信验证码
                time: 0,//短信验证码等待时间
            }
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
             * 发送短信验证码
             */
            getSmsCode() {
                const self = this
                let mobileReg = /^[1][3-9][0-9]{9}$/
                if (!self.mobile) {
                    self.fn.myMessage('请输入手机号')
                } else if (!mobileReg.test(self.mobile)) {
                    self.fn.myMessage('手机号格式不正确')
                } else if (self.time) {
                    self.fn.myMessage(self.time + '秒后重试')
                } else {
                    self.time = 60
                    let time = setInterval(function () {
                        self.time--
                        if (!self.time) {
                            clearInterval(time)
                        }
                    }, 1000)
                    self.api.getSmsCode({
                        type: 'change_password',
                        mobile: self.mobile,
                    }).then(res => {
                        self.fn.myMessage('短信已发送')
                    }, err => {
                        self.time = 0
                        clearInterval(time)
                    })
                }
            },

            /**
             * 设置密码的显示状态
             */
            setPasswordStatus() {
                const self = this
                self.passwordStatus = !self.passwordStatus
            },

            /**
             * 重置密码处理
             */
            setPassword() {
                const self = this
                let mobileReg = /^[1][3-9][0-9]{9}$/
                let passwordReg = /^[a-zA-Z0-9\x21-\x7e]{6,20}$/
                if (!self.mobile) {
                    self.fn.myMessage('请输入手机号')
                } else if (!mobileReg.test(self.mobile)) {
                    self.fn.myMessage('手机号格式不正确')
                } else if (!self.password) {
                    self.fn.myMessage('请输入密码')
                } else if (!passwordReg.test(self.password)) {//账号密码登录
                    self.fn.myMessage('密码格式不正确')
                } else if (!self.code) {
                    self.fn.myMessage('请输入验证码')
                } else {
                    self.api.setPassword({
                        mobile: self.mobile,
                        password: self.password,
                        code: self.code,
                    }).then(res => {
                        self.$router.push({
                            name: 'login'
                        })
                    })
                }
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import "../../css/function";

    .c-cell__right {
        width: rem(500);
    }

    .c-cell__right--space {
        display: flex;
        justify-content: space-between;
    }

    .c-cell__phone {
        width: 100%;
        height: 100%;
        color: rgba(30, 30, 30, 0.8);
        font-size: rem(32);
        border: none;
    }

    .c-cell__password {
        width: rem(350);
        height: 100%;
        color: rgba(30, 30, 30, 0.8);
        font-size: rem(32);
        border: none;
    }

    .c-cell__password--icon {
        width: rem(35);
    }

    .c-cell__verify-code {
        width: rem(180);
        height: 100%;
        color: rgba(30, 30, 30, 0.8);
        font-size: rem(32);
        border: none;
    }

    .c-login {
        box-sizing: border-box;
        padding: rem(60) rem(24) 0;
    }
</style>
