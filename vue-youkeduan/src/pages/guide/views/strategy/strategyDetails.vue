<template>
    <div>
        <jr-body>
            <jr-head slot="head">
                <div slot="right" v-if="id" @click="setSpecStatic()">分享</div>
            </jr-head>
            <div class="c-body__content">
                <!--分享弹框-->
                <div :class="{'c-height--show': specStatic}" class="c-pop__up">
                    <div @click="setSpecStatic()" class="c-shade"></div>
                    <div class="c-share">
                        <div class="c-share__top">
                            <p class="c-share__p">分享至:</p>
                            <ul class="c-share__ul">
                                <li class="c-share__li" @click="share">
                                    <img class="c-share__img" src="../../assets/icon/weixin.png" alt="">
                                    <div class="c-share__span">微信好友</div>
                                </li>
                                <li class="c-share__li">
                                    <img class="c-share__img" src="../../assets/icon/pengyouquan.png" alt="">
                                    <div class="c-share__span">朋友圈</div>
                                </li>
                                <li class="c-share__li">
                                    <img class="c-share__img" src="../../assets/icon/weibo.png" alt="">
                                    <div class="c-share__span">新浪微博</div>
                                </li>
                            </ul>
                        </div>
                        <div class="c-share__foot" @click="setSpecStatic()">取消</div>
                    </div>
                </div>
                <!--内容-->
                <m-refresh :up="up">
                    <div class="c-content">
                        <p class="c-title">{{info.title}}</p>
                        <div class="c-writer">
                            <p class="c-writer__p">发布者:{{info.author}}</p>
                            <span class="c-writer__span">{{info.update_time}}</span>
                        </div>
                        <div class="c-text">{{info.content}}</div>
                        <div>
                            <img class="c-img" v-for="(item, key) in info.img_list" :key="key" :src="fileUrl + item" alt="">
                        </div>
                    </div>
                    <ul class="c-acquire__ul">
                        <li class="c-acquire__li">
                            <img class="c-acquire__img" src="../../assets/icon/xiaoxi.png" alt="">
                            <p class="c-acquire__p">{{info['comment_num']}}</p>
                        </li>
                        <li class="c-acquire__li">
                            <img class="c-acquire__img" src="../../assets/icon/xihuan.png" alt="">
                            <p class="c-acquire__p">{{info['like_num']}}</p>
                        </li>
                        <li class="c-acquire__li">
                            <img class="c-acquire__img" src="../../assets/icon/dianzan.png" alt="">
                            <p class="c-acquire__p">{{info['collect_num']}}</p>
                        </li>
                    </ul>
                    <div class="c-comment">
                        <p class="c-comment__title">评论({{list.length}})</p>
                        <div class="c-have__box">
                            <div class="c-have" v-for="(item, key) in list" :key="key">
                                <div class="c-have__title">
                                    <p class="c-have__left">
                                        <img class="c-portrait" :src="fileUrl + item.photo" alt="">
                                        <span class="c-name">{{item.nickname}}</span>
                                    </p>
                                    <p lass="c-have__right">{{item.update_time}}</p>
                                </div>
                                <p class="c-have__text">{{item.comment}}</p>
                            </div>
                        </div>
                        <div class="c-no__comment" v-if="!list.length">
                            <img class="c-no__img" src="../../assets/icon/xiaoxi.png" alt="">
                            <p class="c-no__p">暂无消息</p>
                        </div>
                    </div>
                </m-refresh>
                <div class="c-needComment">
                    <input type="text" v-model="comment" class="c-needComment--input" placeholder="我要评论...">
                    <div class="c-publish" @click="addComment">发表</div>
                </div>
            </div>
        </jr-body>
    </div>
</template>

<script>
    import JrBody from "../../components/layout/body.vue";
    import JrHead from "../../components/layout/head.vue";
    import MRefresh from "../../components/refresh/refresh";

    export default {
        //组件名字
        name: '',

        //引入子组件
        components: {
            MRefresh,
            JrHead,
            JrBody,
        },

        //接收父组件的传值
        props: {},

        //组件私有数据
        data() {
            return {
                fileUrl: this.config.fileUrl,
                selected: '1',//当前活动页
                specStatic: false,//分享显示状态
                comment: '',//评论内容
                info: {},//详情信息
                list: [],//评论列表
                page: 1,//当前页码
                id: '',
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
            let id = self.id = self.$route.query.id
            if (id) {
                self.getInfo()
            } else {
                let strategy = self.vuexRouter.strategyIssue
                let info = strategy.info
                let imgList = []
                strategy.image.imgList.forEach(item => {
                    imgList.push(item.url)
                })

                self.info = {
                    title: info.title,
                    author: self.userInfo.info.true_name,
                    content: info.content,
                    img_list: imgList,
                    comment_num: 0,
                    collect_num: 0,
                    like_num: 0,
                }
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
             * 改变分享显示状态
             */
            setSpecStatic() {
                this.specStatic = !this.specStatic
            },

            /**
             * 分享
             */
            share() {
                const self = this
                self.plus.share().then(res => {
                    let msg = {
                        href: '',
                        title: self.info.title,
                        content: self.info.content,
                        thumbs: ['http://img3.3lian.com/2013/v10/4/87.jpg'],
                        pictures: ['http://img3.3lian.com/2013/v10/4/87.jpg'],
                        extra: {
                            scene: 'WXSceneSession'
                        }
                    }

                    res.weixin.send(msg, res => {
                    }, () => {
                    })
                })
            },

            /**
             * 获取详情
             */
            getInfo() {
                const self = this
                self.api.getStrategyDetails({
                    id: self.$route.query.id
                }).then(res => {
                    self.info = res.data
                })
            },

            /**
             * 发表评论
             */
            addComment() {
                const self = this
                let id = self.$route.query.id
                if (id) {
                    self.api.addStrategyComment({
                        id: id,
                        comment: self.comment
                    }).then(() => {
                        self.comment = '',
                            self.fn.myMessage('发表成功')
                    })
                } else {
                    self.fn.myMessage('预览模式下不可以发表评论')
                }
            },

            /**
             * 上拉加载
             */
            up(obj) {
                const self = this
                let id = self.$route.query.id
                if (id) {
                    self.api.strategyCommentList({
                        id: id,
                        page: self.page,
                    }).then(res => {
                        self.list = self.list.concat(res.data.data)
                        if (self.page == 1 && !res.data.data.length) {
                            obj.endUpLoading()
                        } else if (res.data.data.length <= 10) {
                            obj.endUpLoading(true)
                        } else {
                            self.page++
                            obj.endUpLoading()
                        }
                    }, () => {
                        obj.endUpLoading(true)
                    })
                } else {
                    obj.endUpLoading()
                }
            },
        },
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";

    .c-body__content {
        height: 100%;
        box-sizing: border-box;
        padding-bottom: rem(130);
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

    .c-share {
        position: absolute;
        bottom: 0;
        left: 0;
    }

    .c-share__top {
        width: rem(702);
        height: rem(280);
        background-color: #ffffff;
        border-radius: rem(8);
        margin-left: rem(24);
    }

    .c-share__p {
        color: #1e1e1e;
        font-size: rem(34);
        padding: rem(34) 0 0 rem(30);
    }

    .c-share__ul {
        display: flex;
        justify-content: space-around;
    }

    .c-share__img {
        display: block;
        padding-top: rem(50);
        margin: 0 auto;
        height: rem(66);
    }

    .c-share__span {
        margin-top: rem(10);
        color: rgba(30, 30, 30, 0.8);
        font-size: rem(24);
    }

    .c-share__foot {
        width: rem(702);
        height: rem(100);
        background-color: #ffffff;
        border-radius: rem(8);
        margin: rem(20) 0 rem(28) rem(24);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /*内容css*/
    .c-content {
        width: 100%;
        box-sizing: border-box;
        background: #fff;
        padding: 0 rem(24) rem(30) rem(24);
        border-bottom: 1px solid #dedada;
    }

    .c-title {
        padding-top: rem(33);
        color: #1e1e1e;
        font-size: rem(32);
        line-height: rem(32);
    }

    .c-writer {
        margin-top: rem(18);
        display: flex;
        line-height: rem(24);
    }

    .c-writer__p {
        margin-right: rem(40);
        color: rgba(30, 30, 30, 0.6);
        font-size: rem(24);
    }

    .c-writer__span {
        color: rgba(30, 30, 30, 0.4);
        font-size: rem(24);
    }

    .c-text {
        margin-top: rem(50);
        color: rgba(30, 30, 30, 0.8);
        font-size: rem(28);
        line-height: rem(42);
    }

    .c-img {
        width: 100%;
        display: block;
        margin-top: rem(20);
        height: rem(340);
        object-fit: cover;
        border-radius: rem(8);
    }

    .c-acquire__ul {
        display: flex;
        background: #fff;
        padding: rem(20) rem(24) rem(40) rem(24);
        box-shadow: 0px 2px 2px 0px rgba(222, 200, 195, 0.2);
    }

    .c-acquire__li {
        display: flex;
        align-items: center;
        margin-right: rem(70);
    }

    .c-acquire__img {
        height: rem(28);
    }

    .c-acquire__p {
        color: rgba(30, 30, 30, 0.6);
        font-size: rem(28);
        margin-left: rem(12);
    }

    .c-construction {
        box-sizing: border-box;
        padding: 0 rem(24);
    }

    .c-comment__title {
        margin: rem(30) rem(24) rem(20) rem(24);
    }

    .c-have__box {
        margin-bottom: rem(20);
    }

    .c-have {
        box-sizing: border-box;
        width: 100%;
        background: #fff;
        padding: rem(31) rem(24);
    }

    .c-have__title {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .c-have__left {
        display: flex;
        align-items: center;
    }

    .c-portrait {
        height: rem(68);
        border-radius: rem(136);
    }

    .c-name {
        margin-left: rem(20);
        display: block;
        color: #1e1e1e;
        font-size: rem(30);
    }

    .c-have__right {
        color: rgba(30, 30, 30, 0.8);
        font-size: rem(24);
    }

    .c-have__text {
        margin-top: rem(20);
        color: rgba(30, 30, 30, 0.8);
        font-size: rem(28);
    }

    .c-more {
        margin-top: rem(30);
        text-align: center;
        color: rgba(30, 30, 30, 0.6);
        font-size: rem(32);
    }

    .c-needComment {
        width: 100%;
        height: rem(130);
        background: #fff;
        position: absolute;
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        box-shadow: 2px 0px 0px 2px rgba(222, 200, 195, 0.2);
    }

    .c-needComment--input {
        box-sizing: border-box;
        width: rem(702);
        height: rem(90);
        padding: rem(0) rem(25);
        display: flex;
        align-items: center;
        justify-content: center;
        border: solid 1px #fea38e;
        border-radius: rem(8);
        margin-left: rem(24);
        color: rgba(30, 30, 30, 0.4);
        font-size: rem(32);
    }

    .c-no__comment {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: rem(120) 0;
    }

    .c-no__img {
        height: rem(33);
    }

    .c-no__p {
        color: rgba(30, 30, 30, 0.4);
        font-size: rem(32);
        margin-left: rem(14);
    }

    .c-publish {
        display: flex;
        justify-content: center;
        align-items: center;
        width: rem(160);
        height: rem(90);
        margin: 0 rem(20);
        color: #fff;
        font-size: rem(30);
        border-radius: rem(8);
        background-color: #fea38e;
    }
</style>
