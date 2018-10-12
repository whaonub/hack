<template>
     <div class="pt-24 pl-29 pr-28 pb-36 bcell-container">
         <div class="flex flex-row justify-between items-center mb-24">
            <div class="flex flex-row">
                <div class="photo mr-12">{{data.photo}}</div>
                <div class="name f-26">{{data.name}}</div>
            </div>
            <div class="notice-button f-22 pt-20 pb-20 pl-20 pr-20">{{data.isNotice?'√ 已关注':'关注'}}</div>
         </div>
         <div class="title f-28 fw8 lh-28">{{data.title}}</div>
         <div class="f-26 content mt-23 lh-36 mb-16">{{data.content}}</div>
         <div class="flex flex-row justify-between">
            <div class="flex flex-row">
                <tag v-for="item in data.tags" :key="item" :data="item"/>
            </div>
            <div class="flex flex-row">
                <div v-for=" item in data.hasJion.photos" :key="item" class="photo ml--2">{{item}}</div>
                <div class="ml-18 f-24 num">+{{data.hasJion.num}} 已参与</div>
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
    .name{
        color:#b6b6b6;
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
}
</style>

