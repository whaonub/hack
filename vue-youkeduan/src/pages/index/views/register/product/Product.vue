<template>
   <div class="register-hoby-cell-container mb-30 flex flex-column justify-center relative">
       <div class="checkbox flex flex-row justify-center items-center" @click="handleClick">
           <div class="white"><i class="iconfont icon-dui f-8" v-if="isChecked"></i></div>
       </div>
       <div class="img">
        <img :src="data.img">
       </div>
       <h2>{{data.title}}</h2>
        <h3>{{data.aside}}</h3>
        <div class="product-price">
            <div>
                <span style="color:rgb(255,164,146);">￥<span class="nub1">{{data.price}}</span></span>
                <span style="color:rgb(153,153,153);text-decoration: line-through;">￥<span>{{data.originalPrice}}</span></span>
                <span style="color:rgb(153,153,153);margin-left:23px;">已售{{data.sellOut}}</span>
            </div>
            <div class="list-item-tab">
                <span v-for="i in data.tags" :key="i" class="mr-8">{{i}}</span>
            </div>
        </div>
   </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
    props:['data','changeChecked','isChecked'],
    methods:{
        handleClick(){
            this.changeChecked(this.data.id)
        }
    },
}
</script>
<style lang="scss" scoped>
@import "../../../css/function";
.register-hoby-cell-container{
    background:#fff;
    border-radius: rem(15);
    padding-bottom: rem(20);
    overflow: hidden;
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
        width:rem(690);
        height: rem(350);
        border-radius: rem(15) rem(15) 0 0;
        background:#ccc;
    }
    h2{
        font-size: rem(28);
        margin-top: rem(30);
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
        display: flex;
        justify-content: space-between;
        margin:rem(19) rem(29) 0;
        .nub1{
            font-size: rem(30);
        }
        .list-item-tab{
            span{
                display: inline-block;
                width:rem(80);
                height: rem(34);
                font-size: rem(22);
                color: rgb(222,193,144);
                border: 1px solid rgb(222,193,144);
                border-radius: rem(8);
                text-align: center;
            }
        }
    }
    
}
</style>

