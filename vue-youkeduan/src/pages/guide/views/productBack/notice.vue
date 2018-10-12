<template>
    <jr-body>
        <jr-head slot="head">
            <div slot="right" class="fz-32" @click="save">保存</div>
        </jr-head>
        <div class="c-text">
            <textarea class="c-textarea" v-model="content" placeholder="输入产品费用须知说明" type="text"></textarea>
        </div>
    </jr-body>
</template>

<script>
    import JrBody from "../../components/layout/body.vue";
    import JrHead from "../../components/layout/head.vue";

    export default {
        //组件名字
        name: '',

        //引入子组件
        components: {
            JrHead,
            JrBody
        },

        //接收父组件的传值
        props: {},

        //组件私有数据
        data() {
            return {
                content: '',//内容
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
            let notice = self.vuexRouter.notice
            if (notice) {
                self.content = notice.content
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
             * 保存数据
             */
            saveData() {
                const self = this
                let vuexData = {}
                vuexData[self.$route.name] = {
                    content: self.content
                }
                self.$store.commit('router/update', vuexData)

            },

            /**
             * 保存
             */
            save() {
                const self = this
                self.saveData()
                self.$router.back()
            },
        },
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";

    .c-text {
        width: 100%;
        height: 100%;
        overflow: hidden;
        box-sizing: border-box;
        padding-top: rem(30);
    }

    .c-textarea {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: rem(30);
        resize: none;
        color: rgba(30, 30, 30, 0.4);
        font-size: rem(28);
        border: none;
        outline: none;
    }
</style>
