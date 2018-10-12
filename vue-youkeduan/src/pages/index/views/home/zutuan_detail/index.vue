<template>
  <div>
    <mt-header title="" class="f-30">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button @click="changType" icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="pl-30 pr-30 pb-40 product">
        <div class="flex justify-between title" >
          <div>
              <h2 class="f-32 " style="color:#000000">过桥米线</h2>
          </div>
          <div class="flex justify-between" >
              <div style="color:#f02c2c;" class="f-24">
                  <span>￥</span><i class="f-38">368</i><span>/人</span>
              </div>
              <span class="f-20" style="color:#999999;text-decoration: line-through;">￥8099</span>
          </div>
        </div>
        <div class="tabs">
            <span class="mr-10">餐饮</span><span>娱乐</span>
        </div>
    </div>
    <div class="info ml-30 flex justify-between">
      <div>
        <div class="flex">
          <i class="mr-10 iconfont icon-huodongshijian f-46 golden"></i>
          <div class="f-24">
            <div class="color-333">活动时间</div>
            <div class="clr-9">
              2018/06/05至2018/06/05
            </div>
          </div>
        </div>
        <div class="flex">
          <i class="mr-10 iconfont icon-shizhongnaolingjishixianshi f-46 golden"></i>
          <div class="f-24">
            <div class="color-333">报名截止</div>
            <div class="clr-9">
              2018/06/05
            </div>
          </div>
        </div>
        <div class="flex">
          <i class="mr-10 iconfont icon-location f-46 golden"></i>
          <div class="f-24">
            <div class="color-333">集合地点</div>
            <div class="clr-9">
              撒旦发射点
            </div>
          </div>
        </div>
        <div class="flex">
          <i class="mr-10 iconfont icon-pengyou f-46 golden"></i>
          <div class="flex">
            <div class="f-24">
              <div class="color-333">最低成团</div>
              <div class="clr-9">
                12
              </div>
            </div>
            <div class="f-24">
              <div class="color-333">最多成团</div>
              <div class="clr-9">
                20
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div class="guide f-30">
        导游
      </div>
    </div>
    <div class="line-though"></div>
    <div class="content">
      <my-navbar 
        :currentTab="data.currentTab"
        :navList="data.tabbarList"
        :changeCurrentTab="changeState"
        >
      </my-navbar>
      <div v-if="data.currentTab === 1">
          <div class="condition">
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
              <div class="pl-30 pr-30 pb-160 comment">
                <div class="itemComment pt-30" v-for="item in 2" :key="item">
                  <div class="flex justify-between" >
                      <img src="" alt="">
                      <h3 class="lh-72 f-28 block333">管家</h3>
                      <div class="tabs"><span class="mr-10">餐饮</span></div>
                      <div>2018/06/06</div>
                  </div>
                  <div class="f-24 mt-20 mb-20" style="color:#5a5a5a;">在浴室的发生</div>
                  <div style="border:0.5px solid #f1f1f1;"></div>
                </div>
                <div class="golden f-24 lh-36" style="text-align:center;">查看全部>></div>
            </div>
          </div>
      </div>
    </div>
    <bottom-footer
     :footerList="data.footerList" 
     :leftLink="'/'" :alterDialog="()=>{}">
    </bottom-footer>
    <my-popup :type='type' :dataList="dataList"></my-popup>
  </div>
</template>
<script>
import {
  Header,
  Button,
  tabItem
} from 'mint-ui'
import { mapState, mapActions } from 'vuex'
import Navbar from '@/pages/index/components/Navbar'
import BottomFooter from '@/pages/index/components/BottomFooter'
import Popup from "@/pages/index/components/Popup"

export default {
  name: 'ProductDetail',
   data(){
    return{
      type:false,
      dataList:{
        first:{
          title:"1人次",
          id:1
          },
        second:{
          title:"亲自套餐（2大1小）",
          id:2
          },
        three:{
          title:"成人套餐（2位）",
          id:3
          },
      },
    }
  },
  computed: {
    ...mapState({
      data:state => state.home.homeZuTuanDetail
    })
  } ,
  components:{
    mtHeader:Header,
    mtButton:Button,
    myNavbar:Navbar,
    mtTabItem:tabItem,
    BottomFooter,
    myPopup:Popup

  },
  methods:{
    ...mapActions('homeZuTuanDetail',['changeState']),
   changType(){
     this.type = !this.type
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../../css/function';
    .mint-header{
        align-items: flex-start;
        height: rem(564);
        background-color: #999999;
    }
    .title{
        height: rem(80);
        line-height: rem(80);
    }
    .tabs span{
        color:#dec190;
        border: rem(2) solid #dec190;
        padding: rem(1) rem(30);
    }
    .product{
      border-bottom:rem(2) solid #f1f1f1;
    }
    .info{
      
      height: rem(332);
      align-items: center;
      .guide{
        width: rem(138);
        height: rem(104);
        background: #dec190;
        text-align: center;
        line-height: rem(104);
        color:#fff;
        border-radius: rem(50) 0 0 rem(50);
      }
    }
    .line-though{
        height: rem(8);
        background: #f8f8f8;
    }
    .comment{
      img{
          width: rem(72);
          height: rem(72);
          background-color: #333333;
          border-radius: rem(36);
      }
      .itemComment{
          height: rem(166);
      }
  }
  .content{
    color: #bcbcbc;
  }
  
</style>
