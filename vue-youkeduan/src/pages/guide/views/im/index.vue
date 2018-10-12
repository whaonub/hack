<template>
    <my-page :foot="true">
        <my-head :back="false"></my-head>
        <my-foot></my-foot>
        <my-body>
            <div ref="im" id="im" style="height: 100%; overflow: hidden; position: relative; z-index: 1000;">
                <iframe v-if="userName" :style="'width: 100%; overflow: hidden; border: none; height:' + height + 'px;'"
                        :src="'./static/im/index.html#/contact?username=' + userName"></iframe>
            </div>
        </my-body>
    </my-page>
</template>

<script>
    import cookie from 'js-cookie'
    import MyBody from "../../components/layout/body.vue";
    import MyHead from "../../components/layout/head.vue";
    import MyFoot from "../../components/layout/foot.vue";
    import MyPage from "../../components/layout/page";

    export default {
        //组件名字
        name: '',

        //引入子组件
        components: {
            MyPage,
            MyFoot,
            MyHead,
            MyBody
        },

        //接收父组件的传值
        props: {},

        //组件私有数据
        data() {
            return {
                userName: '',
                height: 0,
            }
        },

        //数据计算
        computed: {},

        //生命周期钩子：组件实例创建之后调用
        created() {
            const self = this
            //self.getToken()
        },

        //生命周期钩子：组件实例渲染之后调用
        mounted() {
            const self = this
            let height = self.$refs.im.clientHeight - 1
            self.height = height
        },

        //数据监听
        watch: {},

        //自定义函数
        methods: {
            /**
             * 获取环信的token
             */
            getToken() {
                const self = this
                self.api.getImToken().then(res => {
                    self.userName = res.data.user.username
                    cookie.set('web_im_' + res.data.user.username, res.data.token)
                })
            }
        },
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";
</style>
