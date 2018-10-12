<template>
    <div class="mine-xuqiu-container">
        <my-header title="增加需求" :is-back="true"></my-header>
            <my-cell 
                v-for="item in cellList" 
                :key="item.key" 
                :title="item.title" 
                :type="item.type"
                :formKey="item.key"
                :callBack="changeFormData"
                :value="formData[item.key]"
            />
        <div class="confirm">完成</div>
    </div>
</template>

<script>
import MyHeader from '@/pages/index/components/Header'
import CellWithIconTitleContent from './CellWithIconTitleContent'
import { mapState, mapActions } from 'vuex'
export default {
    components:{
        MyHeader,
        myCell: CellWithIconTitleContent
    },
    data(){
        return {
            cellList:[
                {title:'目的地',type:'text',key:'location'},
                {title:'出发日期',type:'date',key:'startDate'},
                {title:'返程日期',type:'date',key:'endDate'},
                {title:'成人',tip:'12周岁以上',type:'num',key:'adult'},
                {title:'儿童',tip:'2-12周岁',type:'num',key:'child'},
                {title:'备注',type:'text',key:'remark'}
            ],
            formData:{
                location:'',
                startDate:'',
                endDate:'',
                adult:0,
                child:0,
                remark:''
            }
        }
    },
    methods:{
        changeFormData(key,value){
            this.formData[key] = value
        }
    },
    computed:{
         ...mapState({
        data:state => state.mine.addXuqiu
        })
    },
    updated(){
        console.log(this.formData)
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
    .confirm{
        background:#dec190;
        position: fixed;
        bottom:0;
        width:100%;
        height: rem(100);
        text-align: center;
        line-height: rem(100);
        font-size: rem(34);
        color:#fff;
        font-weight: 800;
    }
}


</style>

