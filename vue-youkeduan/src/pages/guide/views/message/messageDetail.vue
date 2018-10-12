<template>
    <jr-body class="c-body">
        <jr-head slot="head"></jr-head>
        <div class="c-body__content">
            <p class="c-message__title">{{info.title}}</p>
            <p class="c-message__time">{{info.update_time}}</p>
            <div class="c-message__content" v-html="info.content"></div>
        </div>
    </jr-body>
</template>

<script>
    import JrBody from "../../components/layout/body";
    import JrHead from "../../components/layout/head";

    export default {
        //组件名字
        name: '',

        //引入子组件
        components: {JrHead, JrBody},

        //接收父组件的传值
        props: {},

        //组件私有数据
        data() {
            return {
                info: {},//消息详情
            }
        },

        //数据计算
        computed: {},

        //生命周期钩子：组件实例创建之后调用
        created() {
            this.getInfo()
        },

        //生命周期钩子：组件实例渲染之后调用
        mounted() {
        },

        //数据监听
        watch: {},

        //自定义函数
        methods: {
            getInfo() {
                const self = this
                let id = self.$route.query.id
                self.api.getMessageDetail({
                    id: id
                }).then(res => {
                    self.info = res.data

                    self.api.readMessage({
                        ids: [id]
                    })
                })
            },
        },
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";

    .c-body {
        padding-top: rem(20);
    }

    .c-body__content {
        height: 100%;
        box-sizing: border-box;
        padding: 0 rem(40);
        background-color: #fff;
    }

    .c-message__title {
        padding: rem(20) 0;
        color: #333;
        font-size: rem(38);
        line-height: 1.5;
    }

    .c-message__time {
        color: #999;
        font-size: rem(30);
    }

    .c-message__content {
        padding: rem(30) 0;
        color: #666;
        font-size: rem(32);
    }
</style>
