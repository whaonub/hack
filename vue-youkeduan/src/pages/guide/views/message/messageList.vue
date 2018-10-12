<template>
    <jr-body>
        <jr-head slot="head"></jr-head>
        <m-refresh :down="dowm" :up="up">
            <jr-list-box>
                <jr-list v-for="(item, key) in list" :key="key" @click.native="goDetail(item)">
                    <div slot="left" class="c-list__left">
                        <p class="c-list__title omit">{{item.title}}</p>
                        <p class="c-list__time">{{item.update_time}}</p>
                    </div>
                    <div slot="right">
                        <p v-if="item.is_read == 0">未读</p>
                        <p v-else="">已读</p>
                    </div>
                </jr-list>
            </jr-list-box>
        </m-refresh>
    </jr-body>
</template>

<script>
    import JrBody from "../../components/layout/body";
    import JrHead from "../../components/layout/head";
    import MRefresh from "../../components/refresh/refresh";
    import JrListBox from "../../components/list/listBox";
    import JrList from "../../components/list/list";

    export default {
        //组件名字
        name: '',

        //引入子组件
        components: {JrList, JrListBox, MRefresh, JrHead, JrBody},

        //接收父组件的传值
        props: {},

        //组件私有数据
        data() {
            return {
                list: [],//消息列表
                page: 1,//页码
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
             * 下拉刷新
             */
            down(obj) {
                const self = this
                let type = self.$route.query.type
                self.api.getMessageList({
                    page: 1,
                    type: type
                }).then(res => {
                    self.list = res.data.data
                    obj.endDownLoading()
                }, () => {
                    obj.endDownLoading(true)
                })
            },

            /**
             * 上拉加载
             */
            up(obj) {
                const self = this
                let type = self.$route.query.type
                self.api.getMessageList({
                    page: self.page,
                    type: type
                }).then(res => {
                    self.list = self.list.concat(res.data.data)
                    if (res.data.data.length <= 10) {
                        obj.endUpLoading(true)
                    } else {
                        self.page++
                        obj.endUpLoading()
                    }
                }, () => {
                    obj.endUpLoading(true)
                })
            },

            /**
             * 跳转到消息详情
             */
            goDetail(info) {
                const self = this
                self.$router.push({
                    name: 'messageDetail',
                    query: {
                        id: info.id
                    },
                })
            },
        },
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";

    .c-list__title {
        height: rem(50);
        color: #1e1e1e;
        font-size: rem(32);
    }

    .c-list__time {
        color: rgba(30, 30, 30, 0.6);
        font-size: rem(28);
    }

    .c-list__left {
        display: flex;
        flex-direction: column;
        width: rem(600);
    }
</style>
