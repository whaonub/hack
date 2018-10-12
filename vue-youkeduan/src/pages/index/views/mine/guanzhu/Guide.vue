<template>
    <div class="pl-42 pr-42">
        <div class="cellcontainer mt-20" v-for="item in guideList" :key="item.id" >
            <a-cell :data="item"></a-cell>
        </div>
    </div>
</template>

<script>
import ACell from '@/pages/index/components/ACell'
export default {
    components:{
        ACell
    },
    props:['guideList']
}
</script>
<style lang="scss" scoped>
@import '../../../css/function';

.cellcontainer{
    background:#fff;
    box-shadow: rem(4) rem(4) rem(1) #eee;
}
</style>

