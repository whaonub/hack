<template>
    <div>
        <header-top title="导游详情" isBack="true" moreLink="true" :addLink="false"></header-top>
        <my-header :data="data.guideList"></my-header>
        <my-navbar
            :currentTab="data.currentTab"
            :navList="data.navList"
            :changeCurrentTab="changeState"
            >
        </my-navbar>
         <div :class="`guanzhucontainer pb-40 ${data.currentTab === 2?'bg-gray':''}`">
            <zu-tuan v-if="data.currentTab === 1"></zu-tuan>
            <product-list v-if="data.currentTab === 2" />
            <quan-quan v-if="data.currentTab === 3"></quan-quan>
        </div>
        <bottom-footer :footerList="data.footerList" leftLink="/" :alterDialog="()=>{}"></bottom-footer>
    </div>
</template>

<script>
import HeaderTop from '@/pages/index/components/Header'
import productList from '@/pages/index/components/productList'
import NavBar from '@/pages/index/components/Navbar'
import BottomFooter from '@/pages/index/components/BottomFooter'
import Header from './components/header'
import QuanQuan from './quanquan'
import ZuTuan from './zutuan'
import api from '@/pages/index/api'
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
            data: state => state.home.homeGuideDetail
        })
    },
    created(){
        this.getGuideDetail()
        console.log(this.$route.params.userId)
    },
    methods:{
        ...mapActions('homeGuideDetail',['changeState']),
        async getGuideDetail(){
            const id = this.$route.params.userId
            const data = {guide_id:id}
            const res = await api.guideDetail(data)
            this.guideDetail = res.data
            console.log(this.guideDetail)
        }
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

</style>

