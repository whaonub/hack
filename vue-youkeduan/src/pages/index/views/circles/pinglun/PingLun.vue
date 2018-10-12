<template>
    <div class="content pt-2">
      <div class="flex flex-row justify-between pl-30 pr-30 pt-32 pb-32" style="background:#fff;">
        <i class="iconfont icon-shangyiye" @click="back"></i>
        <div class="f-30">评论</div>
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
          <div class="flex mb-20" >
              <img class="photo ml-20" src="" alt="" v-for="item in 3" :key="item">
          </div>
          <div class="f-28 color-666">
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
                            <i class="iconfont icon-zan mr-30">5</i>
                            <i class="iconfont icon-xiaoxi">5</i>
                        </div>
                    </div>
                </div>
            </div>
      </div>
      <div class="lthough"></div>
      <div class="pt-20 pl-30 pr-30" v-for="item in 3" :key="item">
          <div class="flex">
                <img class="photos" src="" alt="">
                <div class="f-24 clr-9 ml-20">
                    <span>成成</span>
                    |
                    <span>2018-06-08</span>
                </div>
          </div>
          <div class="f-24 color-666 pl-30 mb-50">
            手动阀手动阀手动阀手动阀手动阀撒打发士大夫啊手动阀手动阀
          </div>
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
        .photos{
            width: rem(40);
            height: rem(40);
            border-radius: rem(20);
            background:#ccc;
            overflow: hidden;
        }
        .photo{
            width: rem(200);
            height: rem(200);
            border-radius: rem(20);
            background:#ccc;
        }
        .right{
            width: 100%;
        }
        .lthough{
            height: rem(10);
            background:#ccc;
        }
    }
</style>


