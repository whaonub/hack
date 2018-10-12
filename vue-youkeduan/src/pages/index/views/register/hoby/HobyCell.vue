<template>
   <div class="register-hoby-cell-container mb-30 flex flex-column justify-center relative">
       <div class="checkbox flex flex-row justify-center items-center" @click="handleClick">
           <div class="white"><i class="iconfont icon-dui f-8" v-if="isChecked"></i></div>
       </div>
       <div class="img">{{data}}</div>
       <div class="title mt-18 tc f-28 fw8">{{data}}</div>
   </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
    props:['data','changeChecked','isChecked'],
    methods:{
        handleClick(){
            this.changeChecked(this.data)
        }
    },
}
</script>
<style lang="scss" scoped>
@import "../../../css/function";
.register-hoby-cell-container{
    .checkbox{
        position: absolute;
        top: rem(4);
        right: rem(4);
        width:rem(30);
        height: rem(30);
        background:rgba(0,0,0,0.4);
        border-radius: rem(15);
       
    }
    .img{
        width:rem(180);
        height: rem(180);
        border-radius: rem(10);
        background:#ccc;
    }
}
</style>

