<template>
    <div class="content">
        <div class="flex justify-between header-top pl-30 pr-30">
            <div class="pt-30">
                <i class="iconfont icon-sousuo"></i>
            </div>
            <div>
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
        <quan-quan></quan-quan>
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
import { mapState, mapActions } from 'vuex'
import Popup from "../components/Popup"
import QuanQuan from "../../home/guide_detail/quanquan"

export default {
     components:{
         mtPopup:Popup,
         QuanQuan
    },
     computed:{
        ...mapState({
            data: state => state.index.circles
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
        .header-top{
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

