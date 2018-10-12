<template>
    <div class="login-form-container">
        <slot />
        <button 
            :class="`submit fw8 ${isActive?'black bg-white':'color-666 bg-gray'}`"
            @click="handleSubmit">
            {{submitTitle}}
        </button>
    </div>
</template>
<script>
export default {
  props:['submitTitle','handleSubmit','isActive'],
  methods:{
    
  }
}
</script>
<style lang="scss" scoped>
@import "../../../css/function";
.login-form-container{
    background:#222;
    position: relative;
    padding-bottom: rem(114);
    .submit{
        width: rem(662);
        height: rem(88);
        border:0;
        border-radius: rem(10);
        position: absolute;
        bottom: rem(-50);
        margin:0 auto;
        left: 0;
        right: 0;
        font-size: rem(26);
    }
    .bg-white{
        background:#fff;
    }
    .bg-gray{
        background:#323131;
    }
}
</style>

