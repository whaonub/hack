<template>
    <div>
        <jr-body>
            <jr-head slot="head"></jr-head>
            <div class="mb-20">
                <jr-cell-box class="mt-30">
                    <jr-cell label="服务地点：">
                        <div class="c-title">{{area.name}}</div>
                    </jr-cell>
                </jr-cell-box>
                <div v-for="item in list" :key="item.letter">
                    <div class="c-subtitle">{{item.letter}}</div>
                    <jr-cell-box>
                        <jr-cell v-for="val in item.list" :key="val.name" :label="val.name" @click.native="setCurrent(val)">
                            <img class="c-radio__icon" v-if="val.id == area.id" src="../../assets/icon/radio_current.png">
                        </jr-cell>
                    </jr-cell-box>
                </div>
            </div>
        </jr-body>
    </div>
</template>

<script>
    import JrBody from "../../components/layout/body";
    import JrHead from "../../components/layout/head";
    import JrCellBox from "../../components/cell/cellBox";
    import JrCell from "../../components/cell/cell";

    /*民族选择*/
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
            return {
                area: '',//当前选中地区
                list: [],//数据源
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
            let region = self.vuexRouter.region
            if (region) {
                self.area = region
            }
            self.getAreaList()
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
                self.area = value
                self.saveData()
                self.$router.back()
            },

            /**
             * 获取开发的地区
             */
            getAreaList() {
                const self = this
                self.api.getAreaList().then(res => {
                    self.list = res.data
                })
            },

            /**
             * 保存数据
             */
            saveData() {
                const self = this
                let vuexData = {}
                vuexData[self.$route.name] = self.area
                self.$store.commit('router/update', vuexData)
            },
        },
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";

    .c-title {
        width: rem(530);
        color: #1e1e1e;
        font-size: rem(32);
        font-weight: normal;
    }

    .c-subtitle {
        display: flex;
        align-items: center;
        height: rem(70);
        box-sizing: border-box;
        padding: 0 rem(24);
        color: rgba(30, 30, 30, 0.8);
        font-size: rem(32);
    }

    .c-radio__icon {
        width: rem(38);
        height: rem(38);
    }
</style>
