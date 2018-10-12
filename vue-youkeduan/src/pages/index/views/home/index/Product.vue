<template>
    <div>
        <productList></productList>
    </div>
</template>
<script>
    import productList from '@/pages/index/components/productList'
    import {mapState,mapActions} from 'vuex'
    export default {
        
        components:{
            productList
        },
        computed: {
            ...mapState({
                data: state=> state.homeProduct
            })
        },
        created(){
        }
    }
</script>
<style lang="scss" scoped>
@import "../../../css/function";
    
</style>


