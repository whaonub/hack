<template>
    <div>
        <mt-popup
            v-model="type"
            position="bottom">
            <div class="flex justify-between pl-100 pr-90" v-for="item in dataList" :key="item.id">
                <div class="f-28" style="#444;">{{item.title}}</div>
                <i class="iconfont icon-jia golden" ></i>
            </div>
        </mt-popup>
    </div>    
</template>

<script>
import { Popup } from 'mint-ui';
export default {
    props:['type',"dataList"],
    components:{
        mtPopup:Popup
    }
}
</script>

<style lang="scss" scoped>
@import "../css/function";
    .mint-popup{
        width: 100%;
        height: rem(378);
        margin-bottom: rem(100);
        border-radius: rem(8);
        .flex{
            height: rem(124);
            align-items: center;
            border-bottom: rem(2) solid #eee;
        }
    }
</style>


