<template>
    <div class="login-container white flex flex-column">
      <black-header :selfback="currentCell === 2?changeCurrentCell:null"/>
      <nav-bar :data="tabs" :currentTab="currentTab" :changeCurrentTab="changeCurrentTab"/>
      <div class="pt-72">
        <register-cell />
      </div>
      <div class="pt-50 flex flex-column justify-end items-center flex-1">
        <div class="mb-26 mt-46">注册即代表同意 <i class="golden">《向内行走用户服务协议》</i></div>
      </div>
    </div>
</template>
<script>
import RegisterCell from './RegisterCell'
import BlackHeader from '../../login/components/BlackHeader'
import NavBar from '../../login/components/NavBar'
export default {
  data(){
    return {
      currentTab :1,
      tabs:[
        {title:'注册',id:1},
      ],
      currentCell:1,
    }
  },
  components:{
    RegisterCell,
    BlackHeader,
    NavBar,
  },
  methods:{
      back:function(){
        this.$router.back(-1)
      },
      changeCurrentTab(id){
        this.currentTab = id
      },
    
  }
}
</script>
<style lang="scss" scoped>
@import "../../../css/function";
.login-container{
  width:100vw;
  height: 100vh;
  background:#1e2120;
  .link{
    color: white!important;
  }
  i{
    font-style: normal;
  }
 
}
</style>

