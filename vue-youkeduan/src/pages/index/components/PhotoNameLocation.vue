<template>
    <div>
       <div class="photo mb-26">{{data.photo}}</div>
       <div class="tc fw8 name f-28 mb-13">{{data.name}}</div>
       <div class="location f-20 tc">{{data.location}}</div>
    </div>
</template>

<script>

export default {
    props:['data'],
}
</script>
<style lang="scss" scoped>
@import '../css/function';
.photo{
    height: rem(100);
    width: rem(100);
    background:#ccc;
    border-radius: rem(50);
    overflow: hidden;
    margin-left:auto;
    margin-right:auto;
}
.name{
    color:#333;
}
.location{
    color:#aaa

}
</style>

