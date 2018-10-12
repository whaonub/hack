<template>
    <form-container 
      submit-title="确定" 
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
        :handleInputChange="(e)=>{handleInputChange(e,'verify')}"
        icon="yanzhengma"
        placeholder="验证码"
        :isVerify="true"
        >
      </input-cell>
      <input-cell 
        :formdata="passWord" 
        :handleInputChange="(e)=>{handleInputChange(e,'passWord')}"
        icon="42"
        placeholder="密码"
        :isSecret="isSecret"
        >
      </input-cell>
    </form-container>
</template>
<script>
import FormContainer from '../../login/components/FormContainer'
import InputCell from '../../login/components/InputCell'
export default {
  data(){
    return {
       userPhone:'',
       verify:'',
       passWord:'',
       isSecret:true
    }
  },
  components:{
    FormContainer,
    InputCell
  },
  computed:{
    isActive:function(){
      if(this.userPhone !== '' &&this.passWord !== ''&&this.verify !== ''){
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
      console.log(this.userPhone,this.passWord,this.verify)
    },
   
  }
}
</script>
<style lang="scss" scoped>
@import "../../../css/function";

</style>

