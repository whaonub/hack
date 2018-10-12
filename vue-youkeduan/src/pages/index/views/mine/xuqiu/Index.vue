<template>
    <div class="mine-xuqiu-container">
        <my-header title="我的需求" addLink="/mine/addxuqiu" :is-back="true"></my-header>
        <div class="mine-xuqiu-img">
            {{data.img}}
        </div>
        <div v-for="item in data.list" :key="item.id" class="pl-24 cell-container">
            <my-cell  
            v-for="c in cellList" 
            :key="c.icon" 
            :data="item[c.data]" 
            :icon="c.icon" 
            :title="c.title"
            :tip="c.tip"
            />
            <div class="flex flex-row justify-center pr-24 f-32 lh-60 mb-22">
                <div class="removbtn  pl-32 pr-32 mr-32">删除</div>
                <div class="changebtn white pl-32 pr-32">修改</div>
            </div>
        </div>

    </div>
</template>

<script>
import MyHeader from '@/pages/index/components/Header'
import MyNavbar from '@/pages/index/components/Navbar'
import CellWithIconTitleContent from '@/pages/index/components/CellWithIconTitleContent'
import { mapState, mapActions } from 'vuex'
export default {
    components:{
        MyHeader,
        myNavbar: MyNavbar,
        myCell: CellWithIconTitleContent
    },
    data(){
        return {
            cellList:[
                {icon:'home',title:'目的地',data:'location'},
                {icon:'riliriqi2',title:'往返日期',data:'date'},
                {icon:'renxiang',title:'成人',tip:'12周岁以上',data:'adult'},
                {icon:'ertong',title:'儿童',tip:'2-12周岁',data:'child'},
                {icon:'beizhu',title:'备注',data:'remark'},
                
            ]
        }
    },
    computed:{
         ...mapState({
        data:state => state.mine.xuqiu
        })
    }
}
</script>
<style lang="scss" scoped>
@import '../../../css/function';
.mine-xuqiu-container{
    
    .mine-xuqiu-img{
        height: rem(176);
        background:pink;
    }
    .cell-container{
    border-top: rem(20) solid #f3f3f3;
    }
    .removbtn{
        background:#fff;
        color:#676767;
    }
    .changebtn{
        background:#dec190;
        border-radius: rem(6);
    }
}


</style>

