<template>
    <jr-body>
        <jr-head slot="head"></jr-head>
        <div>
            <img class="c-img" src="../../assets/icon/checkLoser.png" alt="">
            <p class="c-check">审核失败</p>
            <div class="c-accomplish">这里要说明失败原因...</div>
            <div class="c-go__modification">
                <jr-button size="full" @click.native="goCheck">去修改</jr-button>
            </div>
            <div class="c-end">
                <p class="c-end__p">验证身份遇到问题？您可以</p>
                <a :href="'tel:' + serviceTell"><span class="c-end__span">联系客服</span></a>
            </div>
        </div>
    </jr-body>
</template>

<script>
    /*审核*/
    import JrBody from "../../components/layout/body";
    import JrHead from "../../components/layout/head";
    import JrCellBox from "../../components/cell/cellBox";
    import JrCell from "../../components/cell/cell";
    import JrButton from "../../components/base/button";

    export default {
        //组件名字
        name: '',

        //引入子组件
        components: {
            JrButton,
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
                serviceTell: '',//客服电话
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
             * 获取客服电话
             */
            getServiceTell() {
                const self = this
                self.api.getServiceTell().then(res => {
                    self.serviceTell = res.data.tel
                })
            },

            /**
             * 跳转到完善信息
             */
            goCheck() {
                this.$router.push({
                    name: 'perfectData',
                })
            },
        },
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";

    .c-img {
        height: rem(142);
        margin: 0 auto;
        display: block;
        margin-top: rem(71);
    }

    .c-check {
        text-align: center;
        color: #1e1e1e;
        font-size: rem(32);
        margin-top: rem(20);
    }

    .c-accomplish {
        text-align: center;
        color: rgba(30, 30, 30, 0.6);
        font-size: rem(30);
        margin-top: rem(80);
    }

    .c-go__modification {
        width: rem(702);
        position: absolute;
        left: rem(24);
        bottom: rem(93);
    }

    .c-end {
        position: absolute;
        bottom: rem(40);
        left: rem(179);
        display: flex;
        align-items: center;
    }

    .c-end__p {
        color: rgba(30, 30, 30, 0.6);
        font-size: rem(24);
    }

    .c-end__span {
        color: #fea38e;
        font-size: rem(24);
        margin-left: rem(9);
    }
</style>
