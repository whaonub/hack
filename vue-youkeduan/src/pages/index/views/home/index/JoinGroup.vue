<template>
    <div class="content pt-2">
      <div class="pl-29 pr-28 mt-20 pt-20 bcell-container" style="background:#fff;" v-for="item in 4" :key="item">
        
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
             <router-link to="/information"> 
                <div class="white f-24 lh-50">
                    <i class="iconfont icon-jia f-17 mr-10"></i>加入
                </div>
            </router-link>
          </div>
          <div class="f-28 color-666 pr-190">
            手动阀手动阀手动阀手动阀手动阀撒打发士大夫啊手动阀手动阀
          </div>
          <router-link to="/zutuan_detail">
            <div class="flex flex-row items-center mt-20 mb-20" style="background:#f3f3f3;">
                <div class="flex flex-row">
                    <div class="photo mr-12"></div>
                    <div class="name f-26"></div>
                </div>
                <div class="right">
                    <div class="title f-28 fw8">过钱米线</div>
                    <div class="title f-28">在云南</div>
                    <div class="f-26 content">20180506-20180608</div>
                    <div class="f-26 content"><span>zuiduocheng</span><span>zuiduocheng</span></div>
                    <div class="flex flex-row justify-between">
                        <div>
                            <span class="red f-28">￥80</span>
                            <span class="f-22" style="text-decoration: line-through;">￥8099</span>
                        </div>
                        <router-link to="/all_guest">
                            <div class="flex flex-row">
                                <div v-for=" item in 3" :key="item" class="photos ml--2">{{item}}</div>
                                <div class="ml-18 f-24 num"></div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
           </router-link>
          <div class="flex justify-between">
            <div class="flex">
               <div v-for="item in data" :key="item" >
              <my-tag :data="item"></my-tag>
             </div>
            </div>
             <div class="flex">
               <div class="flex flex-row items-center mr-54">
                    <i class="iconfont icon-zan f-32"></i>
                    <div class="ml-6 f-18">5</div>
                </div>
                <div class="flex flex-row items-center">
                    <i class="iconfont icon-weibiaoti- f-32"></i>
                    <div class="ml-6 f-18">4</div>
                </div>
             </div>
          </div>
        
      </div>
    </div>
</template>
<script>
import Tag from "@/pages/index/components/Tag"
export default {
   data(){
     return {
       data:[1,2,3,4]
     }
   },
   components:{
     myTag:Tag
   }

}
</script>
<style lang="scss" scoped>
@import "../../../css/function";
  .content{
    background: #f8f8f8;
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
    .right{
      width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
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
    .white{
      width: rem(112);
      height: rem(50);
      background: #dec190;
      border-radius: rem(8);
      text-align: center;
    }
  }
</style>


