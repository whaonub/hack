<template>
    <my-page>
        <my-head></my-head>
        <my-body>
            <ul class="list">
                <li class="list__li">
                    <div class="list__title">驾驶证号</div>
                    <input v-model="vehicle.drivingNum" class="list__input" type="text" placeholder="请输入">
                </li>
                <li class="list__li">
                    <div class="list__title">行驶证号</div>
                    <input v-model="vehicle.travelNum" class="list__input" type="text" placeholder="请输入">
                </li>
                <li class="list__li">
                    <div class="list__title">车型</div>
                    <input v-model="vehicle.vehicleType" class="list__input" type="text" placeholder="请输入品牌及型号">
                </li>
                <li class="list__li">
                    <div class="list__title">车架号</div>
                    <input v-model="vehicle.vehicleFrame" class="list__input" type="text" placeholder="请输入">
                </li>
                <li class="list__li">
                    <div class="list__title">载人数</div>
                    <input v-model="vehicle.vehicleMannedNum" class="list__input" type="text" placeholder="请输入">
                </li>
                <li class="list__li">
                    <div class="list__title">车牌号</div>
                    <input v-model="vehicle.vehicleLicenceNum" class="list__input" type="text" placeholder="请输入">
                </li>
            </ul>
            <div class="complete" @click="submit">完成</div>
        </my-body>
    </my-page>
</template>

<script>
    import MyBody from "../../components/layout/body.vue";
    import MyHead from "../../components/layout/head.vue";
    import MyPage from "../../components/layout/page";

    export default {
        //组件名字
        name: '',

        //引入子组件
        components: {
            MyPage,
            MyHead,
            MyBody
        },

        //接收父组件的传值
        props: {},

        //组件私有数据
        data() {
            return {
                vehicle: {},//车辆信息
            }
        },

        //数据计算
        computed: {
            userInfo() {
                return this.$store.state.user.userInfo
            },
        },

        //数据监听
        watch: {},

        //生命周期钩子：组件实例创建之后调用
        created() {
            const self = this
            self.vehicle = self.fn.deepClone(self.userInfo)
        },

        //生命周期钩子：组件实例渲染之后调用
        mounted() {
        },

        //自定义函数
        methods: {
            /**
             * 提交信息
             */
            submit(){
                const self = this
                if(!self.vehicle.drivingNum){
                    self.fn.myMessage('请输入驾驶证号')
                }else if(!self.vehicle.travelNum){
                    self.fn.myMessage('请输入行驶证号')
                }else if(!self.vehicle.vehicleType){
                    self.fn.myMessage('请输入车型')
                }else if(!self.vehicle.vehicleFrame){
                    self.fn.myMessage('请输入车架号')
                }else if(!self.vehicle.vehicleMannedNum){
                    self.fn.myMessage('请输入载人数')
                }else if(!self.vehicle.vehicleLicenceNum){
                    self.fn.myMessage('请输入车牌号')
                }else {
                    self.api.setVehicleInfo(self.vehicle).then(()=>{
                        self.$router.back()
                    })
                }
            },
        },
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";

    .list__li {
        @include m-border(t);
        display: flex;
        align-items: center;
        height: rem(88);
        box-sizing: border-box;
        padding: 0 rem(30);
        background-color: #fff;
        &:first-child {
            @include m-border();
        }
    }

    .list__title {
        width: rem(150);
        font-size: rem(28);
        color: #333;
    }

    .list__input {
        width: rem(540);
        font-size: rem(28);
        border: none;
    }

    .complete {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: rem(88);
        font-size: rem(30);
        color: #fff;
        background-color: #dec190;
    }
</style>
