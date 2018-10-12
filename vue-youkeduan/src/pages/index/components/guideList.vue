<template>
    <div class="setMeal pl-30 pr-30 pt-30 pb-10">
        <div class="content flex mb-30" v-for="item in listNumber" :key="item.uid">
            <router-link :to="{ name: 'guideDetail', params: { userId: item.uid }}">
                <div class="flex">
                    <div class="mr-20">
                        <img class="face" src="" alt="">
                    </div>
                    <div>
                        <h3 class="f-28">醉江湖</h3>
                        <div class="f-20" style="color:#999;">
                            <span>周一至周日</span>
                        </div>
                        <img src="" alt="">
                    </div>  
                </div>
                <div class="flex">
                    <div class="tabs" v-for="item in listNumber" :key="item.uid"><span class="mr-10">餐饮</span></div>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    props:['listNumber']
};
</script>
<style lang="scss" scoped>
@import "../css/function";
.setMeal {
  background: #e2e2e2;
  div {
    .face {
      width: rem(100);
      height: rem(100);
      background-color: #e2e2e2;
      border-radius: rem(50);
      display: block;
    }
  }
  .content{
      height: rem(208);
      background: #fff;
      flex-direction: column;
      justify-content: space-around;
      padding: rem(30);
      .tabs span{
            color:#dec190;
            border: rem(2) solid #dec190;
            padding: rem(1) rem(30);
        }
  }
}
</style>


