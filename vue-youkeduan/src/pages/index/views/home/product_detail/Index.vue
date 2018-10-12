<template>
  <div>
    <mt-header title="产品详情" class="mt-38 f-30 mb-70">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="content">
      <my-navbar 
        :currentTab="data.currentTab"
        :navList="data.tabbarList"
        :changeCurrentTab="changeState"
        >
      </my-navbar>
      <div v-if="data.currentTab === 1">
            <div class="condition">
              <product-details></product-details>
            </div>
        </div>
         <div v-if="data.currentTab === 2">
            <div class="condition">
                2
            </div>
        </div>
        <div v-if="data.currentTab === 3">
            <div class="condition">
               3
            </div>
        </div>
        <div v-if="data.currentTab === 4">
            <div class="condition">
               4
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import {
  Header,
  Button,
  tabItem
} from 'mint-ui'
import ProductDetails from './Detail'
import ProductComment from './Comment'
import ProductGuest from './Guest'
import ProductKnown from './Known'
import { mapState, mapActions } from 'vuex'
import Navbar from '@/pages/index/components/Navbar'
export default {
  name: 'ProductDetail',
  computed: {
    ...mapState({
      data:state => state.home.homeProductDetail
    })
  } ,
  components:{
    mtHeader:Header,
    mtButton:Button,
    myNavbar:Navbar,
    mtTabItem:tabItem,
    ProductDetails,
    ProductComment,
    ProductGuest,
    ProductKnown
  },
  methods:{
    ...mapActions('homeProductDetail',['changeState']),
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../../css/function';
  .mint-header{
    height:rem(28);
    background:#fff;
    color:#000;
  }
  .content{
    color: #bcbcbc;
    
  }
  
</style>
