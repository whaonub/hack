<template>
    <my-page>
        <my-head :back="false"></my-head>
        <my-body>
            <div>
                <div class="c-switchover">
                    <div class="c-switchover__label" :class="{'c-switchover__label--current': loginType == 'account'}"
                         @click="setLoginType('account')">账号密码登录
                    </div>
                    <div class="c-switchover__label" :class="{'c-switchover__label--current': loginType == 'noteCode'}"
                         @click="setLoginType('noteCode')">验证码登录
                    </div>
                </div>
                <my-cell-box>
                    <my-cell label="手机号">
                        <div class="c-cell__right">
                            <input type="number" class="c-cell__phone" v-model="mobile" placeholder="请输入手机号">
                        </div>
                    </my-cell>
                    <my-cell label="密码" v-if="loginType == 'account'">
                        <div class="c-cell__right c-cell__right--space">
                            <input :type="passwordStatus ? 'text' : 'password'" class="c-cell__password"
                                   v-model="password" placeholder="6-20位字符">
                            <img class="c-cell__password--icon" @click="setPasswordStatus" v-if="passwordStatus"
                                 src="../../assets/icon/password_show.png">
                            <img class="c-cell__password--icon" @click="setPasswordStatus" v-else
                                 src="../../assets/icon/password_hide.png">
                        </div>
                    </my-cell>
                    <my-cell label="图形验证码" v-if="mapVerifyCodeStatus && loginType == 'noteCode'">
                        <div class="c-cell__right c-cell__right--space">
                            <input type="number" class="c-cell__verify-code" v-model="mapVerifyCode" placeholder="图形验证码">
                            <img class="c-cell__map-verify-code" src="http://placeholder.qiniudn.com/174x62">
                        </div>
                    </my-cell>
                    <my-cell label="验证码" v-if="loginType == 'noteCode'">
                        <div class="c-cell__right c-cell__right--space">
                            <input type="number" class="c-cell__verify-code" v-model="code" placeholder="4位数验证码">
                            <my-button @click.native="getSmsCode">{{time ? time + '秒后获取' : '获取验证码'}}</my-button>
                        </div>
                    </my-cell>
                </my-cell-box>
                <router-link class="c-reset-password" :to="{name: 'resetPassword'}">忘记密码</router-link>
                <div class="c-login">
                    <my-button size="full" @click.native="login">登录</my-button>
                </div>
                <router-link :to="{name: 'register'}">
                    <div class="c-annotation">还没有账号，去注册</div>
                </router-link>
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

    /*登录*/
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
                loginType: 'account',//登录类型（account：账号，noteCode：短信验证码）
                passwordStatus: false,//密码显示状态
                mapVerifyCodeStatus: false,//图像验证码状态
                mobile: '',//手机号
                password: '',//密码
                mapVerifyCode: '',//图形验证码
                code: '',//短信验证码
                time: 0,//短信验证码等待时间
            }
        },

        //数据计算
        computed: {},

        //生命周期钩子：组件实例创建之后调用
        created() {
            const self = this
            self.fn.logout()
        },

        //生命周期钩子：组件实例渲染之后调用
        mounted() {
        },

        //数据监听
        watch: {},

        //自定义函数
        methods: {
            /**
             * 设置登录类型
             */
            setLoginType(type) {
                const self = this
                self.loginType = type
                self.mobile = ''
                self.password = ''
                self.mapVerifyCode = ''
                self.code = ''
            },

            /**
             * 设置密码的显示状态
             */
            setPasswordStatus() {
                const self = this
                self.passwordStatus = !self.passwordStatus
            },

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
                        type: 'login_code',
                        mobile: self.mobile,
                    }).then(() => {
                        self.fn.myMessage('短信已发送')
                    }, () => {
                        self.time = 0
                        clearInterval(time)
                    })
                }
            },

            /**
             * 登录处理
             */
            login() {
                const self = this
                let mobileReg = /^[1][3-9][0-9]{9}$/
                let passwordReg = /^[a-zA-Z0-9\x21-\x7e]{6,20}$/
                if (!self.mobile) {
                    self.fn.myMessage('请输入手机号')
                } else if (!mobileReg.test(self.mobile)) {
                    self.fn.myMessage('手机号格式不正确')
                } else if (self.loginType == 'account' && !self.password) {//账号密码登录
                    self.fn.myMessage('请输入密码')
                } else if (self.loginType == 'account' && !passwordReg.test(self.password)) {//账号密码登录
                    self.fn.myMessage('密码格式不正确')
                } else if (self.loginType == 'noteCode' && !self.code) {
                    self.fn.myMessage('请输入验证码')
                } else {
                    self.api.login({
                        type: self.loginType == 'account' ? 'password' : 'code',
                        mobile: self.mobile,
                        password: self.password,
                        mapVerifyCode: self.mapVerifyCode,
                        code: self.code,
                    }).then(() => {
                        self.api.getUserInfo().then(res => {
                            if (res.data.status == 0) {//完善信息
                                self.$router.push({
                                    name: 'userCompleteInfo'
                                })
                            } else {
                                self.$router.push({
                                    name: 'index'
                                })
                            }
                        })
                    })
                }
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import "../../css/function";

    .c-switchover {
        display: flex;
        justify-content: center;
        align-items: center;
        width: rem(364);
        height: rem(74);
        margin: rem(30) auto rem(35);
        border: solid 1px #fea38e;
        border-radius: rem(8);
    }

    .c-switchover__label {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100%;
        color: #fea38e;
        font-size: rem(28);
    }

    .c-switchover__label--current {
        color: #fff;
        background-color: #fea38e;
    }

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

    .c-cell__map-verify-code {
        width: rem(174);
        height: rem(62);
    }

    .c-cell__verify-code {
        width: rem(180);
        height: 100%;
        color: rgba(30, 30, 30, 0.8);
        font-size: rem(32);
        border: none;
    }

    .c-reset-password {
        display: block;
        box-sizing: border-box;
        padding: 0 rem(24);
        margin-top: rem(20);
        color: #fea38e;
        font-size: rem(28);
        text-align: right;
    }

    .c-login {
        box-sizing: border-box;
        padding: rem(60) rem(24) 0;
    }

    .c-annotation {
        display: flex;
        justify-content: center;
        margin: rem(300) 0 rem(20) 0;
        color: #fea38e;
        font-size: rem(32);
    }
</style>
