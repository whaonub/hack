<template>
    <div class="cell-with-icon-title-content-container flex flex-row items-center light-silver">
        <i :class="`iconfont icon-${icon}`"></i>
        <div class="flex flex-row ml-24 border-bottom-f5 items-center flex-1"> 
            <div class="flex flex-row title">
                <div class="f-30">{{title}}</div>
                <div v-if="tip" class="f-20 lh-45">({{tip}})</div>:
            </div>
            <div class="fw-30 black">{{data}}</div>
        </div>
    </div>
</template>
<script>
export default {
    props:['data','icon','title','tip'],
}
</script>
<style lang="scss" scoped>
@import '../css/function';
.cell-with-icon-title-content-container{
    height: rem(86);
    .title{
        width:rem(230)
    }
    .border-bottom-f5{
        border-bottom: rem(2) solid #f5f5f5;
        height:rem(84)
    }
}

</style>

