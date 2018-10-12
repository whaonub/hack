<template>
     <div class="pt-24 pl-29 pr-28 pb-36 bcell-container">
         <div class="flex flex-row justify-between items-center mb-24">
            <div class="flex flex-row items-center">
                <div class="photo mr-12">{{data.photo}}</div>
                <div class="name f-26 pr-14 mr-14 ">{{data.name}}</div>
                <div class="time f-26">{{data.time}}</div>
            </div>
         </div>
         <div>
             <div class="f-28 lh-42 content mb-15">{{data.content}}</div>
                <div class="flex flex-row">
                    <div v-for="item in data.imgList" :key="item" class="content-img mr-12">{{item}}</div>
                </div>
         </div>
         <div class="flex flex-row justify-between mt-30">
            <div class="flex flex-row">
                <tag v-for="item in data.tags" :key="item" :data="item"/>
            </div>
            <div class="flex flex-row">
                <div class="flex flex-row items-center mr-54">
                    <i class="iconfont icon-zan f-32"></i>
                    <div class="ml-6 f-18">{{data.agree}}</div>
                </div>
                <div class="flex flex-row items-center">
                    <i class="iconfont icon-weibiaoti- f-32"></i>
                    <div class="ml-6 f-18">{{data.message}}</div>
                </div>
            </div>
         </div>
    </div>
</template>

<script>
import Tag from './Tag'
export default {
    props:['data'],
    components:{
        Tag
    }
}
</script>
<style lang="scss" scoped>
@import '../css/function';
.bcell-container{
    .name,.time{
        color:#b6b6b6;
    }
    .name{
        border-right: rem(1) solid #999;
        height: rem(26);
        line-height: rem(26);
    }
    .photo{
        width: rem(40);
        height: rem(40);
        border-radius: rem(20);
        background:#ccc;
        overflow: hidden;
    }
    .notice-button{
        border:rem(2) solid #ddc290;
        color:#ddc290;
        border-radius: rem(6)
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
    .content-img{
        width: rem(300);
        height: rem(224);
        background: #ccc;
        border-radius: rem(6);
        float:left;
    }
}
</style>

