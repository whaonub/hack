<template>
    <div class="footer flex f-30">
        <div>
            <router-link :to="leftLink">
            <div style="color:#666;text-align:center;width:100%;background: #fff;">
                {{footerList.titleLeft}}
            </div>
            </router-link>
        </div>
        <div style="color:#fff;background:#dec190;" @click="alterDialog">{{footerList.titleRight}}</div>
    </div>
</template>
<script>
export default {
    props:['alterDialog','leftLink',"footerList"],
}
</script>
<style lang="scss" scoped>
@import "../css/function";
.footer{
      z-index: 10000;
      height: rem(98);
      position: fixed;
      bottom: 0;
      width: 100%;
      text-align: center;
      box-shadow: rem(10) rem(10) rem(30) #000;
      div{
        width: 50%;
        line-height: rem(98);
      }
    }
</style>


