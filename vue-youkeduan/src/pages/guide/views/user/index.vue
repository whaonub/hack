<template>
    <my-page :foot="true">
        <my-head :back="false"></my-head>
        <my-foot></my-foot>
        <my-body class="body">
            <div class="user-top">
                <div class="user-top__left">
                    <img v-if="userInfo.headPhoto" class="user-top__portrait" :src="fileUrl + userInfo.headPhoto">
                    <img v-else class="user-top__portrait" src="../../assets/user/head_portrait.png">
                    <span class="user-top__name">{{userInfo.name}}</span>
                </div>
                <div class="user-top__preview">预览主页</div>
            </div>
            <ul class="list">
                <li class="list__li" @click="routerJump('userStarLevel')">
                    <img class="list__icon" src="../../assets/user/伙伴级别.png">
                    <div class="list__content m-flex-between">
                        <span class="list__label">我的星级</span>
                        <div class="list__right">
                            <span class="list__span">{{userInfo.starLevel}}星</span>
                            <img class="list__router" src="../../assets/common/arrows_right.png">
                        </div>
                    </div>
                </li>
                <li class="list__li" @click="routerJump('userWallet')">
                    <img class="list__icon" src="../../assets/user/钱包.png">
                    <div class="list__content m-flex-between">
                        <span class="list__label">我的钱包</span>
                        <div class="list__right">
                            <span class="list__span list__span--yellow">¥{{userInfo.account}}</span>
                            <img class="list__router" src="../../assets/common/arrows_right.png">
                        </div>
                    </div>
                </li>
                <li class="list__li" @click="routerJump('userCompleteInfo')">
                    <img class="list__icon" src="../../assets/user/申请导游-01.png">
                    <div class="list__content m-flex-between">
                        <span class="list__label">导游认证</span>
                        <div class="list__right">
                            <span class="list__span list__span--red">{{identificationText}}</span>
                            <img class="list__router" src="../../assets/common/arrows_right.png">
                        </div>
                    </div>
                </li>
                <li class="list__li" @click="routerJump('userLabel')">
                    <img class="list__icon" src="../../assets/user/标签.png">
                    <div class="list__content m-flex-between">
                        <span class="list__label">我的标签</span>
                        <div class="list__right">
                            <img class="list__router" src="../../assets/common/arrows_right.png">
                        </div>
                    </div>
                </li>
                <li class="list__li" @click="routerJump('product')">
                    <img class="list__icon" src="../../assets/user/星星.png">
                    <div class="list__content m-flex-between">
                        <span class="list__label">我的产品库</span>
                        <div class="list__right">
                            <img class="list__router" src="../../assets/common/arrows_right.png">
                        </div>
                    </div>
                </li>
                <li class="list__li" @click="routerJump('productRelease')">
                    <img class="list__icon" src="../../assets/user/产品.png">
                    <div class="list__content m-flex-between">
                        <span class="list__label">已发布产品</span>
                        <div class="list__right">
                            <img class="list__router" src="../../assets/common/arrows_right.png">
                        </div>
                    </div>
                </li>
                <li class="list__li" @click="routerJump()">
                    <img class="list__icon" src="../../assets/user/时间.png">
                    <div class="list__content m-flex-between">
                        <span class="list__label">历史产品</span>
                        <div class="list__right">
                            <img class="list__router" src="../../assets/common/arrows_right.png">
                        </div>
                    </div>
                </li>
                <li class="list__li" @click="routerJump()">
                    <img class="list__icon" src="../../assets/user/系统消息 (1).png">
                    <div class="list__content m-flex-between">
                        <span class="list__label">系统消息</span>
                        <div class="list__right">
                            <img class="list__router" src="../../assets/common/arrows_right.png">
                        </div>
                    </div>
                </li>
                <li class="list__li" @click="routerJump()">
                    <img class="list__icon" src="../../assets/user/设置.png">
                    <div class="list__content m-flex-between">
                        <span class="list__label">设置</span>
                        <div class="list__right">
                            <img class="list__router" src="../../assets/common/arrows_right.png">
                        </div>
                    </div>
                </li>
            </ul>
        </my-body>
    </my-page>
</template>

<script>
    import MyBody from "../../components/layout/body";
    import MyHead from "../../components/layout/head";
    import MyFoot from "../../components/layout/foot";
    import MyPage from "../../components/layout/page";

    export default {
        //组件名字
        name: '',

        //引入子组件
        components: {MyPage, MyFoot, MyHead, MyBody},

        //接收父组件的传值
        props: {},

        //组件私有数据
        data() {
            return {
                fileUrl: this.config.fileUrl,//图片基地址
            }
        },

        //数据计算
        computed: {
            userInfo() {
                return this.$store.state.user.userInfo
            },
            identificationText() {
                let arr = {
                    0: '等待完善资料',
                    1: '等待审核',
                    2: '审核通过',
                    3: '审核未通过',
                    4: '违规禁用',
                }
                return arr[this.userInfo.status]
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
                self.api.getUserInfo()
                self.api.getUserBasicInfo()
            },
        },
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";

    .body {
        padding-bottom: rem(20);
    }

    .user-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: rem(185);
        box-sizing: border-box;
        padding: 0 rem(30);
        background-color: #fff;
    }

    .user-top__left {
        display: flex;
        align-items: center;
    }

    .user-top__portrait {
        width: rem(125);
        height: rem(125);
        border: solid 1px #e1e1e1;
        border-radius: 50%;
    }

    .user-top__name {
        padding-left: rem(30);
        font-size: rem(30);
        color: #000;
    }

    .user-top__preview {
        display: flex;
        justify-content: center;
        align-items: center;
        width: rem(170);
        height: rem(60);
        font-size: rem(24);
        color: #fff;
        background-color: #dec190;
        border-radius: rem(10);
    }

    .list {
        margin: rem(10) 0;
        background-color: #fff;
    }

    .list__li {
        display: flex;
        align-items: center;
        height: rem(88);
    }

    .list__icon {
        width: rem(35);
        margin: 0 rem(20) 0 rem(50);
    }

    .list__content {
        height: 100%;
        border-top: solid 1px #f5f5f5;
    }

    .list__label {
        font-size: rem(28);
        color: #333;
    }

    .list__span {
        font-size: rem(28);
        color: #333;
    }

    .list__span--yellow {
        color: #dec291;
    }

    .list__span--red {
        color: #f53531;
    }

    .list__router {
        width: rem(10);
        margin: 0 rem(50) 0 rem(20);
    }
</style>
