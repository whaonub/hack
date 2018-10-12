<template>
    <div class="mb-98">
        <router-link to="/circles_theme">
        <div class="content flex" v-for="item in 3" :key="item">
            <div style="color:#fff;" class="mb-40">世界上会玩的人，又少了一个</div>
            <div class="flex flex-row f-22 golden lh-24 mb-20">
                <div class="tag br-4 mr-8 pt-5 pb-5 pl-19 pr-19" 
                v-for="item in 2" :key="item">{{item}}</div>
            </div>
        </div>
       </router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
@import '../../../css/function';
    .content{
        width: rem(690);
        margin: rem(15) auto;
        height: rem(350);
        background: #000000;
        border-radius: rem(10);
        opacity: 0.3;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>


