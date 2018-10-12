<template>
    <jr-body>
        <jr-head slot="head"></jr-head>
        <div>
            <jr-cell-box>
                <jr-cell v-for="val in list" :key="val.label" :label="val.label" @click.native="setCurrent(val)">
                    <img class="c-radio__icon" v-if="val.value == status.value" src="../../assets/icon/radio_current.png">
                </jr-cell>
            </jr-cell-box>
        </div>
    </jr-body>
</template>

<script>
    /*语言选择*/
    import JrBody from "../../components/layout/body";
    import JrHead from "../../components/layout/head";
    import JrCellBox from "../../components/cell/cellBox";
    import JrCell from "../../components/cell/cell";

    export default {
        //组件名字
        name: '',

        //引入子组件
        components: {
            JrCell, JrCellBox, JrHead, JrBody
        },

        //接收父组件的传值
        props: {},

        //组件私有数据
        data() {
            return {
                list: [
                    {
                        label: '上架',
                        value: '1'
                    },
                    {
                        label: '下架',
                        value: '0'
                    }
                ],
                current: '',//当前选中的值
                status: {},//当前选中的状态
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
            let state = self.vuexRouter.state
            if (state) {
                self.status = state
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
             * 修改当前选中的值
             * @param value
             */
            setCurrent(value) {
                const self = this
                self.current = value.value
                self.status = value
                self.saveData()
                self.$router.back()
            },

            /**
             * 保存数据
             */
            saveData() {
                const self = this
                let vuexData = {}
                vuexData[self.$route.name] = self.status
                self.$store.commit('router/update', vuexData)
            },
        },
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";

    .c-radio__icon {
        width: rem(38);
        height: rem(38);
    }
</style>
