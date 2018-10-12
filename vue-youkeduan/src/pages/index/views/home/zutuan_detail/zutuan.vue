<template>
    <div style="background:#f3f3f3;" class="pt-2">
        <div class=" mt-20 pt-20 bcell-container" v-for="item in 4" :key="item">
            <div class="flex flex-row items-center pl-30 pr-30" style="background:#fff;">
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
                        <div class="flex flex-row">
                            <div v-for=" item in 3" :key="item" class="photos ml--2">{{item}}</div>
                            <div class="ml-18 f-24 num"></div>
                        </div>
                    </div>
               </div>
            </div>
            <div class="list-item mt-30 pl-30 pr-30">
                <div style="background:#fff;">
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
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['data'],
    components:{
    }
}
</script>
<style lang="scss" scoped>
@import '../../../css/function';
.bcell-container{
    background: rgb(243, 243, 243);
   justify-content: space-around;
    .name{
        color:#b6b6b6;
    }
    .photo{
        width: rem(180);
        height: rem(180);
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
    .list-item{
        height: rem(497);
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

