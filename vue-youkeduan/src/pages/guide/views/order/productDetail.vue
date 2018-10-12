<template>
    <div>
        <jr-body :foot="true">
            <jr-head slot="head"></jr-head>
            <div>
                <!--点击弹框显示抢单状态-->
                <div :class="{'c-height--show': specStatic}" class="c-pop__up">
                    <div @click="setSpecStatic()" class="c-shade"></div>
                    <div class="c-state">
                        <p class="c-state__title">您已成功参与抢单</p>
                        <p class="c-state__text">抢单后不能参与出行时间一致的订单,带用户选择后,则在订单中心一带出行中显示</p>
                        <p class="c-state__choice" @click="setSpecStatic()">我知道了</p>
                    </div>
                </div>
                <!--点击弹框验证身份-->
                <div :class="{'c-height--show': verify}" class="c-pop__up">
                    <div @click="setVerify()" class="c-shade"></div>
                    <div class="c-state">
                        <p class="c-state__title">请输入身份证后六位</p>
                        <ul class="c-state__ul">
                            <li class="c-state__li">
                                <input class="c-state__input" type="password">
                            </li>
                            <li class="c-state__li">
                                <input class="c-state__input" type="password">
                            </li>
                            <li class="c-state__li">
                                <input class="c-state__input" type="password">
                            </li>
                            <li class="c-state__li">
                                <input class="c-state__input" type="password">
                            </li>
                            <li class="c-state__li">
                                <input class="c-state__input" type="password">
                            </li>
                            <li class="c-state__li">
                                <input class="c-state__input" type="password">
                            </li>
                        </ul>
                        <p class="c-state__choice" @click="setVerify()">
                            <span class="c-cancel">取消</span>
                            <span class="c-affirm">确认</span>
                        </p>
                    </div>
                </div>
                <div class="c-shelf">
                    <div class="c-message">
                        <p class="c-message__left">订单信息</p>
                        <p class="c-message__right">已支付</p>
                    </div>
                    <jr-cell-box>
                        <jr-cell label="订单编号" value="1234756799"></jr-cell>
                        <jr-cell label="来源" value="个人"></jr-cell>
                        <jr-cell label="订单类型" value="定制订单"></jr-cell>
                        <jr-cell label="下单时间" value="1217.05.13 12.00"></jr-cell>
                        <div class="c-remark">
                            <p class="c-remark__p">备注信息</p>
                            <p class="c-remark__content">这是备注</p>
                        </div>
                    </jr-cell-box>
                </div>
                <div class="c-shelf">
                    <div class="c-message">出行信息</div>
                    <jr-cell-box>
                        <jr-cell label="地区" value="昆明"></jr-cell>
                        <jr-cell label="出发日期" value="2018-01-01"></jr-cell>
                        <jr-cell label="成人" value="2"></jr-cell>
                        <jr-cell label="儿童" value="2"></jr-cell>
                        <div class="c-remark">
                            <p class="c-remark__p">服务</p>
                            <ul class="c-remark__ul">
                                <li class="c-remark__li">线路设计</li>
                                <li class="c-remark__li">待定酒店</li>
                                <li class="c-remark__li">待定机票</li>
                                <li class="c-remark__li">美食推荐</li>
                                <li class="c-remark__li">美食推荐</li>
                            </ul>
                        </div>
                    </jr-cell-box>
                </div>
                <jr-cell-box class="c-reward">
                    <jr-cell label="预计报酬" values="￥800"></jr-cell>
                </jr-cell-box>

                <!--未支付的底部样式-->
                <!--<jr-cell-box class="c-reward c-juli">
                    <jr-cell label="产品名称" value="丽江三日游"></jr-cell>
                    <jr-cell label="预计报酬" values="￥800"></jr-cell>
                </jr-cell-box>
                <div class="c-rob">
                    <p class="c-rob__p">不接此单</p>
                    <span  class="c-rob__span" @click="setSpecStatic()">接单</span>
                </div>-->

                <!--已支付的底部样式-->
                <div class="c-shelf">
                    <div class="c-message">支付信息</div>
                    <jr-cell-box>
                        <jr-cell label="支付方式" value="支付宝"></jr-cell>
                        <jr-cell label="支付流水号" value="66666666666666"></jr-cell>
                        <jr-cell label="支付时间" value="2018-01-02 12.33"></jr-cell>
                    </jr-cell-box>
                </div>
                <jr-cell-box class="c-reward c-juli">
                    <jr-cell label="产品名称" value="丽江三日游"></jr-cell>
                    <jr-cell label="预计报酬" values="￥800"></jr-cell>
                </jr-cell-box>
                <div class="c-rob">
                    <p class="c-rob__p">联系游客</p>
                    <span class="c-rob__span" @click="setVerify()">验证开始</span>
                </div>
            </div>
        </jr-body>
    </div>
</template>

<script>
    import JrBody from "../../components/layout/body.vue";
    import JrHead from "../../components/layout/head.vue";
    import JrCellBox from "../../components/cell/cellBox.vue";
    import JrCell from "../../components/cell/cell.vue";

    export default {
        //组件名字
        name: '',

        //引入子组件
        components: {
            JrCell,
            JrCellBox,
            JrHead,
            JrBody
        },

        //接收父组件的传值
        props: {},

        //组件私有数据
        data() {
            return {
                specStatic: false,//抢单显示状态
                verify: false,//验证身份
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
            setSpecStatic() {//改变抢单显示状态
                this.specStatic = !this.specStatic
            },
            setVerify() {//改变验证身份显示状态
                this.verify = !this.verify
            },
        },
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";

    .c-message {
        box-sizing: border-box;
        padding: rem(30) rem(24) rem(20) rem(24);
        color: #1e1e1e;
        font-size: rem(32);
        display: flex;
        justify-content: space-between;
    }

    .c-message__right {
        color: #fc957e;
        font-size: rem(32);
    }

    .c-remark {
        color: #1e1e1e;
        font-size: rem(32);
        border-top: 1px solid #dedada;
    }

    .c-remark__p {
        box-sizing: border-box;
        padding: rem(30) 0;
        border-bottom: 1px dashed #dedada;
    }

    .c-remark__content {
        box-sizing: border-box;
        padding: rem(30) 0;
        color: rgba(30, 30, 30, 0.6);
        font-size: rem(28);
    }

    .c-remark__ul {
        padding: rem(24) 0 rem(16) 0;
        display: flex;
        flex-wrap: wrap;
        box-shadow: 0px rem(2) rem(2) 0px #eee9e7;
    }

    .c-remark__li {
        width: rem(218);
        height: rem(66);
        background-color: #f7f7f7;
        border-radius: rem(8);
        color: #fea38e;
        font-size: rem(30);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 rem(24) rem(24) 0;
    }

    .c-reward {
        margin-top: rem(20);
    }

    .c-rob {
        width: 100%;
        height: rem(130);
        position: absolute;
        bottom: 0;
        left: 0;
        background: #fff;
        padding: rem(20) rem(24);
        display: flex;
        box-sizing: border-box;
        box-shadow: 0px 0px 2px 2px #eee9e7;
    }

    .c-rob__p {
        width: rem(340);
        height: rem(90);
        color: #fea38e;
        font-size: rem(35);
        background-color: #fff;
        border-radius: rem(8);
        display: flex;
        align-items: center;
        justify-content: center;
        border: solid 1px #fea38e;
        margin-right: rem(20);
    }

    .c-rob__span {
        width: rem(340);
        height: rem(90);
        color: #fff;
        font-size: rem(35);
        background-color: #fea38e;
        border-radius: rem(8);
        display: flex;
        align-items: center;
        justify-content: center;
        border: solid 1px #fea38e;
    }

    .c-contact {
        width: rem(218);
        height: rem(90);
        color: #fea38e;
        font-size: rem(35);
        background-color: #fff;
        border-radius: rem(8);
        display: flex;
        align-items: center;
        justify-content: center;
        border: solid 1px #fea38e;
        margin-right: rem(24);
    }

    .c-verify {
        width: rem(218);
        height: rem(90);
        color: #fea38e;
        font-size: rem(35);
        background-color: #fff;
        border-radius: rem(8);
        display: flex;
        align-items: center;
        justify-content: center;
        border: solid 1px #fea38e;
        margin-right: rem(24);
    }

    .c-uploading {
        width: rem(218);
        height: rem(90);
        color: #fff;
        font-size: rem(35);
        background-color: #fea38e;
        border-radius: rem(8);
        display: flex;
        align-items: center;
        justify-content: center;
        border: solid 1px #fea38e;
    }

    .c-height--show {
        display: block;
    }

    .c-pop__up {
        width: 100%;
        height: 100%;
        display: none;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 1000;
    }

    .c-height--show {
        display: block;
    }

    .c-shade {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .c-state {
        width: rem(580);
        position: absolute;
        top: rem(446);
        left: rem(85);
        background-color: #ffffff;
        border-radius: rem(8);
    }

    .c-state__title {
        color: #1e1e1e;
        font-size: rem(34);
        text-align: center;
        padding: rem(34) rem(30);
    }

    .c-state__ul {
        display: flex;
        margin-bottom: rem(53);
        padding-left: rem(65);
    }

    .c-state__li {
        width: rem(48);
        height: rem(48);
        margin-right: rem(30);
    }

    .c-state__input {
        width: rem(48);
        height: rem(48);
        background-color: #f7f7f7;
        border: solid 1px #dedada;
    }

    .c-state__text {
        color: rgba(30, 30, 30, 0.8);
        font-size: rem(28);
        padding: rem(0) rem(30) rem(30) rem(30);
    }

    .c-state__choice {
        width: 100%;
        height: rem(100);
        border-top: 1px solid #dedada;
        color: #fea38e;
        font-size: rem(34);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .c-cancel {
        width: 50%;
        height: rem(100);
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: 1px solid #dedada;
    }

    .c-affirm {
        width: 50%;
        height: rem(100);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .c-juli {
        margin-bottom: rem(219);
    }
</style>
