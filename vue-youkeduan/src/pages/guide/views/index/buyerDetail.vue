<template>
    <div>
        <jr-body>
            <jr-head slot="head"></jr-head>
            <div>
                <!--点击弹框显示抢单状态-->
                <div :class="{'c-height--show': specStatic}" class="c-pop__up">
                    <div @click="setSpecStatic(true)" class="c-shade"></div>
                    <div class="c-state">
                        <p class="c-state__title">您已成功参与抢单</p>
                        <p class="c-state__text">抢单后不能参与出行时间一致的订单,带用户选择后,则在订单中心一带出行中显示</p>
                        <p class="c-state__choice" @click="setSpecStatic(true)">我知道了</p>
                    </div>
                </div>
                <div class="c-shelf">
                    <div class="c-message">订单信息</div>
                    <jr-cell-box>
                        <jr-cell label="订单编号">{{info.order_no}}</jr-cell>
                        <jr-cell label="来源">{{info.from == 1 ? '游客' : '旅行社'}}</jr-cell>
                        <jr-cell label="订单类型"></jr-cell>
                        <jr-cell label="下单时间">{{info.create_time}}</jr-cell>
                        <div class="c-remark">
                            <p class="c-remark__p">备注信息</p>
                            <p class="c-remark__content">{{info.remark}}</p>
                        </div>
                    </jr-cell-box>
                </div>
                <div class="c-shelf">
                    <div class="c-message">出行信息</div>
                    <jr-cell-box>
                        <jr-cell label="地区">{{info.region}}</jr-cell>
                        <jr-cell label="出发日期">{{info.start_time}}</jr-cell>
                        <jr-cell label="成人">{{info.adult_num}}</jr-cell>
                        <jr-cell label="儿童">{{info.children_num}}</jr-cell>
                        <div class="c-remark">
                            <p class="c-remark__p">服务</p>
                            <ul class="c-remark__ul">
                                <li class="c-remark__li" v-for="(item, key) in info.snap_items" :key="key">{{item}}</li>
                            </ul>
                        </div>
                    </jr-cell-box>
                </div>
                <jr-cell-box class="c-reward">
                    <jr-cell label="预计报酬">￥{{info.leader_money}}</jr-cell>
                </jr-cell-box>
                <div class="c-rob" @click="setSpecStatic()">
                    <p class="c-rob__p">抢单</p>
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
                info: {},//订单信息
            }
        },

        //数据计算
        computed: {},

        //生命周期钩子：组件实例创建之后调用
        created() {
            const self = this
            let id = self.$route.query.id
            self.api.getHomeDetail({
                id: id
            }).then(res => {
                self.info = res.data
            })
        },

        //生命周期钩子：组件实例渲染之后调用
        mounted() {
        },

        //数据监听
        watch: {},

        //自定义函数
        methods: {
            /**
             * 改变抢单显示状态
             */
            setSpecStatic(val) {
                const self = this
                self.specStatic = !this.specStatic
                if (val) {
                    self.grabOrder()
                    self.$router.back()
                }
            },

            /**
             * 抢单处理
             */
            grabOrder() {
                const self = this
                let id = self.$route.query.id
                self.api.grabOrder({
                    id: id
                }).then(res => {
                    self.fn.myMessage('抢单成功')
                })
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
        margin-bottom: rem(310);
    }

    .c-rob {
        width: 100%;
        height: rem(130);
        position: absolute;
        bottom: 0;
        left: 0;
        background: #fff;
        padding: rem(20) rem(24);
        box-sizing: border-box;
        box-shadow: 0px 0px 2px 2px #eee9e7;
    }

    .c-rob__p {
        width: rem(702);
        height: rem(90);
        color: #ffffff;
        font-size: rem(35);
        background-color: #fea38e;
        border-radius: rem(8);
        display: flex;
        align-items: center;
        justify-content: center;
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
</style>
