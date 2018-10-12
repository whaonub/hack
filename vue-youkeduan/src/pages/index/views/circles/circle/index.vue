<template>
    <div class="content pt-2">
      <div class="flex flex-row justify-between pl-30 pr-30 pt-32 pb-32" style="background:#fff;">
        <i class="iconfont icon-shangyiye" @click="back"></i>
        <div class="f-30">圈圈</div>
        <i class="iconfont icon-xiaoxi"></i>
      </div>
      <div class="pl-29 pr-28 mt-10 pt-20 bcell-container" style="background:#fff;" >
          <div class="flex justify-between">
            <div class="flex">
                <router-link to="/guide_detail" class="photos mr-12">
                    <img class="photos" src="" alt="">
                </router-link>
                <div class="f-24 clr-9">
                    <span>成成</span>
                    |
                    <span>2018-06-08</span>
                </div>
            </div>
                <div class="white f-24 lh-50">
                    <i class="iconfont icon-jia f-17 mr-10"></i>关注
                </div>
          </div>
          <div class="f-28 b mt-30 black">
            手动阀手动阀手动阀手动阀手动阀撒打发士
          </div>
          <div class="f-28 color-666 mt-30 ">
            手动阀手动阀手动阀手动阀手动阀撒打发士大夫啊手动阀手动阀
          </div>
            <div class="flex flex-row items-center mt-20 mb-20">
                <div class="right">
                    <div class="flex flex-row justify-between">
                        <div class="flex">
                            <div v-for="item in 4" :key="item" >
                                <my-tag :data="item"></my-tag>
                            </div>
                        </div>
                        <div class="flex flex-row">
                            <div v-for=" item in 3" :key="item" class="photos ml--2">{{item}}</div>
                            <div class="ml-18 f-24 num"></div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
      <div class="mt-14 pl-30 pr-30 list border" v-for="(item,index) in data.informationList" :key="index">
           <router-link to="/circles_pinglun">
            <div class="flex pt-20">
                    <img class="photos" src="" alt="">
                <div class="f-24 clr-9">
                    <span>成成</span>
                    |
                    <span>2018-06-08</span>
                </div>
            </div>
            <div class="f-28 color-666 mt-20 mb-20 pl-30">
                手动阀手动阀手动阀手动阀手动阀撒打发士大夫啊手动阀手动阀
            </div>
            <div class="flex ml-30" v-if="item.photolist">
                <div class="photo mr-12" v-for="item in 3" :key="item"></div>
            </div>
            <div class="product-list pl-30 mt-20" v-if="item.product">
                <div class="list-item flex">
                    <div>
                        <img src="@/pages/index/images/product1.png" alt="">
                    </div>
                    <div>
                        <h2>过桥米线</h2>
                        <h3>在云南，需要一场具有仪式感的过桥米线</h3>
                        <div class="product-price pl-30">
                            <span style="color:rgb(255,164,146);">￥<span class="nub1">80</span></span>
                            <span style="color:rgb(153,153,153);text-decoration: line-through;">￥<span>8099</span></span>
                        </div>
                        <div class="product-price pl-30">
                            <span style="color:rgb(255,164,146);">￥<span class="nub1">80</span></span>
                            <span style="color:rgb(153,153,153);text-decoration: line-through;">￥<span>8099</span></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-row items-center pl-30 mt-20 mb-20">
                <div class="right">
                    <div class="flex flex-row justify-between">
                        <div class="flex">
                            <div v-for="item in 4" :key="item" >
                                <my-tag :data="item"></my-tag>
                            </div>
                        </div>
                        <div class="flex flex-row">
                            <i class="iconfont icon-guanzhu mr-30">5</i>
                            <i class="iconfont icon-zan mr-30">5</i>
                            <i class="iconfont icon-xiaoxi">5</i>
                        </div>
                    </div>
                </div>
            </div>
            </router-link>
        </div>
        <div class="footer f-30">
            <router-link to="">
                发动态
            </router-link>
        </div>
    </div>
</template>
<script>
import Tag from "@/pages/index/components/Tag"
import { mapState, mapActions } from 'vuex'

export default {
     components:{
         myTag:Tag,

    },
     computed:{
        ...mapState({
            data: state => state.circles.circlesCircle
        })
    },
    created() {
        console.log(this.data)
    },
    methods:{
        ...mapActions('circles',['changeState']),
         back:function(){
            this.$router.back(-1)
        },
    },
    
}
</script>
<style lang="scss" scoped>
@import "../../../css/function";
  .content{
    background: #f8f8f8;
    
    .bcell-container{
        height:rem(340);
    }
    .name{
        color:#b6b6b6;
    }
    .photo{
        width: rem(200);
        height: rem(200);
        border-radius: rem(20);
        background:#ccc;
        overflow: hidden;
    }
    .photos{
        width: rem(40);
        height: rem(40);
        border-radius: rem(20);
        background:#ccc;
        overflow: hidden;
    }
    
    .content{
        color:#666;
    }
    .ml--2{
        margin-left: rem(-10);
    }
    .num{
        color:#999;
    }
    .list{
         background:#fff;
        border-bottom:rem(2) solid #f3f3f3;
    }
    .right{
        width: 100%;
    }
    
    .sure{
        width: 100%;
        height: rem(80);
        background: #dec190;
        border-radius: rem(20);
    }
    .product-list{
        .list-item{
            background: #f3f3f3;
            img{
                width: rem(180);
                height: rem(180);
            }
            h2{
                font-size: rem(28);
                margin-left: rem(29);
                color: rgb(0,0,0);
            }
            h3{
                font-size: rem(20);
                margin-top: rem(22);
                margin-left: rem(29);
                color: rgb(0,0,0);
                
            }
            .product-price{
                .nub1{
                    font-size: rem(30);
                }
                .list-item-tab{
                    span{
                        display: inline-block;
                        width:rem(80);
                        font-size: rem(22);
                        color: rgb(222,193,144);
                        border: 1px solid rgb(222,193,144);
                        border-radius: rem(8);
                        text-align: center;
                    }
                }
            }
        }
    }
    .footer{
      z-index: 10000;
      height: rem(98);
      position: fixed;
      bottom: 0;
      width: 100%;
      text-align: center;
      box-shadow: rem(10) rem(10) rem(30) #000;
      line-height: rem(98);
      background: rgb(222,193,144);
        a{
            color: #fff;
        }
    }
  }
</style>


