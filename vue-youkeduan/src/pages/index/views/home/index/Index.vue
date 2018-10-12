<template>
    <div class="productHome">
        <navbar v-model="data.currentTab">
            <div class="navContent">
                <div class="position">
                    <i class="iconfont icon-dingwei"></i>
                    <select name="" id="">
                        <option value="" v-for="item in locationList" :key="item.id">{{item.area}}</option>
                    </select>
                </div>
                <div class="tab-item">
                    <tab-item v-for="item in data.list" :id="item.id" :key="item.id">
                        <router-link :to="item.link" class="link">
                            <div @click="changeState({currentTab:item.id})">
                                {{item.title}}
                            </div>
                        </router-link>
                    </tab-item>
                </div>
                <i class="iconfont icon-sousuo"></i>
             </div>
        </navbar>
        <swiper></swiper>
        <div v-if="data.currentTab === 1">
            <div class="condition">
                <select name="" id="" v-for="item in data.joinGroupSelectList" :key="item.name"> 
                    <option v-for="value in item.values" :value="value.value" :key="value.value">{{value.title}}</option>
                </select>
            </div>
            <join-group ></join-group>
        </div>
         <div v-if="data.currentTab === 2">
            <div class="condition">
                <select name="" id="" v-for="item in data.productSelectList" :key="item.name"> 
                    <option v-for="value in item.values" :value="value.value" :key="value.value">{{value.title}}</option>
                </select>
            </div>
            <product v-if="data.currentTab === 2"></product>
        </div>
        <div v-if="data.currentTab === 3">
            <div class="condition">
                <select name="" id="" v-for="item in data.guideSelectList" :key="item.name"> 
                    <option v-for="value in item.values" :value="value.value" :key="value.value">{{value.title}}</option>
                </select>
            </div>
            <guide v-if="data.currentTab === 3"></guide>
        </div>
    </div>
</template>
<script>
import {
  Header,
  Navbar,
  TabItem,
  TabContainer, 
  TabContainerItem 
} from 'mint-ui'
import Swiper from '@/pages/index/components/Swiper'
import Guide from './Guide'
import JoinGroup from './JoinGroup'
import Product from './Product'
import { mapState, mapActions } from 'vuex'
export default {
    name: 'home',
    components:{
        mHeader:Header,
        Navbar,
        TabItem,
        Guide,
        JoinGroup,
        Product,
        Swiper,
    },
    computed:{
        ...mapState({
            data: state => state.index.home,
            locationList: state=> state.index.index.locationList
        })
    },
    updated() {
        console.log(this.locationList)
    },
    methods:{
    ...mapActions('home',['changeState']),
    }
}
</script>
<style lang="scss">
 @import "../../../css/function";
    .productHome{
        .mint-navbar{
            display: flex;
            justify-content: space-between;
            height: rem(88);
            padding-top: rem(27);
            border-bottom: 1px dashed rgb(243,243,243);
            .navContent{
                display: flex;
                justify-content: space-between;
                width: 100%;
                height:rem(50);
                line-height: 1;
                padding:0 rem(30);
                .position{
                    font-size: rem(24);
                    color: rgb(51,51,51);
                }
                .tab-item{
                    display: flex;
                    justify-content: space-around;
                    width: rem(236);
                    a{
                        padding:0;
                        font-size: rem(28);
                        color: rgb(85,85,85);
                    }
                    a.mint-tab-item.is-selected{
                        color: rgb(0,0,0);
                        border-color:rgb(0,0,0); 
                    }
                }
            }
            
        }
    }
    .productHome .condition{
        display: flex;
        justify-content: space-around;
        margin: rem(35) 0;
        padding: 0 rem(80);
        select{
            border: 0;
            outline:0;
            font-size: rem(22);
            color: rgb(51,51,51);
        }
    } 
</style>

