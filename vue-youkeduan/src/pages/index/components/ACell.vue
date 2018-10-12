<template>
     <div class="pt-28 pl-42 pr-100 pb-25">
        <div class="flex flex-row">
            <div class="photo mr-26">{{data.photo}}</div>
            <div class="flex-1 flex flex-column justify-between">
                <div class=" fw8 name f-26">{{data.name}}</div>
                <div class="location f-20">{{data.location}}</div>
                <div class="flex flex-row">
                    <div v-for="item in 5" :key="item">
                        <i :class="`f-12 mr-2 iconfont icon-star ${item<=data.star?'fullstar':'emptystar'}`"></i>
                    </div>
                </div>
            </div>
        </div>
       <div class="flex flex-row mt-28">
           <tag v-for="item in data.tags" :key="item" :data="item"/>
       </div>
    </div>
</template>

<script>
import Tag from './Tag'
export default {
    props:['data'],
    components:{
        Tag
    }
}
</script>
<style lang="scss" scoped>
@import '../css/function';

.photo{
    height: rem(100);
    width: rem(100);
    background:#ccc;
    border-radius: rem(50);
    overflow: hidden;
}
.name{
    color:#333;
}
.location{
    color:#aaa

}
.fullstar{
    color:#f8cd39;
}
.emptystar{
    color:#d8d8d8;
}
</style>

