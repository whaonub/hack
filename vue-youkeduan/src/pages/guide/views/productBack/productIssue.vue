<template>
    <jr-body>
        <jr-head :backFn="isSave" slot="head"></jr-head>
        <div class="mb-20">
            <!-- 弹框-->
            <div :class="{'c-height--show': specStatic}" class="c-pop__up">
                <div class="c-shade"></div>
                <div class="c-share">
                    <p class="c-share--title">未发布,确定要离开吗?</p>
                    <div class="c-choice">
                        <a class="choice__leave" @click="setSpecStatic(true)">离开</a>
                        <p class="choice__behind" @click="setSpecStatic()">留下</p>
                    </div>
                </div>
            </div>
            <jr-cell-box>
                <jr-cell>
                    <div class="c-headline">
                        <input type="text" class="c-headline__input" v-model="info.title" maxlength="20" placeholder="输入产品标题">
                        <p class="c-headline__p">
                            <span class="c-impose">{{info.title.length}}</span>
                            <span class="c-aggregate">/20</span>
                        </p>
                    </div>
                </jr-cell>
                <jr-cell>
                    <div class="c-headline">
                        <p class="c-price__icon">￥</p>
                        <input v-model="info.price" type="number" class="c-price__input" placeholder="输入产品价格">
                    </div>
                </jr-cell>
                <jr-cell label="人数限制">
                    <input type="number" v-model="info.peopleNo" placeholder="请输入人数" class="c-number">
                </jr-cell>
                <jr-cell label="选择地区" router="region" :routerFn="goSelect">
                    <p slot="text" class="omit">{{areaName || '请选择'}}</p>
                </jr-cell>
                <jr-cell label="行程描述" router="journey" :routerFn="goSelect">
                    <p slot="text" class="omit">{{info.journey || '请编编'}}</p>
                </jr-cell>
                <jr-cell label="须知" router="notice" :routerFn="goSelect">
                    <p slot="text" class="omit">{{info.notice || '请编编'}}</p>
                </jr-cell>
            </jr-cell-box>
            <div class="c-cover">
                <p class="c-cover__p">点击添加封面图片</p>
                <div class="c-centre">
                    <jr-upload name="cover" :fileList="image.cover" @success="imgUpload">
                        <div>
                            <img class="c-centre__img" src="../../assets/icon/shangpinzhao.png" alt="">
                            <p class="c-centre__p">点击上传</p>
                        </div>
                    </jr-upload>
                </div>
            </div>
            <div class="c-addContentT">
                <p class="c-addContentT__p">添加内容图片</p>
                <div class="c-sort">
                    <jr-upload :limit="9" name="imgList" :fileList="image.imgList" @success="imgUpload">
                        <img class="c-addContent__img" src="../../assets/icon/jiahao.png" alt="">
                    </jr-upload>
                </div>
            </div>
            <jr-cell-box class="mt-20">
                <jr-cell label="上下架" router="state" :routerFn="goSelect">{{state.label || '上架'}}</jr-cell>
            </jr-cell-box>
            <div class="c-finally">
                <div class="c-finally__left" @click="goDetail">预览</div>
                <div class="c-finally__right" @click="saveInfo">提交审核</div>
            </div>
        </div>
    </jr-body>
</template>

<script>
    import JrBody from "../../components/layout/body.vue";
    import JrHead from "../../components/layout/head.vue";
    import JrCellBox from "../../components/cell/cellBox.vue";
    import JrCell from "../../components/cell/cell.vue";
    import JrUpload from "../../components/upload/upload";

    export default {
        //组件名字
        name: '',

        //引入子组件
        components: {
            JrUpload,
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
                specStatic: false,//返回保存状态
                areaName: '',//地区名字
                state: {},//上架状态
                image: {},//图片临时信息
                info: {
                    title: '',//标题
                    price: '',//价格
                    peopleNo: '',//人数限制
                    areaId: '',//地区id
                    journey: '',//行程描述
                    notice: '',//须知
                    coverImage: '',//封面图
                    images: [],//产品图列表
                    status: '1',//上架状态
                },//产品信息
            }
        },

        //数据计算
        computed: {
            vuexRouter() {
                return this.$store.state.router
            },
        },

        //生命周期钩子：组件实例创建之后调用
        created() {
            const self = this
            let id = self.$route.query.id
            if (id) {
                self.getInfo()
            } else {
                self.initVuex()
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
             * 返回提示保存保存信息
             */
            isSave() {
                this.specStatic = true
            },

            /**
             * 返回保存状态
             */
            setSpecStatic(val) {
                const self = this
                self.specStatic = !this.specStatic
                if (val) {
                    self.removeData()
                    self.$router.back()
                }
            },

            /**
             * 图片上传成功处理
             */
            imgUpload(file, files, config) {
                const self = this
                self.$set(self.image, config.name, files)
            },

            /**
             * 初始化vuex
             */
            initVuex() {
                const self = this
                let productIssue = self.vuexRouter.productIssue
                let region = self.vuexRouter.region
                let journey = self.vuexRouter.journey
                let notice = self.vuexRouter.notice
                let state = self.vuexRouter.state

                if (productIssue) {
                    self.info = productIssue.info
                    if (productIssue.image) {
                        self.image = productIssue.image
                    }
                }

                if (region) {
                    self.info.areaId = region.id
                    self.areaName = region.name
                } else {
                    self.$store.commit('router/update', {
                        region: {
                            id: self.info.areaId,
                            name: self.areaName,
                        }
                    })
                }

                if (journey) {
                    self.info.journey = journey.content
                } else {
                    self.$store.commit('router/update', {
                        journey: {
                            content: self.info.journey
                        }
                    })
                }

                if (notice) {
                    self.info.notice = notice.content
                } else {
                    self.$store.commit('router/update', {
                        notice: {
                            content: self.info.notice
                        }
                    })
                }

                if (state) {
                    self.state = state
                    self.info.state = state.value
                } else {
                    self.$store.commit('router/update', {
                        state: {
                            value: self.info.status
                        }
                    })
                }
            },

            /**
             * 保存数据
             */
            saveData() {
                const self = this
                let vuexData = {}
                vuexData[self.$route.name] = {
                    info: self.info,
                    image: self.image,
                    areaName: self.areaName,
                }
                self.$store.commit('router/update', vuexData)
            },

            /**
             * 删除数据
             */
            removeData() {
                const self = this
                self.$store.commit('router/remove', ['journey', 'notice', 'region', 'state', 'productIssue'])
            },

            /**
             * 页面跳转编辑
             */
            goSelect(router) {
                const self = this
                self.saveData()
                self.$router.push({
                    name: router
                })
            },

            /**
             * 获取详情
             */
            getInfo() {
                const self = this
                let id = self.$route.query.id
                if (id) {
                    self.api.getProductDetail({
                        id: id
                    }).then(res => {
                        self.info.title = res.data.name
                        self.info.price = parseInt(res.data.price)
                        self.info.peopleNo = res.data.people
                        self.info.journey = res.data.content
                        self.info.notice = res.data.inform
                        self.info.status = res.data.state
                        self.info.areaId = res.data.region_id

                        self.areaName = res.data.region_str
                        self.state.label = res.data.state == 1 ? '上架' : '下架'
                        self.image.cover = [
                            {
                                url: res.data.img
                            }
                        ]
                        self.image.imgList = []
                        res.data['img_list'].forEach(item => {
                            self.image.imgList.push({
                                url: item
                            })
                        })

                        self.initVuex()
                    })
                }
            },

            /**
             * 预览
             */
            goDetail() {
                const self = this
                if (!self.info.title) {
                    self.fn.myMessage('请输入产品标题')
                } else if (!self.info.price) {
                    self.fn.myMessage('请输入产品价格')
                } else if (!self.info.peopleNo) {
                    self.fn.myMessage('请输入人数限制')
                } else if (!self.info.areaId) {
                    self.fn.myMessage('请选择地区')
                } else if (!self.info.journey) {
                    self.fn.myMessage('请编辑行程描述')
                } else if (!self.info.notice) {
                    self.fn.myMessage('请编辑须知')
                } else if (!self.image.cover || !self.image.cover.length) {
                    self.fn.myMessage('请上传封面图片')
                } else if (!self.image.imgList || !self.image.imgList.length) {
                    self.fn.myMessage('请上传内容图片')
                } else {
                    self.saveData()
                    self.$router.push({
                        name: 'productDetails'
                    })
                }
            },

            /**
             * 提交审核
             */
            saveInfo() {
                const self = this
                let id = self.$route.query.id
                if (!self.info.title) {
                    self.fn.myMessage('请输入产品标题')
                } else if (!self.info.price) {
                    self.fn.myMessage('请输入产品价格')
                } else if (!self.info.peopleNo) {
                    self.fn.myMessage('请输入人数限制')
                } else if (!self.info.areaId) {
                    self.fn.myMessage('请选择地区')
                } else if (!self.info.journey) {
                    self.fn.myMessage('请编辑行程描述')
                } else if (!self.info.notice) {
                    self.fn.myMessage('请编辑须知')
                } else if (!self.image.cover || !self.image.cover.length) {
                    self.fn.myMessage('请上传封面图片')
                } else if (!self.image.imgList || !self.image.imgList.length) {
                    self.fn.myMessage('请上传内容图片')
                } else {
                    self.info.coverImage = self.image.cover[0].url
                    self.image.imgList.forEach(item => {
                        self.info.images.push(item.url)
                    })

                    if (id) {
                        self.info.id = id
                        self.api.editProduct(self.info).then(res => {
                            self.fn.myMessage('提交成功，等待审核')
                            self.$router.back()
                        })
                    } else {
                        self.api.addProduct(self.info).then(res => {
                            self.fn.myMessage('提交成功，等待审核')
                            self.$router.back()
                        })
                    }
                }
            },
        },
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";

    .mt-20 {
        margin-top: rem(20);
    }

    .c-headline {
        width: 100%;
        height: rem(100);
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;
    }

    .c-headline__input {
        width: rem(632);
        height: rem(100);
        border: none;
        color: #1e1e1e;
        font-size: rem(32);
    }

    .c-headline__p {
        display: flex;
        font-size: rem(28);
    }

    .c-price__input {
        width: 100%;
        height: rem(100);
        border: none;
        color: #1e1e1e;
        font-size: rem(32);
        margin-right: rem(425);
    }

    .c-impose {
        color: #fea38e;
    }

    .c-aggregate {
        color: rgba(30, 30, 30, 0.4);
    }

    .c-price__icon {
        color: #1e1e1e;
        font-size: rem(32);
        margin-right: rem(12);
    }

    .c-cover {
        margin-top: rem(20);
        width: 100%;
        height: rem(467);
        padding: 0 rem(24);
        background: #fff;
        border: solid 1px #dedada;
        box-sizing: border-box;
        box-shadow: 0px 2px 2px 0px #eee9e7;
    }

    .c-cover__p {
        color: rgba(30, 30, 30, 0.4);
        font-size: rem(32);
        padding-top: rem(36);
        line-height: rem(32);
    }

    .c-centre {
        width: rem(702);
        height: rem(340);
        text-align: center;
        background-color: #f7f7f7;
        margin-top: rem(20);
        position: relative;
        z-index: 999;
        border: solid 1px #dedada;
    }

    .c-centre__input {
        width: rem(702);
        height: rem(340);
        position: absolute;
        top: 0;
        left: 0;
        border: 0;
        opacity: 0;
    }

    .c-centre__img {
        height: rem(54);
        margin-top: rem(135);
    }

    .c-centre__p {
        color: rgba(30, 30, 30, 0.3);
        font-size: rem(24);
        line-height: rem(24);
    }

    .c-addContentT {
        box-sizing: border-box;
        padding: 0 rem(24);
        background: #fff;
        margin-top: rem(20);
        box-shadow: 0px 2px 2px 0px #eee9e7;
    }

    .c-addContentT__p {
        color: rgba(30, 30, 30, 0.4);
        font-size: rem(32);
        padding-top: rem(36);
        padding-bottom: rem(20);
        line-height: rem(32);
    }

    .c-addContent {
        width: rem(218);
        height: rem(218);
        background-color: #f7f7f7;
        border: solid 1px #dedada;
        position: relative;
        margin-right: rem(20);
        margin-bottom: rem(20);
    }

    .c-addContent :nth-child(2n) {
        margin-right: 0px;
    }

    .c-sort {
        display: flex;
        flex-wrap: wrap;
    }

    .c-addContent__input {
        width: rem(218);
        height: rem(218);
        border: 0;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
    }

    .c-addContent__img {
        width: rem(66);
        height: rem(66);
    }

    .c-finally {
        display: flex;
        margin-top: rem(60);
        margin-bottom: rem(140);
    }

    .c-finally__left {
        width: rem(340);
        height: rem(90);
        border-radius: rem(8);
        border: solid 1px #fea38e;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: rem(24);
        color: #fea38e;
        font-size: rem(36);
    }

    .c-finally__right {
        width: rem(340);
        height: rem(90);
        border-radius: rem(8);
        background-color: #fea38e;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: rem(22);
        color: #ffffff;
        font-size: rem(36);
    }

    .c-number {
        text-align: right;
        border: 0;
        color: rgba(30, 30, 30, 0.8);
        font-size: rem(32);
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
        width: rem(580);
        height: rem(209);
        top: rem(442);
        left: rem(85);
        background: #fff;
        border-radius: rem(8);
    }

    .c-share--title {
        box-sizing: border-box;
        padding: rem(35) 0;
        color: #1e1e1e;
        font-size: rem(34);
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #dedada;
    }

    .c-choice {
        display: flex;
        color: #fea38e;
        font-size: rem(34);
    }

    .choice__leave {
        width: rem(290);
        height: rem(87);
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: 1px solid #dedada;
    }

    .choice__behind {
        width: rem(290);
        height: rem(87);
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
