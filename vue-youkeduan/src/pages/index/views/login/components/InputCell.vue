<template>
     <div class="flex flex-row justify-between items-center ml-50 mr-50 login-input-cell">
        <div><i :class="`iconfont icon-${icon}`"></i></div>
        <div class="aside ml-17">{{aside}}</div>
        <div class="flex-1">
            <input 
                :type="type" 
                @input="(e)=>{handleInputChange(e.target.value)}" 
                :placeholder="placeholder" 
                class="f-28"
            />
        </div>
        <div v-if="isSecret" @click="changeFormType">
            <i :class="`f-16 iconfont icon-${type === 'password'?'yanjing':'CombinedShape-'}`"></i>
        </div>
        <div 
            v-if="isVerify" 
            :class="`verify-container pl-20 ${verifyData === '获取验证码'?'golden':''}`"
            @click="sendVerify">
            {{verifyData}}
         </div>
    </div>
</template>
<script>
import api from '@/pages/index/api/common'
import {mapState} from 'vuex'
export default {
    props:['formdata','handleInputChange','icon','aside','placeholder','isSecret','changeCecret','isVerify','getCode'],
    data(){
        return {
            type:this.isSecret?'password':'text',
            verifyData:'获取验证码'
        }
    },
    components:{
    },
    methods:{
        changeFormType(){
            this.type === 'password'?this.type = 'text':this.type = 'password' 
        },
        async sendVerify(){
            let time = 60
            const vm = this
            if(this.verifyData === '获取验证码'){
                const timer = setInterval(()=>{
                    time --
                    vm.verifyData = time + 's'
                    if(time === 0){
                        clearInterval(timer)
                        vm.verifyData = '获取验证码'
                    }
                },1000)
                this.getCode()
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../../css/function";
.login-input-cell{
    height: rem(90);
    border-bottom:rem(2) solid #333;
    input{
        background:none;
        color:#fff;
        width:100%;
        height: rem(60);
        border:0;
    }
    .aside{
        width:rem(76);
    }
    .verify-container{
        border-left: rem(2) solid #333;
        width:rem(150);
        text-align: center;
    }
}
   
</style>

