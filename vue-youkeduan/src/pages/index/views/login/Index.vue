<template>
    <div class="login-container white flex flex-column">
      <black-header />
      <nav-bar :data="tabs" :currentTab="currentTab" :changeCurrentTab="changeCurrentTab"/>
      <div class="pt-72">
        <Account  v-if="currentTab === 1" />
        <Verification v-else/>
      </div>
      <div class="pt-50 flex flex-column justify-between items-center flex-1">
        <div class="mt-50 fw-24">
          <router-link to='/register' class="link mr-40">还没有账号,去注册</router-link>
          <router-link to='/resetpassword' class="link">忘记密码?</router-link>
        </div>
        <div class="flex flex-column items-center">
          <div class="f-28 color-666 mb-30">第三方登陆</div>
          <div>
            <router-link to="/registerbyweixin" class="link">
              <i class="iconfont icon-weixin f-48"></i>
            </router-link>
          </div>
          <div class="mb-26 mt-46">如需帮助,请联系客服 <i class="golden">400-xxxx-xxxx</i></div>
        </div>
      </div>
    </div>
</template>
<script>
import Account from './Account'
import Verification from './Verification'
import BlackHeader from './components/BlackHeader'
import NavBar from './components/NavBar'
export default {
  data(){
    return {
       currentTab :1,
       tabs:[
         {title:'账号登陆',id:1},
         {title:'验证登陆',id:2},
       ]
    }
  },
  components:{
    Account,
    Verification,
    BlackHeader,
    NavBar
  },
  methods:{
      back:function(){
        this.$router.back(-1)
      },
      changeCurrentTab(id){
        this.currentTab = id
      }
  }
}
</script>
<style lang="scss" scoped>
@import "../../css/function";
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

