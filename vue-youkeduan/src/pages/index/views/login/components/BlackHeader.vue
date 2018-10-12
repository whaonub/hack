<template>
     <div class="flex flex-row justify-between pl-30 pr-30 pt-32 pb-32">
        <i class="iconfont icon-shangyiye" @click="back"></i>
      </div>
</template>
<script>
export default {
  data(){
    return {
       
    }
  },
  components:{
  },
  methods:{
    back:function(){
        this.$router.back(-1)
    },
  }
}
</script>
<style lang="scss" scoped>
@import "../../../css/function";

</style>

