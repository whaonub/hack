<template>
    <div>
        <jr-body>
            <jr-head title="车辆信息" slot="head">
                <div slot="right" class="fz-32" @click="skip()">暂无车辆</div>
            </jr-head>
            <div>
                <!--<jr-cell-box-title title="车辆信息"></jr-cell-box-title>-->
                <jr-cell-box>
                    <jr-cell label="车型">
                        <div class="c-cell__right c-cell__right--space">
                            <input type="text" class="c-cell__verify-code" v-model="info.car" placeholder="输入车型">
                        </div>
                    </jr-cell>
                    <jr-cell label="可载人数">
                        <div class="c-cell__right c-cell__right--space">
                            <input type="text" class="c-cell__verify-code" v-model="info.carPeople" placeholder="可载人数">
                        </div>
                    </jr-cell>
                    <jr-cell label="车牌号">
                        <div class="c-cell__right c-cell__right--space">
                            <input type="text" class="c-cell__verify-code" v-model="info.carNo" placeholder="输入车牌号">
                        </div>
                    </jr-cell>
                    <jr-cell label="驾驶证号">
                        <div class="c-cell__right c-cell__right--space">
                            <input type="number" class="c-cell__verify-code" v-model="info.driverNo" placeholder="输入驾驶证号">
                        </div>
                    </jr-cell>
                </jr-cell-box>
                <div class="c-identity">
                    <div class="c-identity__title">
                        <div class="c-identity__left">驾驶证</div>
                        <div v-if="!disabled" class="c-identity__right">查看示例</div>
                    </div>
                    <div class="c-identity__img">
                        <div class="c-tour__left">
                            <jr-upload name="driverPic" :file-list="image.driverPic"
                                       @success="imgUpload" :disabled="disabled">
                                <img class="c-tour__img" src="../../assets/icon/register_guidecard.png" alt="">
                                <p class="c-tourCertificate">驾驶证</p>
                                <p class="c-state">CHINA TOUR DRIVER</p>
                                <p class="c-identity__p">点击上传驾驶证照片</p>
                            </jr-upload>
                        </div>
                    </div>
                </div>
                <div class="c-login">
                    <jr-button size="full" @click.native="next">完成</jr-button>
                </div>
            </div>
        </jr-body>
    </div>
</template>

<script>
    /*车辆*/
    import JrBody from "../../components/layout/body";
    import JrHead from "../../components/layout/head";
    import JrCell from "../../components/cell/cell";
    import JrCellBox from "../../components/cell/cellBox";
    import JrCellBoxTitle from "../../components/cell/cellBoxTitle";
    import JrButton from "../../components/base/button";
    import JrUpload from "../../components/upload/upload.vue";

    export default {
        //组件名字
        name: '',

        //引入子组件
        components: {
            JrUpload,
            JrButton,
            JrCellBoxTitle,
            JrCellBox,
            JrCell,
            JrHead,
            JrBody
        },

        //接收父组件的传值
        props: {},

        //组件私有数据
        data() {
            return {
                disabled: false,//是否禁止编辑
                image: {
                    driverPic: [],
                },//图片上传的临时存储
                info: {//车辆信息
                    type: 'car',//类型
                    car: '',//车型
                    carPeople: '',//载客数
                    carNo: '',//车牌号码
                    driverNo: '',//驾驶证号码
                },
            }
        },

        //数据计算
        computed: {
            vuexRouter() {
                return this.$store.state.router
            },
            userInfo() {
                return this.$store.state.user.userInfo
            },
        },

        //生命周期钩子：组件实例创建之后调用
        created() {
            const self = this
            if (self.vuexRouter[self.$route.name]) {
                //self.inf = self.vuexRouter[self.$route.name]
            } else {
                self.info.car = self.userInfo.info.car
                self.info.carPeople = self.userInfo.info.car_people
                self.info.carNo = self.userInfo.info.plate_no
                self.info.driverNo = self.userInfo.info.driver_no

                self.image.driverPic.push({
                    url: self.userInfo.info.driver
                })
            }
        },

        //生命周期钩子：组件实例渲染之后调用
        mounted() {
        },

        //数据监听
        watch: {},

        //自定义函数
        methods: {
            /**
             * 图片上传成功处理
             */
            imgUpload(file, files, config) {
                const self = this
                self.$set(self.image, config.name, files)
            },

            /**
             * 暂无车辆
             */
            skip() {
                const self = this
                self.$router.push({
                    name: 'index',
                })
            },

            /**
             * 下一步（跳转审核页面）
             */
            next() {
                const self = this
                self.info.driverPic = self.image.driverPic[0].url

                if (!self.info.car) {
                    self.fn.myMessage('请输入车型')
                } else if (!self.info.carPeople) {
                    self.fn.myMessage('请输入可载人数')
                } else if (!self.info.carNo) {
                    self.fn.myMessage('请输入车牌号')
                } else if (!self.info.driverNo) {
                    self.fn.myMessage('请输入驾驶证号')
                } else if (!self.info.driverPic) {
                    self.fn.myMessage('请上传驾驶证照片')
                } else {
                    self.api.setUserInfo(self.info).then(res => {
                        self.$router.push({
                            name: 'check'
                        })
                    })
                }
            },
        },
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";

    .c-cat__message {
        color: #1e1e1e;
        font-size: rem(32);
    }

    .c-cell__right {
        width: rem(500);
    }

    .c-cell__right--space {
        display: flex;
        border: 0;
        justify-content: flex-end;
        text-align: right;
    }

    .c-login {
        box-sizing: border-box;
        padding: rem(105) rem(24) 0;
    }

    .c-cell__verify-code {
        width: rem(500);
        height: 100%;
        color: rgba(30, 30, 30, 0.8);
        font-size: rem(32);
        border: none;
        text-align: right;
    }

    .c-identity {
        margin-top: rem(20);
        background: #fff;
        padding: 0 rem(24);
        padding-bottom: rem(50);
    }

    .c-identity__title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: rem(34);
    }

    .c-identity__left {
        color: #1e1e1e;
        font-size: rem(32);
    }

    .c-identity__right {
        color: rgba(30, 30, 30, 0.8);
        font-size: rem(26);
    }

    .c-identity__img {
        margin-top: rem(24);
        display: flex;
    }

    .c-tour__left {
        width: rem(320);
        height: rem(428);
        background-color: #f7f7f7;
        border: solid rem(1) #dedada;
        text-align: center;
    }

    .c-tour__img {
        width: rem(76);
        margin-top: rem(66);
    }

    .c-tourCertificate {
        color: rgba(30, 30, 30, 0.3);
        font-size: rem(28);
        margin-top: rem(21);
    }

    .c-state {
        color: rgba(30, 30, 30, 0.3);
        font-size: rem(21);
        margin-top: rem(15);
    }

    .c-identity__p {
        color: rgba(30, 30, 30, 0.3);
        font-size: rem(24);
    }
</style>
