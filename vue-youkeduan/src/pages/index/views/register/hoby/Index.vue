<template>
    <div class="register-hoby-container flex flex-column items-center">
      <div class="mt-80 f-40 mb-35">添加你的兴趣</div>
      <div class="f-30 light-silver">请选择至少两个</div>
      <div class="mt-80 flex flex-row justify-between flex-wrap hoby">
        <div v-for="item in data.list" :key="item">
          <register-hoby-cell 
          :data="item" 
          :changeChecked="changeChecked"
          :isChecked="checkedList[item]"
          />
        </div>
        <div v-if="data.list.length%3 === 1" class="emptycell"></div>
        <div v-if="data.list.length%3 > 0" class="emptycell"></div>
      </div>
      <div class="flex-1 flex flex-column justify-end items-center bg-white" style="position:absolute;bottom:0;">
        <div class="bottom flex flex-column items-center pt-20 pb-22">
          <div class="btn f-32 tc" @click="gotonext">下一步</div>
        </div>
      </div>
    </div>
</template>
<script>
import { mapState, mapActions,mapGetters } from 'vuex'
import HobyCell from './HobyCell'
import api from '@/pages/index/api'
export default {
  data(){
    return {
      checkedList:{

      }
    }
  },
  components:{
   RegisterHobyCell: HobyCell
  },
  computed: {
    ...mapState({
      data:state => state.register.registerHoby,
    }),
  },
  beforeCreate(){
    this.$store.dispatch('registerHoby/getData')
  },
  methods:{
    ...mapActions('registerHoby', ['getData']),
    changeChecked(name){
      this.$set(this.checkedList,name,!this.checkedList[name])
    },
    async gotonext(){
      const uploadData = []
      for(let i in this.checkedList){
        if(this.checkedList[i]){
          uploadData.push(i)
        }
      }
      if(uploadData.length >=3){
        const res = await api.addLabel({label:uploadData})
        if(res.message === '操作成功'){
          console.log(res.message)
          this.$router.push('/registercircles')
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../../css/function";
.register-hoby-container{
  width:100vw;
  height: 100vh;
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
}
</style>

