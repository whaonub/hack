<template>
    <div style="background:#f3f3f3;" class="pt-2">
        <div class="pl-29 pr-28 mt-20 pt-20 bcell-container" style="background:#fff;" v-for="item in 4" :key="item">
            <div class="flex flex-row items-center">
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
    height: rem(240);
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
}
</style>

