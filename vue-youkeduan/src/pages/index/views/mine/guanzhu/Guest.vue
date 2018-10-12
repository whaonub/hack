<template>
    <div class="mt-54 flex flex-row justify-around flex-wrap">
        <div class="container mb-48" v-for="item in guestList" :key="item.id">
            <router-link to="/guest_detail">
                <photo-name-location :data="item" />
            </router-link>
        </div>
    </div>
</template>

<script>
import PhotoNameLocation from '@/pages/index/components/PhotoNameLocation'
export default {
    components:{
        PhotoNameLocation
    },
    props:['guestList'],
}
</script>
<style lang="scss" scoped>
@import '../../../css/function';
.container{
    width:33%
}
</style>

