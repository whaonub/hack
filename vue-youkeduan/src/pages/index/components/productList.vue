<template>
  <div class="product-list">
      <router-link to="/product_detail" v-for="item in 3" :key="item">
        <div class="list-item">
            <img src="@/pages/index/images/product1.png" alt="">
            <h2>过桥米线</h2>
            <h3>在云南，需要一场具有仪式感的过桥米线</h3>
            <div class="product-price">
                <div>
                    <span style="color:rgb(255,164,146);">￥<span class="nub1">80</span></span>
                    <span style="color:rgb(153,153,153);text-decoration: line-through;">￥<span>8099</span></span>
                    <span style="color:rgb(153,153,153);margin-left:23px;">已售34</span>
                </div>
                <div class="list-item-tab">
                    <span>美景</span>
                    <span>海鸥</span>
                </div>
            </div>
        </div>
      </router-link>
  </div>
</template>
<script>
export default {
  data(){
      return{}
  }
}
</script>
<style lang="scss" scoped>
@import "../css/function";
.product-list{
    background: rgb(243,243,243);
    padding: rem(30);
    padding-bottom: rem(80);
    .list-item{
        height: rem(497);
        background: #fff;
        margin-bottom: rem(30);
        img{
            width: rem(690);
            height: rem(260);
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
}
</style>

