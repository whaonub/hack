<template>
    <div>
        <jr-body>
            <jr-head slot="head"></jr-head>
            <div class="mb-20">
                <div class="c-title">
                    <div class="c-title__left">

                    </div>
                    <div class="c-title__right">

                    </div>
                </div>
                <div class="c-product">
                    <div class="c-putaway">
                        <img class="c-putaway__img" src="../../assets/icon/shangjia.png" alt="">
                        <p class="c-putaway__p">上架</p>
                        <img class="c-product__img" src="../../assets/product/cp_cpfbyl_pic.png" alt="">
                    </div>
                    <div class="mlr-30">
                        <div class="c-travel mt-30">
                            <p class="c-site">都市丽人电视剧看了</p>
                            <p class="c-price">￥888</p>
                        </div>
                        <div class="c-introduce">
                            丹甫股份的发个非官方电饭锅电饭锅梵蒂冈梵蒂冈地方法规大地飞歌豆腐干豆腐豆腐干豆腐干豆腐发过的豆腐干豆腐豆腐刚发的饭店电饭锅豆腐干豆腐干豆腐
                        </div>
                        <ul class="c-status">
                            <li class="c-delete">
                                <jr-button size="delete">删除</jr-button>
                            </li>
                            <li class="c-edit">
                                <jr-button size="edit">修改</jr-button>
                            </li>
                            <router-link :to="{name: 'productDetails'}">
                                <li class="c-original">
                                    <jr-button size="original">详情</jr-button>
                                </li>
                            </router-link>
                        </ul>
                    </div>
                </div>
                <router-link :to="{name: 'productIssue'}">
                    <div class="c-add__product">
                        <jr-button size="full">
                            <img class="c-addSymbol" src="../../assets/icon/addSymbol.png" alt="">
                            <span>添加产品</span>
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

    export default {
        //组件名字
        name: '',

        //引入子组件
        components: {
            JrButton,
            JrHead,
            JrBody
        },

        //接收父组件的传值
        props: {},

        //组件私有数据
        data() {
            return {}
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
        methods: {},
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";

    .mlr-30 {
        margin: 0 rem(30);
    }

    .c-title {
        width: 100%;
        height: rem(100);
        background: #fff;
        display: flex;
        align-items: center;
    }

    .c-title__left {
        height: rem(100);
        border-bottom: rem(4) #fc957e solid;
        display: flex;
        align-items: center;
        margin-left: rem(81);
    }

    .c-product {
        margin: rem(30) rem(24) 0 rem(24);
        background: #fff;
        box-shadow: 0px 2px 2px 0px #eee9e7;
    }

    .c-putaway {
        position: relative;
    }

    .c-putaway__img {
        height: rem(82);
        position: absolute;
        top: 0;
        right: 0;
        transform: rotate(0deg);
    }

    .c-putaway__p {
        position: absolute;
        top: rem(8);
        right: rem(4);
        transform: rotate(49deg);
        color: #ffffff;
        font-size: rem(24);

    }

    .c-product__img {
        width: 100%;
        height: rem(340);
        display: block;
    }

    .c-travel {
        display: flex;
        justify-content: space-between;
        line-height: rem(32);
    }

    .c-site {
        color: #1e1e1e;
        font-size: rem(32);
    }

    .c-price {
        color: #fc957e;
        font-size: rem(32);
    }

    .c-introduce {
        margin-top: rem(20);
        line-height: rem(28);
        color: rgba(30, 30, 30, 0.8);
        font-size: rem(28);
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
    }

    .c-status {
        display: flex;
        margin-top: rem(32);
        padding-bottom: rem(40);
    }

    .c-delete {
        margin-right: rem(116);
    }

    .c-edit {
        margin-right: rem(22);
    }

    .c-add__product {
        position: absolute;
        bottom: rem(38);
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
