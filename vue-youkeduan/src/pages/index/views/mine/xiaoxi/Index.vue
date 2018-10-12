<template>
    <div >
        <my-header title="系统消息" :is-back="true"></my-header>
        <div>
            <div class="pt-24 pl-29 pr-28 pb-36 mine-xiaoxi-container">
                <cell v-for="item in data.messageList" :key="item.id" :data="item"></cell>
            </div>
        </div>
    </div>
</template>

<script>
import MyHeader from '@/pages/index/components/Header'
import Cell from './components/Cell'
import { mapState, mapActions } from 'vuex'
export default {
    components:{
        myHeader: MyHeader,
        Cell,
    },
    computed:{
         ...mapState({
        data:state => state.mine.xiaoxi
        })
    }
}
</script>
<style lang="scss" scoped>
@import '../../../css/function';
.mine-xiaoxi-container{
    background:#f3f3f3;
    min-height: rem(1190);
}
</style>

