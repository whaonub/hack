<template>
    <my-page>
        <my-head></my-head>
        <my-body>
            <ul class="list mt-20">
                <li class="list__li">
                    <span class="list__title">成长值</span>
                    <span class="list__right">1999</span>
                </li>
                <li class="list__li">
                    <span class="list__title">星级</span>
                    <span class="list__right">{{userInfo.starLevel}}星</span>
                </li>
            </ul>
            <ul class="list mt-20">
                <li class="list__li" @click="routerJump('userStarLevelRecord')">
                    <span class="list__title">查看成长记录</span>
                    <div class="list__right">
                        <img class="list__arrows--right" src="../../assets/common/arrows_right.png" alt="">
                    </div>
                </li>
                <li class="list__li" @click="routerJump('userStarLevelRule')">
                    <span class="list__title">查看等级规则</span>
                    <div class="list__right">
                        <img class="list__arrows--right" src="../../assets/common/arrows_right.png" alt="">
                    </div>
                </li>
            </ul>
        </my-body>
    </my-page>
</template>

<script>
    import MyPage from "../../components/layout/page";
    import MyBody from "../../components/layout/body";
    import MyHead from "../../components/layout/head";

    export default {
        //组件名字
        name: '',

        //子组件引入
        components: {
            MyHead,
            MyBody,
            MyPage,
        },

        //组件私有数据
        data() {
            return {}
        },

        //计算属性
        computed: {
            userInfo() {
                return this.$store.state.user.userInfo
            }
        },

        //数据监听
        watch: {},

        //生命周期钩子：组件钩子函数
        created() {
            this.getUserInfo()
        },

        //生命周期钩子：组件渲染后调用
        mounted() {
        },

        //生命周期钩子：组件更新渲染后调用
        update() {
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
             * 获取用户信息
             */
            getUserInfo() {
                const self = this
                self.api.getUserBasicInfo()
            },
        },
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";

    .list {
        background-color: #fff;
    }

    .list__li {
        @include m-border(t);
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: rem(88);
        box-sizing: border-box;
        padding: 0 rem(30);
        font-size: rem(28);
        color: #333;
        &:first-child {
            @include m-border();
        }
    }

    .list__arrows--right {
        width: rem(10);
        height: rem(18);
    }
</style>
