<template>
    <ul class="c-foot">
        <li class="c-foot__li" @click="setNav(1, 'index')">
            <img class="c-foot__icon" v-if="currentNav == 1" src="../assets/nav/order_active.png" alt="">
            <img class="c-foot__icon" v-else="" src="../assets/nav/order.png" alt="">
            <p class="c-foot__text" :class="{'c-foot__text--current': currentNav == 1}">订单</p>
        </li>
        <li class="c-foot__li" @click="setNav(2,'order')">
            <img class="c-foot__icon" v-if="currentNav == 2" src="../assets/nav/issue_active.png" alt="">
            <img class="c-foot__icon" v-else="" src="../assets/nav/issue.png" alt="">
            <p class="c-foot__text" :class="{'c-foot__text--current': currentNav == 2}">发布</p>
        </li>
        <li class="c-foot__li" @click="setNav(3,'im')">
            <img class="c-foot__icon" v-if="currentNav == 3" src="../assets/nav/message_active.png" alt="">
            <img class="c-foot__icon" v-else="" src="../assets/nav/message.png" alt="">
            <p class="c-foot__text" :class="{'c-foot__text--current': currentNav == 3}">会话</p>
        </li>
        <li class="c-foot__li" @click="setNav(4, 'user')">
            <img class="c-foot__icon" v-if="currentNav == 4" src="../assets/nav/mine_active.png" alt="">
            <img class="c-foot__icon" v-else="" src="../assets/nav/mine.png" alt="">
            <p class="c-foot__text" :class="{'c-foot__text--current': currentNav == 4}">我的</p>
        </li>
    </ul>
</template>

<script>
    export default {
        //组件名字
        name: 'my-foot',

        //引入子组件
        components: {},

        //接收父组件的传值
        props: {},

        //组件私有数据
        data() {
            return {}
        },

        //数据计算
        computed: {
            currentNav() {
                return this.$store.state.common.currentNav
            },
        },

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
             * 设置导航
             * @param val
             */
            setNav(val, name = null) {
                const self = this
                self.$store.commit('common/update', {
                    currentNav: val
                })
//                if(val == 3){
//                    window.location.href = 'im/index.html'
//                }else {
                self.$router.push({
                    name: name,
                })
//                }
            },
        },
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";

    .c-foot {
        @include m-border(t);
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 999;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: rem(100);
        background-color: #fff;
    }

    .c-foot__li {
        display: flex;
        flex-direction: column;
    }

    .c-foot__icon {
        height: rem(45);
    }

    .c-foot__text {
        margin-top: rem(5);
        color: rgba(30, 30, 30, 0.6);
        font-size: rem(22);
    }

    .c-foot__text--current {
        color: #dec291;
    }
</style>
