<template>
    <div class="content pt-2">
      <div class="flex justify-between header-top pl-30 pr-30">
            <div class="pt-30">
                <i class="iconfont icon-sousuo"></i>
            </div>
            <div>
                <div style="text-align:center;" class="b mt-40 f-30">
                    话题
                </div>
                <div class="condition">
                    <div v-for="item in data.guideSelectList" :key="item.id">
                        <div class="select flex" @click="showItem(item.id)">
                            <div class="lh-60">{{item.title}}</div>
                            <i class="f-40 iconfont" 
                            :class="getClass(item.id,data.currentTab,data.popupVisible)"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pt-30">
                <i class="iconfont icon-xiaoxi"></i>
            </div>
        </div>
      <div class="pl-29 pr-28 mt-10 pt-20 bcell-container" style="background:#fff;" v-for="item in 4" :key="item">
        <router-link to="/circles_circle">           
          <div class="flex justify-between">
            <div class="flex">
                <router-link to="circles_circle" class="photos mr-12">
                    <img class="photos" src="" alt="">
                </router-link>
                <div class="f-24 clr-9">
                    <span>成成</span>
                    |
                    <span>2018-06-08</span>
                </div>
            </div>
                <div class="white f-24 lh-50">
                    <i class="iconfont icon-jia f-17 mr-10"></i>关注
                </div>
          </div>
          <div class="f-28 b mt-30 black">
            手动阀手动阀手动阀手动阀手动阀撒打发士
          </div>
          <div class="f-28 color-666 mt-30 ">
            手动阀手动阀手动阀手动阀手动阀撒打发士大夫啊手动阀手动阀
          </div>
            <div class="flex flex-row items-center mt-20 mb-20">
                <div class="right">
                    <div class="flex flex-row justify-between">
                        <div class="flex">
                            <div v-for="item in 4" :key="item" >
                                <my-tag :data="item"></my-tag>
                            </div>
                        </div>
                        <div class="flex flex-row">
                            <div v-for=" item in 3" :key="item" class="photos ml--2">{{item}}</div>
                            <div class="ml-18 f-24 num"></div>
                        </div>
                    </div>
                </div>
            </div>
        </router-link>
      </div>
      <mt-popup :popupVisible="data.popupVisible">
        <div class="flex slot justify-around items-center" 
            v-for="(item,index) in data.popupData" 
            :key="index"
            :class="index == data.selected ?'selected':''"
            @click="handleClick(index)">
            <div class="f-28" style="#444;">{{item.title}}</div>
        </div>
        <div  @click="closePopup()"  class="sure flex f-32 justify-around items-center white">确定</div>
    </mt-popup>
    </div>
</template>
<script>
import Tag from "@/pages/index/components/Tag"
import { mapState, mapActions } from 'vuex'
import Popup from "../components/Popup"
import QuanQuan from "../../home/guide_detail/quanquan"

export default {
     components:{
         mtPopup:Popup,
         QuanQuan,
         myTag:Tag
    },
     computed:{
        ...mapState({
            data: state => state.circles.circlesTheme
        })
    },
    created() {
        
    },
    methods:{
        ...mapActions('circles',['changeState']),
        showItem(id){
            let leg = id - 1
            this.data.popupVisible = true
            this.data.popupData = this.data.guideSelectList[leg].values
            this.data.currentTab = id
            
        },
       closePopup(){
            this.data.popupVisible = false
        },
        getClass(index,currentTab,type){
            if(index === currentTab && type){
                return "icon-up"
            }else{
                return "icon-down"
            }
        },
        handleClick(index){
            this.data.selected = index
        }
    },
    
}
</script>
<style lang="scss" scoped>
@import "../../../css/function";
  .content{
    background: #f8f8f8;
    .bcell-container{
        height:rem(340);
    }
    .name{
        color:#b6b6b6;
    }
    .photo{
        width: rem(200);
        height: rem(200);
        border-radius: rem(20);
        background:#ccc;
        overflow: hidden;
    }
    .photos{
        width: rem(40);
        height: rem(40);
        border-radius: rem(20);
        background:#ccc;
        overflow: hidden;
    }
    .right{
      width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .content{
        color:#666;
    }
    .ml--2{
        margin-left: rem(-10);
    }
    .num{
        color:#999;
    }
    .white{
      width: rem(112);
      height: rem(50);
      background: #dec190;
      border-radius: rem(8);
      text-align: center;
    }
    .header-top{
        background: #fff;
        .condition{
            display: flex;
            justify-content: space-around;
            margin: rem(24) 0;
            padding: 0 rem(80);
            width: rem(332);
            .select{
                border: 0;
                outline:0;
                font-size: rem(22);
                color: rgb(51,51,51);
            }
        } 
    }
    .slot{
        width: rem(246);
        height: rem(80);
        border: rem(1) solid #eee;
    }
    .sure{
        width: 100%;
        height: rem(80);
        background: #dec190;
        border-radius: rem(20);
    }
    .selected{
        border-bottom:rem(2) solid #dec190;
        color: #dec190;
    }
  }
</style>


