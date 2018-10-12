<template>
    <div class="content">
        <mt-header title="" class="">
        <router-link to="/product_detail" slot="left">
            <mt-button icon="back" style="color:#fff;"></mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
        <!-- 产品 -->
      <div class="pl-30 pr-30 product">
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
          <div class="f-22" style="color:#999;">
              <span class="mr-10">周一至周日</span><span>09:00-19:00</span>
          </div>
          <div class="tabs mt-20 mb-20">
              <span class="mr-10">餐饮</span><span>娱乐</span>
          </div>
          <div>
              <span class="f-22" style="color:#999;"><i class="iconfont icon-dingwei f-22"></i>云南红河</span>
          </div>
      </div>
      <div class="line-though"></div>
      <!-- 商家介绍 -->
      <div class="shop pl-30 pr-30 ">
          <div class="title block333 fw6 f-28 lh-86">商家介绍</div>
          <div>
              <span class="f-24 lh-30" style="color:#5a5a5a;">士大夫金龙卡的手动阀手动阀手动阀手动阀似的发射点发射点</span>
              <div class="golden f-24 lh-30" style="float:right;">查看全部>></div>
          </div>
      </div>
      <div class="line-though"></div>
      <!-- 套餐 -->
      <div class="setMeal pl-30 pr-30">
          <div class="title  block333 fw6 f-28">套餐</div>
          <div class="flex mb-30" v-for="item in 2" :key="item">
              <div class="mr-20">
                  <img src="" alt="">
              </div>
              <div>
                <h3 class="f-28">醉江湖</h3>
                <div class="f-20" style="color:#999;">
                    <span>周一至周日</span>
                </div>
                <div class="tabs">
                    <span class="mr-10">餐饮</span><span>娱乐</span>
                </div>
                <div>
                    <span class="f-24" style="color:#f02c2c;">￥368/人</span>
                </div>
              </div>  
          </div>
      </div>
      <div class="line-though"></div>
      <!-- 评论 -->
      <div class="pl-30 pr-30 comment">
          <div class="title block333 fw6 f-28">全部评论</div>
          <div class="itemComment" v-for="item in 2" :key="item">
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
      <bottom-footer :footerList="data.footerList" :leftLink="'/'"></bottom-footer>
    </div>
</template>

<script>
import {
  Header,
  Button
} from 'mint-ui'
import BottomFooter from "@/pages/index/components/BottomFooter"
import { mapState, mapActions } from 'vuex'

export default {
    components:{
        mtHeader:Header,
        mtButton:Button,
        BottomFooter
    },
    computed: {
        ...mapState({
            data:state => state.home.homeShopDetail
        })
    } ,
    created(){
        console.log(this.data)
    },
    methods:{
        ...mapActions('homeShopDetail',['changeState']),
    
    }
}
</script>

<style lang="scss" scoped>
@import '../../../css/function';
    .mint-header{
        align-items: flex-start;
        height: rem(564);
        background-color: #999999;
    }
    .content{
        padding-bottom:rem(120); 
        .title{
            height: rem(80);
            line-height: rem(80);
        }
        .tabs span{
            color:#dec190;
            border: rem(2) solid #dec190;
            padding: rem(1) rem(30);
        }
        .line-though{
            height: rem(8);
            background: #f8f8f8;
        }
        .product{
            height: rem(256);
        }
        .shop{
            height: rem(178);
            .title{
                height: rem(86);
            }
        }
        .setMeal{
            div{
                img{
                    width: rem(142);
                    height: rem(142);
                    background-color: #e2e2e2;
                    border-radius: rem(8);
                    display: block;
                }
            }
        }
        .comment{
            img{
                width: rem(72);
                height: rem(72);
                background-color: #333333;
                border-radius: rem(36);
            }
            .flex{
                height: rem(72);
            }
            .itemComment{
                height: rem(202);
            }
        }
    }
</style>

