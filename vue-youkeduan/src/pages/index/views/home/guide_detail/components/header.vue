<template>
    <div class="setMeal">
        <div class="content pl-30 pr-30">
            <div class="flex flex-row justify-between ">
                <div class="flex flex-row mt-5 ">
                    <div class="photo mr-26">头像</div>
                    <div class="flex-column">
                        <div class="name f-24 fw8 mb-19">FOODIE</div>
                        <div class="flex flex-row lh-24 f-24 mb-20 light-silver">
                            <i class="iconfont icon-location">云南红河</i>
                        </div>
                        <div class="flex" v-if="type">
                            <div v-for="item in 5" :key="item">
                                <i :class="`f-12 mr-2 iconfont icon-star ${item<=data.star?'fullstar':'emptystar'}`"></i>
                            </div>
                        </div>
                        <div class="flex flex-row f-22 golden lh-24 mb-20">
                            <div class="tag br-4 mr-8 pt-5 pb-5 pl-19 pr-19" v-for="item in 3" :key="item">{{item}}</div>
                        </div>
                    </div>
                </div>
                <div class="btn white br-4" style="background:#dec190;"><i class="iconfont icon-jia f-32"></i>关注</div>
            </div>
        </div>
        <div class="line"></div>
    </div>
</template>
<script>
export default {
   props:["data","type"]
};
</script>
<style lang="scss" scoped>
@import "../../../../css/function";
.setMeal {
   height: rem(212);
   .line{
            height: rem(8);
            background: #f8f8f8;
        }
  .content{
      height: rem(170);
      justify-content: space-between;
      .photo{
            width:rem(126);
            height: rem(126);
            border-radius: rem(63);
            background:#ccc;
            overflow: hidden;
        }
        .phone{
            border-right: rem(2) solid black;
            height: rem(24);
        }
        .tag{
            border: rem(2) solid rgb(228,204,161);
        }
        .group{
            height: rem(86);
        }
        .btn{
            width: rem(112);
            height: rem(58);
            text-align: center;
            line-height: rem(58);
        }
        
  }
}
</style>


