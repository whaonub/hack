<template>
    <div>
        <my-header title="全部游客" :is-back="true"></my-header>
        <guest :guest-list="data.guestList"/>
    </div>
</template>

<script>
import MyHeader from '@/pages/index/components/Header'
import MyNavbar from '@/pages/index/components/Navbar'
import Guest from '../../mine/guanzhu/Guest'

import { mapState, mapActions } from 'vuex'
export default {
    components:{
        myHeader: MyHeader,
        myNavbar: MyNavbar,
        Guest,
    },
    computed:{
         ...mapState({
        data:state => state.home.homeZuTuanDetail
        })
    },
    created(){
    },
    methods:{
        ...mapActions('homeZuTuanDetail',['changeState'])
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

