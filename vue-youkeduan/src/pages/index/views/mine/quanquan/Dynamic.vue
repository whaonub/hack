<template>
    <div>
        <div v-for="item in data.list" :key="item.id" class="min-quanquan-dynamic-container">
            <c-cell :data="item"/>
        </div>
    </div>
</template>

<script>
import CCell from '@/pages/index/components/CCell'
export default {
    components:{
        CCell
    },
    props:['data']
}
</script>
<style lang="scss" scoped>
@import '../../../css/function';
.min-quanquan-dynamic-container{
    border-bottom:rem(8) solid #f3f3f3;
}

</style>

