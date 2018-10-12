<template>
  <div class="content">
      <img src="@/pages/index/images/productdetail.png" alt="">
      <div class="information">
        <div class="f-22 pt-30 pb-30" style="color:#333;">
          曲径通幽，一缕清香钻入鼻腔
        </div>
        <div class="f-20 pl-74 pr-74 lh-36" style="color:#b3b3b3;">
          木质的风格浸染了岁月的痕迹，暖黄的光将我们拥入怀内，一幅优雅的题字寥寥数语述说着隐匿的故事。
        </div>
        <div class="f-28 mt-24" style="color:#000;">
          /远离城市的喧嚣，在氤氲享受一份宁静/
        </div>
      </div>
      
        <my-footer :footerList="footerList" :alterDialog="dialogVisibily" leftLink="/shop_detail"/>
        <my-popup :type='type' :dataList="dataList"></my-popup>
  </div>
</template>
<script>
import BottomFooter from "@/pages/index/components/BottomFooter"
import Popup from "@/pages/index/components/Popup"
import { mapState, mapActions } from 'vuex'
export default {
  name: 'ProductDetail',
  data(){
    return{
      type:false,
      dataList:{
        first:{
          title:"1人次",
          id:1
          },
        second:{
          title:"亲自套餐（2大1小）",
          id:2
          },
        three:{
          title:"成人套餐（2位）",
          id:3
          },
      },
      footerList:{
        titleLeft:"查看商家详情",
        titleRight:"购买"
    }
    }
  },
  computed: {
  ...mapState({
    data:state => state.home.productDetail
  })
  } ,
  components:{
    myFooter:BottomFooter,
    myPopup:Popup
  },
  created(){
    // console.log(this.data)
  },
  methods:{
    ...mapActions('productDetail',['changeState']),
    dialogVisibily(){
      this.type = !this.type
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../../css/function';
  .content{
    img{
      width:100%;
      height: rem(775);
    }
    .information{
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
    .footer{
      height: rem(98);
      position: fixed;
      bottom: 0;
      width: 100%;
      text-align: center;
      box-shadow: rem(10) rem(10) rem(30) #000;
      div{
        width: 50%;
        line-height: rem(98);
      }
    }
  }
</style>
