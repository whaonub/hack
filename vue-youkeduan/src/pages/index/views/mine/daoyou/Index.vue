<template>
    <div>
        <my-header title="导游订单" :is-back="true"></my-header>
        <my-navbar></my-navbar>
    </div>
</template>

<script>
import MyHeader from '@/pages/index/components/Header'
import MyNavbar from '@/pages/index/components/Navbar'
import { mapState, mapActions } from 'vuex'
export default {
    components:{
        myHeader: MyHeader,
        myNavbar: MyNavbar,
    },
    computed:{
         ...mapState({
        data:state => state.mine.tuangou
        })
    }
}
</script>
<style>

</style>

