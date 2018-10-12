<template>
    <form-container 
      submit-title="确定" 
      :handleSubmit="handleSubmit"
      :isActive="isActive"
      >
      <input-cell 
        :formdata="nickname" 
        :handleInputChange="(e)=>{handleInputChange(e,'nickname')}"
        icon="ren"
        placeholder="昵称"
      />
      <input-cell 
        :formdata="area" 
        :handleInputChange="(e)=>{handleInputChange(e,'area')}"
        icon="location1"
        placeholder="所在地"
      />
       <input-cell 
        :formdata="sex" 
        :handleInputChange="(e)=>{handleInputChange(e,'sex')}"
        icon="xingbie"
        placeholder="性别"
      />
      <input-cell 
        :formdata="mobile" 
        :handleInputChange="(e)=>{handleInputChange(e,'mobile')}"
        icon="phone"
        aside="+86"
        placeholder="手机号"
        >
      </input-cell>
      <input-cell 
        :formdata="code" 
        :handleInputChange="(e)=>{handleInputChange(e,'code')}"
        icon="yanzhengma"
        placeholder="验证码"
        :isVerify="true"
        :getCode="getCode"
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
import FormContainer from '../../login/components/FormContainer'
import InputCell from '../../login/components/InputCell'
import api from '@/pages/index/api'
export default {
  data(){
    return {
      nickname:"",
      area:"",
      sex:"",
      mobile:"",
      code:"",
      password:"",
      isSecret:true,
    }
  },
  components:{
    FormContainer,
    InputCell
  },
  computed:{
    isActive:function(){
      const { nickname, area,sex,mobile,code,password} = this
      if(nickname!==''&& area!==''&&sex!==''&&mobile!==''&&code!==''&&password!==''){
        return true
      }
      return false
    }
  },
  methods:{
    handleInputChange(value,type){
      this[type] = value
    },
    async getCode(){
      const {mobile} = this
      const data = {action:'reg_code',mobile}
      const res = await api.getRegisterCode(data)
      this.code = res.data
    },
    async handleSubmit(){
      if(this.isActive){
        const {nickname, area, sex, mobile, code, password } = this
        const res = await api.register()
        if(res.message === '操作成功'){
          localStorage.token = res.data.token
          this.$router.push('/registerhoby')
        }
      }
    }
   
  }
}
</script>
<style lang="scss" scoped>
@import "../../../css/function";

</style>

