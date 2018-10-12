<template>
    <jr-body>
        <jr-head slot="head"></jr-head>
        <div class="mb-20">
            <jr-cell-box>
                <jr-cell icon="system" label="系统消息" @click.native="goList('system')">
                    <div class="c-update">
                        <span v-if="info.system" class="c-update__span">{{info.system}}</span>
                        <img class="c-update__img" src="../../assets/icon/right.png" alt="">
                    </div>
                </jr-cell>
                <jr-cell icon="comment" label="评论消息" @click.native="goList('comment')">
                    <div class="c-update">
                        <span v-if="info.comment" class="c-update__span">{{info.comment}}</span>
                        <img class="c-update__img" src="../../assets/icon/right.png" alt="">
                    </div>
                </jr-cell>
                <jr-cell icon="indent" label="订单消息" @click.native="goList('order')">
                    <div class="c-update">
                        <span v-if="info.order" class="c-update__span">{{info.order}}</span>
                        <img class="c-update__img" src="../../assets/icon/right.png" alt="">
                    </div>
                </jr-cell>
            </jr-cell-box>
        </div>
    </jr-body>
</template>

<script>
    import JrBody from "../../components/layout/body";
    import JrHead from "../../components/layout/head";
    import JrCellBox from "../../components/cell/cellBox";
    import JrCell from "../../components/cell/cell";
    import JrFoot from "../../components/layout/foot";

    export default {
        //组件名字
        name: '',

        //引入子组件
        components: {
            JrFoot,
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
                info: {},//未读消息
            }
        },

        //数据计算
        computed: {},

        //生命周期钩子：组件实例创建之后调用
        created() {
            this.getNum()
        },

        //生命周期钩子：组件实例渲染之后调用
        mounted() {
        },

        //数据监听
        watch: {},

        //自定义函数
        methods: {
            /**
             * 获取未读消息
             */
            getNum() {
                const self = this
                self.api.getMessageNum().then(res => {
                    self.info = res.data
                })
            },

            /**
             * 跳转到消息列表
             */
            goList(type) {
                const self = this
                self.$router.push({
                    name: 'messageList',
                    query: {
                        type: type
                    }
                })
            },
        },
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";

    .c-update {
        display: flex;
    }

    .c-update__span {
        width: rem(70);
        height: rem(36);
        background-color: #fc957e;
        border-radius: rem(18);
        color: #ffffff;
        font-size: rem(24);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .c-update__img {
        height: rem(34);
        display: block;
        margin-left: rem(18);
    }
</style>
