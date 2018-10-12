<template>
    <div class="flex flex-row justify-between pl-30 pr-30 pt-32 pb-32">
        <i class="iconfont icon-shangyiye" @click="back" v-if="isBack"></i>
        <i v-else></i>
        <div class="f-30">{{title}}</div>
        <div @click="gotoAdd" v-if="addLink" class="golden fw8">添加</div>
        <i class="iconfont icon-more" v-if="moreLink"></i>
        <i v-if="!addLink&&!moreLink"></i>
    </div>
</template>
<script>
import {
    Header,
    Button,
} from 'mint-ui'
export default {
    props:['title','addLink','moreLink','isBack'],
    components:{
        mtHeader: Header,
        mtButton: Button,
    },
    methods:{
        back:function(){
            this.$router.back(-1)
        },
        gotoAdd:function(){
            this.$router.push(this.addLink)
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../css/function';
i{
    width: rem(40);
    height: rem(40);
}
</style>

