<template>
    <div>
        <my-header title="我的收藏" :is-back="true"></my-header>
        <div class="mine-shoucang-list">
            <product-list/>
        </div>
    </div>
</template>

<script>
import MyHeader from '@/pages/index/components/Header'
import productList from '@/pages/index/components/productList'

import { mapState, mapActions } from 'vuex'
export default {
    components:{
        myHeader: MyHeader,
        productList
    },
    computed:{
         ...mapState({
        data:state => state.mine.tuangou
        })
    }
}
</script>
<style lang="scss" scoped>
@import '../../../css/function';
</style>

