<template>
    <div>
        <div v-for="item in data.list" :key="item.id" class="min-quanquan-topic-container">
            <b-cell :data="item"/>
        </div>
    </div>
</template>

<script>
import BCell from '@/pages/index/components/BCell'
export default {
    components:{
        BCell
    },
    props:['data']
}
</script>
<style lang="scss" scoped>
@import '../../../css/function';
.min-quanquan-topic-container{
    border-bottom:rem(8) solid #f3f3f3;
}

</style>

