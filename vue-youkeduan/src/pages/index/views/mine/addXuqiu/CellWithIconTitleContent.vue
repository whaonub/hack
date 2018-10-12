<template>
    <div class="cell-with-icon-title-content-container flex flex-row items-center light-silver">
        <div class="flex flex-row ml-24 border-bottom-f5 items-center flex-1"> 
            <div class="flex flex-row title">
                <div class="f-30">{{title}}</div>
                <div v-if="tip" class="f-20 lh-45">({{tip}})</div>:
            </div>
            <div class="fw-30 black">
                <input type="text" class="cell-input" placeholder="请输入" v-if="type === 'text'" @change="handleInputChange" :value="value"/>
                <div v-if="type === 'date'" class="middle-silver" @click="changeDatePickShow">{{value||'请选择'}}</div>
                <div v-if="type === 'num'" class="flex flex-row justify-end border tc">
                    <div @click="mulNum" class="h-30 w-30 lh-30">-</div>
                    <div class="bl-and-br h-30 w-30 lh-30">{{value}}</div>
                    <div @click="addNum" class="h-30 w-30 lh-30">+</div>
                </div>
                <my-datetime-picker
                    ref="picker"
                    type="date"
                    year-format="{value} 年"
                    month-format="{value} 月"
                    date-format="{value} 日"
                    v-model="pickerValue"
                    @confirm="handleConfirm"
                    :startDate="startDate"
                    >
                </my-datetime-picker>
                <!-- <button>-</button> -->
                <!-- <button>+</button> -->
            </div>
        </div>
    </div>
</template>
<script>
import { DatetimePicker } from 'mint-ui';
import moment from 'moment';
export default {
    props:['title','tip','type','formKey','callBack','value'],
    data(){
        return {
            pickerValue:'',
            startDate:moment()._d,
        }
    },
    components:{
        MyDatetimePicker: DatetimePicker
    },
    methods:{
        changeDatePickShow:function(){
            this.$refs.picker.open()
        },
        handleConfirm:function(e){
            const date = moment(e).format('YYYY-MM-DD')
            this.callBack(this.formKey,date)
        },
        handleInputChange:function(e){
            const value = e.target.value
            this.callBack(this.formKey,value)
        },
        addNum:function(){
            let value = this.value
            value ++
            this.callBack(this.formKey,value)
        },
        mulNum:function(){
            let value = this.value
            value>0?value --:
            this.callBack(this.formKey,value)
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../../css/function';
.cell-with-icon-title-content-container{
    height: rem(86);
    .title{
        width:rem(160)
    }
    .border-bottom-f5{
        border-bottom: rem(2) solid #f5f5f5;
        // border-bottom: rem(2) solid #f00;
        height:rem(84)
    }
    .cell-input{
        border:none;
        display: block;
        line-height:rem(47);
        width:rem(430);
    }
    .middle-silver{
        color:#777;
    }
    .border{
        border:rem(2) solid #ccc;
    }
    .bl-and-br{
        border-left: rem(2) solid #ccc;
        border-right: rem(2) solid #ccc;
    }
    .h-30{
        height: rem(40);
    }
    .w-30{
        width:rem(40);
    }
}

</style>

