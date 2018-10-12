<template>
    <div>
        <jr-body>
            <jr-head slot="head"></jr-head>
            <div>
                <jr-cell-box>
                    <jr-cell label="行程描述" valueGray="请编辑" router="journey"></jr-cell>
                </jr-cell-box>
                <div class="c-addContentT">
                    <p class="c-addContentT__p">添加内容图片</p>
                    <div class="c-sort">
                        <div class="c-addContent">
                            <input class="c-addContent__input" type="text">
                            <img class="c-addContent__img" src="../../assets/icon/jiahao.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="c-finally">
                    <router-link :to="{name: 'preview'}">
                        <div class="c-finally__left">预览</div>
                    </router-link>
                    <div class="c-finally__right">发布</div>
                </div>
            </div>
        </jr-body>
    </div>
</template>

<script>
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
        display: flex;
        margin-left: rem(76);
        margin-top: rem(76);
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
</style>
