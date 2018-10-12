<template>
    <form-container 
      submit-title="登陆" 
      :handleSubmit="handleSubmit"
      :isActive="isActive"
      >
      <input-cell 
        :formdata="mobile" 
        :handleInputChange="(e)=>{handleInputChange(e,'mobile')}"
        icon="phone"
        aside="+86"
        placeholder="手机号"
        >
      </input-cell>
      <input-cell 
        :formdata="password" 
        :handleInputChange="(e)=>{handleInputChange(e,'password')}"
        icon="42"
        placeholder="密码"
        :isSecret="isSecret"
        >
      </input-cell>
    </form-container>
</template>
<script>
import FormContainer from './components/FormContainer'
import InputCell from './components/InputCell'
import api from '@/pages/index/api'
export default {
  data(){
    return {
       mobile:'',
       password:'',
       isSecret:true
    }
  },
  components:{
    FormContainer,
    InputCell
  },
  computed:{
     isActive:function(){
      if(this.mobile !== '' &&this.password !== ''){
        return true
      }
      return false
    }
  },
  methods:{
    handleInputChange(value,type){
      this[type] = value
    },
    async handleSubmit(){
      const {mobile,password} = this
      const res = await api.login({mobile,password})
      // if(res.message === '操作成功'){
        this.$router.push('/home')
      // }
    },
  }
}
</script>
<style lang="scss" scoped>
@import "../../css/function";

</style>

