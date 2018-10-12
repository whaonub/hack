<template>
    <div>
        <jr-body>
            <jr-head slot="head">
                <div slot="right" v-if="id" @click="setSpecStatic()">分享</div>
            </jr-head>
            <div class="mb-300" v-if="info">
                <div :class="{'c-height--show': specStatic}" class="c-pop__up">
                    <div @click="setSpecStatic()" class="c-shade"></div>
                    <div class="c-share">
                        <div class="c-share__top">
                            <p class="c-share__p">分享至:</p>
                            <ul class="c-share__ul">
                                <li class="c-share__li">
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
                <img class="c-cover" :src="fileUrl + info.img" alt="">
                <div class="mb-20 c-title">
                    <p class="c-introduce ">{{info.name}}</p>
                    <p class="c_price">￥{{info.price}}</p>
                    <p class="c-number">人数限制:{{info.people}}人</p>
                </div>
                <jr-cell-box class="mb-20">
                    <jr-cell label="服务地区">
                        <span>{{info.region_str}}</span>
                    </jr-cell>
                </jr-cell-box>
                <div class="c-picture mb-20">
                    <p class="c-picture__p">图片</p>
                    <div class="c-imageList">
                        <img style="object-fit: cover;" v-for="(item, key) in info.img_list" :key="key" :src="fileUrl + item" alt="">
                    </div>
                </div>
                <div class="c-datum mb-20">
                    <p class="c-datum__p">该行程导游信息</p>
                    <div class="c-datum__message">
                        <div class="c-content">
                            <img class="c-content__img" :src="fileUrl + info.leader.photo" alt="">
                            <div class="c-middle">
                                <span class="c-middle__span">{{info.leader.name}}</span>
                                <p class="c-middle__p">{{info.leader.region}}</p>
                            </div>
                        </div>
                        <div class="c-star">
                            <img v-for="(item, key) in info.leader.level" :key="10 * key" class="c-star__img" src="../../assets/icon/xingxing.png"
                                 alt="">
                        </div>
                    </div>
                    <div class="c-lab">
                        <p class="c-lab__p" v-for="(item, key) in info.leader.tags" :key="20 * key">{{item}}</p>
                    </div>
                </div>
                <div class="c-descriptive">
                    <mt-navbar v-model="selected">
                        <mt-tab-item :id="1">行程描述</mt-tab-item>
                        <mt-tab-item :id="2">须知</mt-tab-item>
                    </mt-navbar>
                    <!-- tab-container -->
                    <mt-tab-container v-model="selected" class="c-wenzi">
                        <mt-tab-container-item :id="1">
                            {{info.content}}
                        </mt-tab-container-item>
                        <mt-tab-container-item :id="2">
                            {{info.inform}}
                        </mt-tab-container-item>
                    </mt-tab-container>
                </div>

            </div>
        </jr-body>
    </div>
</template>

<script>
    import {Navbar, TabItem, TabContainer, TabContainerItem} from 'mint-ui';
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
            JrBody,
            MtNavbar: Navbar,
            MtTabItem: TabItem,
            MtTabContainer: TabContainer,
            MtTabContainerItem: TabContainerItem,
        },

        //接收父组件的传值
        props: {},

        //组件私有数据
        data() {
            return {
                fileUrl: this.config.fileUrl,
                selected: 1,//当前活动页
                specStatic: false,//分享显示状态
                info: '',//产品信息
                id: '',//产品id
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
                this.getProductDetail()
            } else {
                let product = self.vuexRouter.productIssue
                let info = product.info
                let imgList = []
                product.image.imgList.forEach(item => {
                    imgList.push(item.url)
                })
                self.info = {
                    leader: {
                        photo: self.userInfo.photo,
                        name: self.userInfo.info.true_name,
                        level: self.userInfo.level,
                    },
                    img: product.image.cover[0].url,
                    price: info.price,
                    people: info.peopleNo,
                    region_str: product.areaName,
                    img_list: imgList,
                    content: info.journey,
                    inform: info.notice,
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
             * 获取产品详情
             */
            getProductDetail() {
                const self = this
                self.api.getProductDetail({
                    id: self.$route.query.id
                }).then(res => {
                    self.info = res.data
                })
            },
        },
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";

    .mb-300 {
        margin-bottom: rem(300);
    }

    .c-header__bg {
        background-color: rgba(255, 255, 255, 0.4) !important;
        box-shadow: 0px 0px 0px 0px #eee9e7 !important;
    }

    .c-cover {
        display: block;
        width: 100%;
        height: rem(470);
        object-fit: cover;
    }

    .c-title {
        box-sizing: border-box;
        padding: 0 rem(24);
        background: #fff;
    }

    .c-introduce {
        padding-top: rem(30);
        color: #1e1e1e;
        font-size: rem(32);
        line-height: rem(40);
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }

    .c_price {
        padding: rem(30) 0 rem(20) 0;
        color: #fc957e;
        font-size: rem(34);
        line-height: rem(34);
    }

    .c-number {
        padding: rem(20) 0;
        color: rgba(30, 30, 30, 0.6);
        font-size: rem(28);
        line-height: rem(28);
        border-top: 1px solid #dedada;
    }

    .c-picture {
        padding: 0 0 0 rem(24);
        background: #fff;
    }

    .c-picture__p {
        padding-top: rem(36);
        color: #1e1e1e;
        font-size: rem(32);
    }

    .c-imageList {
        padding: rem(20) 0 rem(40) 0;
        line-height: rem(240);
        overflow-x: auto;
        overflow-y: hidden;
        height: rem(240);
        white-space: nowrap;
        img {
            width: rem(340);
            height: rem(240);
            margin-right: rem(10);
        }
    }

    .c-datum {
        padding: 0 rem(24);
        background: #fff;
    }

    .c-datum__p {
        padding-top: rem(36);
        color: #1e1e1e;
        font-size: rem(32);
    }

    .c-datum__message {
        display: flex;
        justify-content: space-between;
        margin-top: rem(30);
    }

    .c-content__img {
        width: rem(80);
        height: rem(80);
        border: solid 1px #dedada;
        border-radius: rem(80);
        margin-right: rem(20);
    }

    .c-content {
        display: flex;
    }

    .c-middle__span {
        color: #1e1e1e;
        font-size: rem(28);
        line-height: rem(28);
    }

    .c-middle__p {
        margin-top: rem(12);
        color: rgba(30, 30, 30, 0.6);
        font-size: rem(24);
        line-height: rem(24);
    }

    .c-lab {
        display: flex;
        padding: rem(40) 0;
    }

    .c-lab__p {
        padding: rem(8) rem(17);
        margin-right: rem(20);
        color: #ffffff;
        background-color: #fea38e;
        font-size: rem(24);
        border-radius: rem(8);
    }

    .c-star__img {
        margin-left: rem(10);
        height: rem(28);
    }

    .c-descriptive {
        box-sizing: border-box;
        padding: 0 rem(24);
        background: #fff;
        border-bottom: 1px solid #dedada;
    }

    .mint-navbar .mint-tab-item.is-selected {
        border-bottom: rem(4) solid #fc957e;
        color: #fc957e;
        font-size: rem(32);
        margin-bottom: -3px;
    }

    .mint-tab-container-item {
        -ms-flex-negative: 0;
        flex-shrink: 0;
        width: 100%;
        font-size: rem(28);
        color: rgba(30, 30, 30, 0.6);
    }

    .c-wenzi {
        margin-top: rem(30);
        padding-bottom: rem(44);
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
</style>
