<template>
    <div>
        <div class="tabbar flex justify-center block333 fw8">
            <div 
            @click="changeCurrentTab(item.id)" 
            v-for="(item) in data" 
            :key="item.id"
            :class="`${getClass(item.id,currentTab)[0]} flex flex-column items-center`"
            >
            {{item.title}}
            <div :class="`${getClass(item.id,currentTab)[1]} width-50 mt-10`"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props:['data','currentTab','changeCurrentTab'],
  methods:{
   getClass(index,currentTab){
        if(index === currentTab){
            return ['selected','bb-golden','changeCurrentTab']
        }
        return ['','']
    },
  }
}
</script>
<style lang="scss" scoped>
@import "../../../css/function";
 .tabbar{
    padding: 0;
    margin: 0;
    height: rem(56);
    font-size: rem(28);
    div{
        width: 20%;
        text-align: center;
    }
}
.selected{
    color: #fff;
}
.bb-golden{
    border-bottom: rem(3) solid #dec190;
}
.width-50{
    width:rem(50)!important;
}
</style>

