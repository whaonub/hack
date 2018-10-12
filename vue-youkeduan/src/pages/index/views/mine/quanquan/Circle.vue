<template>
    <div class="flex flex-column items-center pb-20">
        <router-link v-for="item in data.imgList" :key="item.id" :to="item.link">
            <div class="mine-quanquan-circle-container">
                {{item.img}}
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'mineCircle',
    components:{
    },
    props:['data']
}
</script>
<style lang="scss" scoped>
@import '../../../css/function';
.mine-quanquan-circle-container{
    width: rem(688);
    height: rem(350);
    border-radius: rem(14);
    background:#ccc;
    margin-top:rem(30);
    overflow: hidden;
}

</style>

