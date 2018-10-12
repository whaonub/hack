<template>
     <div class="mb-24 message-cell-container flex flex-row justify-between pt-33 pl-32 pb-34 pr-30 items-center">
        <div class="flex flex-row items-center">
            <div class="icon-container flex justify-center items-center white">
                <i :class="`iconfont icon-${data.icon} f-44`"></i>
            </div>
            <div class="ml-37">
                <div class="f-28 fw8 lh-28">{{data.title}}</div>
                <div class="f-26 lh-26 light-silver mt-20">{{data.content}}</div>
            </div>
        </div>
        <div>
            <router-link :to="data.link">
                <i class="iconfont icon-xiayiye"></i>
            </router-link>
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
@import '../../../../css/function';
.message-cell-container{
    background:#fff;
    .icon-container{
        width:rem(78);
        height: rem(78);
        background: rgb(228,204,161);
        border-radius: rem(39);
    }
}
</style>

