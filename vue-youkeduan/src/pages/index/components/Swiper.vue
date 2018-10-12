<template>
    <div class="swiper">
        <swipe :auto="4000">
            <swipe-item>
                <router-link to="www.baidu.com">
                    <img src="@/pages/index/images/banner@2x.png">
                </router-link>
            </swipe-item>
            <swipe-item>
                <router-link to="www.baidu.com">
                    <img src="@/pages/index/images/banner1.png">
                </router-link>
            </swipe-item>
        </swipe>
    </div>
</template>

<script>
import {
 Swipe, 
 SwipeItem
} from 'mint-ui'
import {mapState,mapActions} from 'vuex' 
export default {
    name: 'swiper',
    components:{
       Swipe,
       SwipeItem
    },
    created(){
      
    },
    computed:{

    },
    methods:{
        changeTab(id){
        this.selected = id
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../css/function";
    .swiper{
        height: rem(426);
        padding:0 rem(30);
        .mint-swipe{
            img{
                width: 100%;
                height: rem(400);
            }
            .mint-swipe-indicators{
                .mint-swipe-indicator{
                    width: rem(26);
                    height: rem(6);
                }
            }
        }
    }
    
</style>


