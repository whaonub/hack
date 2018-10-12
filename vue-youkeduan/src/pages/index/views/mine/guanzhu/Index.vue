<template>
    <div>
        <my-header title="我的关注" :is-back="true"></my-header>
        <my-navbar
            :currentTab="data.currentTab"
            :navList="data.navList"
            :changeCurrentTab="changeState"
            >
        </my-navbar>
        <div :class="`guanzhucontainer pb-40 ${data.currentTab === 2?'bg-gray':''}`">
            <guest v-if="data.currentTab === 1" :guest-list="data.guestList"/>
            <guide v-if="data.currentTab === 2" :guide-list="data.guideList"/>
        </div>
    </div>
</template>

<script>
import MyHeader from '@/pages/index/components/Header'
import MyNavbar from '@/pages/index/components/Navbar'
import Guide from './Guide'
import Guest from './Guest'

import { mapState, mapActions } from 'vuex'
export default {
    components:{
        myHeader: MyHeader,
        myNavbar: MyNavbar,
        Guest,
        Guide
    },
    computed:{
         ...mapState({
        data:state => state.mine.guanzhu
        })
    },
    methods:{
        ...mapActions('guanzhu',['changeState'])
    }
}
</script>
<style lang="scss" scoped>
@import '../../../css/function';
.guanzhucontainer{
    border-top:rem(2) solid #d9d9d9;
}
.bg-gray{
    background:#f8f8f8;
}
</style>

