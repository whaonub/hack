<template>
    <div>
        <header-top title="游客详情" isBack="true" moreLink="true" :addLink="false"></header-top>
        <my-header :data="data.guideList" :type="false"></my-header>
        <my-navbar
            :currentTab="data.currentTab"
            :navList="data.navList"
            :changeCurrentTab="changeState"
            >
        </my-navbar>
         <div :class="`guanzhucontainer pb-40 `">
             <zu-tuan v-if="data.currentTab === 1"></zu-tuan>
            <product-list v-if="data.currentTab === 2" />
            <quan-quan v-if="data.currentTab === 3"></quan-quan>
        </div>
        <div class="fButton white lh-98 f-30">对话</div>
    </div>
</template>

<script>
import HeaderTop from '@/pages/index/components/Header'
import productList from '@/pages/index/components/productList'
import NavBar from '@/pages/index/components/Navbar'
import BottomFooter from '@/pages/index/components/BottomFooter'
import Header from '../guide_detail/components/header'
import QuanQuan from '../guide_detail/quanquan'
import ZuTuan from './zutuan'
import { mapState, mapActions } from 'vuex'
export default {
    name: 'mineCircle',
    components:{
        myHeader:Header,
        HeaderTop,
        myNavbar:NavBar,
        productList,
        BottomFooter,
        QuanQuan,
        ZuTuan
    },
    computed:{
        ...mapState({
            data: state => state.home.homeZuTuanDetail
        })
    },
    created(){
        
    },
    methods:{
    ...mapActions('homeZuTuanDetail',['changeState']),
    }
}
</script>
<style lang="scss" scoped>
@import '../../../css/function';
.mine-quanquan-circle-container{
    width: rem(688);
    height: rem(350);
    border-radius: rem(14);
    background:#ccc;
    margin-top:rem(30);
    overflow: hidden;
}
.fButton{
    position: fixed;
    bottom: 0;
    background: #dec190;
    width: 100%;
    height: rem(98);
    text-align: center;
}
</style>

