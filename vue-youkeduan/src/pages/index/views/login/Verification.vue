<template>
    <form-container 
      submit-title="登陆" 
      :handleSubmit="handleSubmit"
      :isActive="isActive"
      >
      <input-cell 
        :formdata="userPhone" 
        :handleInputChange="(e)=>{handleInputChange(e,'userPhone')}"
        icon="phone"
        aside="+86"
        placeholder="手机号"
        >
      </input-cell>
      <input-cell 
        :formdata="passWord" 
        :handleInputChange="(e)=>{handleInputChange(e,'passWord')}"
        icon="yanzhengma"
        placeholder="验证码"
        :isVerify="true"
        >
      </input-cell>
    </form-container>
</template>
<script>
import FormContainer from './components/FormContainer'
import InputCell from './components/InputCell'
export default {
  data(){
    return {
       userPhone:'',
       passWord:'',

    }
  },
  components:{
    FormContainer,
    InputCell
  },
  computed:{
     isActive:function(){
      if(this.userPhone !== '' &&this.passWord !== ''){
        return true
      }
      return false
    }
  },
  methods:{
    handleInputChange(value,type){
      this[type] = value
    },
    handleSubmit(){
      console.log(this.userPhone,this.passWord)
    },
  }
}
</script>
<style lang="scss" scoped>
@import "../../css/function";

</style>

