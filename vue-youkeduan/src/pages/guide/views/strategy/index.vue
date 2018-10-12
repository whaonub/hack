<template>
    <div>
        <jr-body>
            <jr-head slot="head"></jr-head>
            <div class="c-body__content">
                <m-refresh :down="down" :up="up">
                    <div>
                        <div class="c-content mt-20" v-for="(item, key) in list" :key="key">
                            <p class="c-title">{{item.title}}</p>
                            <div class="c-introduce">
                                <div>
                                    <img class="c-introduce__img" :src="fileUrl + item.img" alt="">
                                </div>
                                <div class="c-introduce__right">
                                    <div class="c-right__name">{{item.content}}</div>
                                    <ul class="c-right__ul">
                                        <li class="c-right__li">
                                            <img class="c-right__img" src="../../assets/icon/xiaoxi.png" alt="">
                                            <p class="c-right__p">{{item.comment_num}}</p>
                                        </li>
                                        <li class="c-right__li">
                                            <img class="c-right__img" src="../../assets/icon/xihuan.png" alt="">
                                            <p class="c-right__p">{{item.like_num}}</p>
                                        </li>
                                        <li class="c-right__li">
                                            <img class="c-right__img" src="../../assets/icon/dianzan.png" alt="">
                                            <p class="c-right__p">{{item.collect_num}}</p>
                                        </li>
                                    </ul>
                                    <div class="c-select">
                                        <router-link :to="{name: 'strategyIssue', query:{id:item.id}}">
                                            <p class="c-amend">修改</p>
                                        </router-link>
                                        <router-link :to="{name: 'strategyDetails', query:{id:item.id}}">
                                            <p class="c-particulars">详情</p>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </m-refresh>
                <router-link :to="{name: 'strategyIssue'}">
                    <div class="c-add__product">
                        <jr-button size="full">
                            <img class="c-addSymbol" src="../../assets/icon/addSymbol.png" alt="">
                            <span>添加攻略</span>
                        </jr-button>
                    </div>
                </router-link>
            </div>
        </jr-body>
    </div>
</template>

<script>
    import JrBody from "../../components/layout/body.vue";
    import JrHead from "../../components/layout/head.vue";
    import JrButton from "../../components/base/button.vue";
    import MRefresh from "../../components/refresh/refresh";

    export default {
        //组件名字
        name: '',

        //引入子组件
        components: {
            MRefresh,
            JrButton,
            JrHead,
            JrBody
        },

        //接收父组件的传值
        props: {},

        //组件私有数据
        data() {
            return {
                fileUrl: this.config.fileUrl,
                page: 1,//页码
                list: [],
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
                self.api.getStrategyList({
                    page: 1,
                    filter: self.filter
                }).then(res => {
                    self.list = res.data.data
                    obj.endDownLoading()
                }, err => {
                    obj.endDownLoading(true)
                })
            },

            /**
             * 上拉加载
             */
            up(obj) {
                const self = this
                self.api.getStrategyList({
                    page: self.page,
                }).then(res => {
                    self.page++
                    self.list = self.list.concat(res.data.data)

                    if (res.data.data.length <= 10) {
                        obj.endUpLoading(true)
                    } else {
                        obj.endUpLoading()
                    }
                }, () => {
                    obj.endUpLoading(true)
                })
            },

            /**
             * 获取产品列表
             */
            getList() {
                const self = this
                self.api.getStrategyList({
                    page: self.page,
                }).then(res => {
                    self.list = res.data.data
                })
            },
        },
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";

    .c-body__content {
        height: 100%;
        box-sizing: border-box;
        padding: 0 0 rem(130);
    }

    .c-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: rem(330);
        box-sizing: border-box;
        background: #fff;
        padding: 0 rem(24);
        box-shadow: 0px 2px 2px 0px #eee9e7;
    }

    .c-title {
        display: -webkit-box;
        color: #1e1e1e;
        font-size: rem(32);
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
    }

    .c-introduce {
        display: flex;
        align-items: center;
        margin-top: rem(24);
    }

    .c-introduce__img {
        display: block;
        width: rem(320);
        height: rem(200);
        object-fit: cover;
        border-radius: 8px;
        border: solid 1px #dedada;
    }

    .c-introduce__right {
        width: 100%;
        margin-left: rem(24);
    }

    .c-right__name {
        height: rem(80);
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        color: rgba(30, 30, 30, 0.8);
        font-size: rem(28);
    }

    .c-right__ul {
        display: flex;
        justify-content: space-between;
        margin-top: rem(20);
    }

    .c-right__li {
        display: flex;
        align-items: center;
    }

    .c-right__img {
        height: rem(28);
    }

    .c-right__p {
        color: rgba(30, 30, 30, 0.5);
        font-size: rem(28);
    }

    .c-select {
        display: flex;
        justify-content: space-between;
        margin-top: rem(10);
    }

    .c-amend {
        width: rem(168);
        height: rem(50);
        border-radius: rem(8);
        border: solid 1px #fea38e;
        background: #fff;
        color: #fea38e;
        font-size: rem(28);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .c-particulars {
        width: rem(168);
        height: rem(50);
        border-radius: rem(8);
        border: solid 1px #fea38e;
        background: #fea38e;
        color: #fff;
        font-size: rem(28);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .c-add__product {
        position: absolute;
        bottom: rem(20);
        left: rem(24);
        width: rem(702);
        height: rem(90);
        border-radius: rem(8);
        border: solid 1px #fea38e;
        background: #fff;
    }

    .c-but--full {
        color: #fea38e !important;
        background-color: #fff !important;
    }

    .c-addSymbol {
        height: rem(33);
        margin-right: rem(18);
    }
</style>
