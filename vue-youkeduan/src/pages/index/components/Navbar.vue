<template>
    <div>
        <div class="tabbar flex justify-around">
          <div 
            @click="changeCurrentTab({currentTab:item.id})" 
            v-for="(item) in navList" 
            :key="item.id"
            :class="getClass(item.id,currentTab)"
            >
              {{item.title}}
          </div>
        </div>
    </div>
</template>

<script>

export default {
    props:['navList','currentTab','changeCurrentTab'],
    methods:{
        getClass(index,currentTab){
            if(index === currentTab){
                return 'selected'
            }
            return ''
        }
    }
}
</script>
<style lang="scss">
@import '../css/function';
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
      color: #000;
      border-bottom: rem(3) solid #dec190;
    }
</style>

