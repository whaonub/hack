<template>
    <div class="register-hoby-container">
      <my-header title="选择圈圈" :is-back="true"/>
      <div class="pt-38 pl-30 pr-30 pb-100">
        <div v-for="item in data.list" :key="item.id">
          <my-circle 
          :data="item" 
          :changeChecked="changeChecked"
          :isChecked="checkedList[item.id]"
          />
        </div>
      </div>
      <div class="btn f-32 tc btn" @click="gotonext">下一步</div>
    </div>
</template>
<script>
import { mapState, mapActions,mapGetters } from 'vuex'
import Circle from './Circle'
import MyHeader from '@/pages/index/components/Header'
import api from '@/pages/index/api'

export default {
  data(){
    return {
      checkedList:{

      }
    }
  },
  components:{
   MyCircle: Circle,
   MyHeader
  },
  beforeCreate(){
    this.$store.dispatch('registerCircles/getCircleList')
  },
  computed: {
    ...mapState({
      data:state => state.register.registerCircles,
    }),
  },
  methods:{
    ...mapActions('registerCircles', ['getCircleList']),
     changeChecked(id){
       this.$set(this.checkedList,id,!this.checkedList[id])
    },
    async gotonext(){
      // followCircle
      const uploadData = []
      for(let i in this.checkedList){
        if(this.checkedList[i]){
          uploadData.push(i)
        }
      }
      // const res = await api.followCircle({circle_id:uploadData})//此处应传数组
      // const res = await api.followCircle({circle_id:'1'})
      // res.data === '操作成功'&&
      this.$router.push('/registerproduct')
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../../css/function";
.register-hoby-container{
  width:100vw;
  .hoby{
    padding:0 rem(66);
  }
  .emptycell{
    width:rem(180);
  }
  .bottom{
    border-top: rem(2) solid #f3f3f3;
    width:100vw;
    .btn{
      width:rem(516);
      height: rem(78);
      border-radius: rem(26);
      background:#e6e6e6;
      line-height: rem(78);
      color:#fff;
      font-weight: 800;
    }
  }
  .btn{
    position: fixed;
    bottom:rem(20);
    left: 0;
    right: 0;
    margin:auto;
    background:#ccc;
    width:rem(516);
    height: rem(78);
    border-radius: rem(26);
    line-height: rem(78);
    color:#fff;
  }
}
</style>

