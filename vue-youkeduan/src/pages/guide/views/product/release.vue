<template>
    <my-page class="page">
        <my-head></my-head>
        <div class="search">
            <div class="search__content">
                <input class="search__input" type="text" placeholder="关键字搜索">
                <img class="search__img" src="../../assets/product/search.png">
            </div>
        </div>
        <my-body>
            <ul class="product">
                <li class="product__li" v-for="(item, key) in list" :key="key">
                    <div class="product__left">
                        <img class="product__img" :src="fileUrl + item.logo" alt="">
                    </div>
                    <div class="product__right">
                        <p class="product__title">{{item.title}}</p>
                        <div class="product__row">
                            <span class="product__label">说明：</span>
                            <p class="product__value">{{item.desc}}</p>
                        </div>
                        <div class="product__row">
                            <span class="product__label">地址：</span>
                            <p class="product__value">{{item.address}}</p>
                        </div>
                        <div class="product__row">
                            <span class="product__label">现价：</span>
                            <p class="product__value">¥{{item.currentPrice}}</p>
                            <span class="product__label product__label--ml30">原价：</span>
                            <p class="product__value">¥15</p>
                        </div>
                        <div class="product__tags">
                            <p class="product__tag">餐饮</p>
                            <p class="product__tag">娱乐</p>
                        </div>
                    </div>
                    <div class="product__btn">下架</div>
                </li>
            </ul>
        </my-body>
    </my-page>
</template>

<script>
    import MyPage from "../../components/layout/page";
    import MyHead from "../../components/layout/head";
    import MyBody from "../../components/layout/body";

    export default {
        //组件名字
        name: '',

        //引入子组件
        components: {MyBody, MyHead, MyPage},

        //接收父组件的传值
        props: {},

        //组件私有数据
        data() {
            return {
                fileUrl: this.config.fileUrl,
                list: [],
            }
        },

        //数据计算
        computed: {},

        //数据监听
        watch: {},

        //生命周期钩子：组件实例创建之后调用
        created() {
            this.getList()
        },

        //生命周期钩子：组件实例渲染之后调用
        mounted() {
        },

        //自定义函数
        methods: {
            /**
             * 路由跳转
             * @param config
             */
            routerJump(name, query = {}) {
                const self = this
                self.$router.push({
                    name: name,
                    query: query,
                })
            },

            /**
             * 获取产品列表
             */
            getList() {
                const self = this
                self.api.getReleaseProductList().then(res => {
                    self.list = res.data
                })
            },
        },
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";

    .page {
        padding-top: rem(176) !important;
    }

    .search {
        position: absolute;
        top: rem(88);
        left: 0;
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: rem(88);
        box-sizing: border-box;
        padding: 0 rem(30);
        background-color: #fff;
    }

    .search__content {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: rem(690);
        height: rem(60);
        box-sizing: border-box;
        padding: 0 rem(20);
        border-radius: rem(6);
        background-color: #f3f3f3;
        &:before {
            content: '';
            position: absolute;
            top: rem(6);
            bottom: rem(6);
            right: rem(95);
            z-index: 1;
            width: 1px;
            background-color: #999999;
        }
    }

    .search__input {
        width: rem(555);
        height: 100%;
        border: none;
        background-color: #f3f3f3;
    }

    .search__img {
        width: rem(28);
        height: rem(28);
        margin-right: rem(15);
    }

    .product {
        padding-top: rem(20);
    }

    .product__li {
        position: relative;
        display: flex;
        height: rem(240);
        box-sizing: border-box;
        margin-bottom: rem(20);
        padding: rem(30);
        background-color: #fff;
    }

    .product__left {
        width: rem(180);
        height: rem(180);
    }

    .product__right {
        margin-left: rem(30);
    }

    .product__title {
        font-size: rem(24);
        color: #000;
    }

    .product__row {
        display: flex;
        align-items: center;
    }

    .product__label {
        font-size: rem(20);
        color: #000;
    }

    .product__label--ml30 {
        margin-left: rem(30);
    }

    .product__value {
        font-size: rem(20);
        color: #999;
    }

    .product__tags {
        display: flex;
        align-items: center;
        margin-top: rem(10);
    }

    .product__tag {
        display: flex;
        justify-content: center;
        align-items: center;
        height: rem(34);
        padding: 0 rem(10);
        margin-right: rem(20);
        font-size: rem(22);
        color: #ffa492;
        border-radius: rem(4);
        border: solid 1px #ffa492;
    }

    .product__btn {
        position: absolute;
        bottom: rem(30);
        right: rem(30);
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        width: rem(124);
        height: rem(54);
        font-size: rem(22);
        color: #fff;
        border-radius: rem(4);
        background-color: #dec190;
    }
</style>
