<template>
    <div class="mine-quanquan">
        <div class="top-container">
            <my-header title="我的圈圈" :is-back="true"></my-header>
            <my-navbar
                :navList="data.navList"
                :currentTab="data.currentTab"
                :changeCurrentTab="changeState"
            ></my-navbar>
        </div>
        <my-circle v-if="data.currentTab === 1" :data="data.circle"/>
        <topic v-if="data.currentTab === 2" :data="data.topic"/>
        <dynamic v-if="data.currentTab === 3" :data="data.dynamic"/>
    </div>
</template>

<script>
import MyHeader from '@/pages/index/components/Header'
import MyNavbar from '@/pages/index/components/Navbar'

import Circle from './Circle'
import Topic from './Topic'
import Dynamic from './Dynamic'

import { mapState, mapActions } from 'vuex'
export default {
    components:{
        myHeader: MyHeader,
        myNavbar: MyNavbar,
        myCircle: Circle,
        Topic,
        Dynamic
    },
    computed:{
         ...mapState({
        data:state => state.mine.quanquan
        })
    },
    methods:{
        ...mapActions('quanquan',['changeState'])
    }

}
</script>
<style lang="scss" scoped>
@import '../../../css/function';
.mine-quanquan{
    .top-container{
        border-bottom: rem(2) solid #cecece;
    }
}
</style>

