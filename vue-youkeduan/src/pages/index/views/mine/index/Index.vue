<template>
    <div class="mine">
        <div class="top-container pr-47 pl-32 mb-4">
            <div class="tc fw8 f-28 mt-26 mb-50">我的</div>
            <div class="info">
                <div class="flex flex-row justify-between ">
                    <div class="flex flex-row mt-5">
                        <div class="photo mr-26">头像</div>
                        <div>
                            <div class="name f-24 fw8 mb-19">{{data.userInfo.name}}</div>
                            <div class="flex flex-row lh-24 f-24 light-silver mb-23">
                                <i class="iconfont icon-dianhua"></i>
                                <div class="phone pr-18 mr-18 ml-12">{{data.userInfo.phone}}</div>
                                <i class="iconfont icon-location"></i>
                                <div class="local ml-12">{{data.userInfo.location}}</div>
                            </div>
                            <div class="flex flex-row f-22 golden lh-24 mb-20">
                                <div class="tag br-4 mr-8 pt-5 pb-5 pl-19 pr-19" v-for="item in data.userInfo.tag" :key="item">{{item}}</div>
                            </div>
                        </div>
                    </div>
                    <div><i class="iconfont icon-bianji f-32 golden"></i></div>
                </div>
            </div>
        </div>
        <div class="pl-46">
            <div v-for="item in data.list" :key="item.title">
                <div class="flex flex-row group items-center">
                    <i :class='`iconfont icon-${item.icon}`'></i>
                    <div class="ml-12 flex-1">
                        <div>
                            <my-cell is-link :title="item.title" :to="item.link" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import{
    Cell
} from 'mint-ui'
import { mapState, mapActions } from 'vuex'
export default {
    computed: {
        ...mapState({
        data:state => state.index.mine
        })
    } ,
    components:{
        myCell:Cell
    }
}
</script>
<style lang='scss' scoped>
    @import "../../../css/function";
    .mine{
        .top-container{
        border-bottom:7px solid rgb(243,243,243);
        }
        .photo{
            width:rem(126);
            height: rem(126);
            border-radius: rem(63);
            background:#ccc;
            overflow: hidden;
        }
        .phone{
            border-right: rem(2) solid black;
            height: rem(24);
        }
        .tag{
            border: rem(2) solid rgb(228,204,161);
        }
        .group{
            height: rem(86);
        }
    }
</style>


