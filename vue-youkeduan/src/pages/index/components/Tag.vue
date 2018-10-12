<template>
    <div class="flex flex-row f-22 golden lh-24">
        <div class="tag br-4 mr-10 pt-5 pb-5 pl-19 pr-19">{{data}}</div>
    </div>
</template>
<script>
export default {
    props: ['data']
}
</script>
<style lang='scss' scoped>
    @import "../css/function";
    .top-container{
      border-bottom:7px solid rgb(243,243,243);
    }
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
  
</style>


