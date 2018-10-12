<template>
    <div class="register-product-container">
      <my-header title="选择你喜欢的产品" :is-back="true"/>
        <div class="pt-38 pl-30 pr-30 pb-100 product-container" >
          <my-product 
            v-for="item in data.list" 
            :key="item.id"
            :data="item" 
            :changeChecked="changeChecked"
            :isChecked="checkedList[item.id]"
          />
        </div>
      <div class="bottom">
        <div class="btn f-32 tc btn" @click="gotonext">开始旅程</div>
      </div>
    </div>
</template>
<script>
import { mapState, mapActions,mapGetters } from 'vuex'
import MyHeader from '@/pages/index/components/Header'
import MyProduct from './Product'
export default {
  data(){
    return {
      checkedList:{

      }
    }
  },
  components:{
   MyHeader,
   MyProduct
  },
  computed: {
    ...mapState({
      data:state => state.register.registerProduct,
    }),
  },
  methods:{
     changeChecked(id){
       this.$set(this.checkedList,id,!this.checkedList[id])
    },
    gotonext(){
      this.$router.push('/home')
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../../css/function";
.register-product-container{
  width:100vw;
  .product-container{
    min-height: 100vh;
    background:#f3f3f3;
  }
  .hoby{
    padding:0 rem(66);
  }
  .emptycell{
    width:rem(180);
  }
  .bottom{
    border-top: rem(2) solid #f3f3f3;
    background:#fff;
    position: fixed;
    bottom:0;
    left: 0;
    right: 0;
    width:100vw;
    padding: rem(20) 0;
    .btn{
      margin:auto;
      width:rem(516);
      height: rem(78);
      border-radius: rem(26);
      background:#e6e6e6;
      line-height: rem(78);
      color:#fff;
      font-weight: 800;
    }
  }
}
</style>

