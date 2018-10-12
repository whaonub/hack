<template>
    <div class="information">
        <mt-header title="报名">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="in-form">
            <div>
                <label>产品</label><span>云南7日游</span>
            </div>
            <div>
                <label>地区</label><span>北京</span>
            </div>
            <div>
                <label><span>*</span>出发日期</label>
                <input id='start' type="text" placeholder="请选择" name='start' @click='openPicker("start")' v-model='startTime'>
            </div>
            <div>
                <label><span>*</span>返程日期</label>
                <input id='end' type="text" placeholder="请选择" name='end' @click='openPicker("end")' v-model='endTime'> 
            </div>
            <div class="number">
                <label><span>*</span>成人(12周岁以上)</label>
                <div class="adult">
                    <span>-</span>
                    <span>0</span>
                    <span>+</span>
                </div>
            </div>
            <div class="number">
                <label>儿童(2-12周岁)</label>
                <div class="children">
                    <span>-</span>
                    <span>0</span>
                    <span>+</span>
                </div>
            </div>
        </div>
        <div class="title-say">
            说明：成人+儿童总数量不超过人数限制
        </div>
        <div class="remarks">
            <div>备注</div>
            <textarea placeholder="如有其他需求，请说明"></textarea> 
        </div>
        <div class="agree">
            <input type="checkbox" id="mustkown"><label for="mustkown">我已阅读并接受</label>
            <router-link to="">《预定须知和合同规范》</router-link>
        </div>
        <div class="footer">
            <div class="total">
                <label style="font-size:12px;color:rgb(51,51,51);">总额</label>
                <span style="font-size:23px;color:rgb(0,0,0);">￥268</span>
            </div>
            <div class="next">
                <div style="font-size:15px;">下一步</div>
                <div style="font-size:10px;">填写出行人信息</div>
            </div>
        </div>
        <mt-datetime-picker
            v-model="pickerVisible"
            type="date"
            ref="picker"
            year-format="{value} 年"
            month-format="{value} 月"
            date-format="{value} 日"
            @confirm="handleConfirm"
            >
        </mt-datetime-picker>
    </div>
</template>
<script>
import {
  Header,
  Button,
  Navbar,
  tabItem,
  DatetimePicker 
} from 'mint-ui'
import moment from 'moment'

export default {
  data(){
    return {
        pickerVisible:'',
        startTime:'',
        endTime:'',
    }
  },
  components:{
    mtHeader:Header,
    mtButton:Button,
    mtNavbar:Navbar,
    mtTabItem:tabItem,
    mtDatetimePicker:DatetimePicker 
  },
  methods:{
      openPicker(type) {
        this.type=type;
        this.$refs.picker.open();
      },
      handleConfirm(data) {
        let date = moment(data).format('YYYY-MM-DD');
        if(this.type=='start'){
          this.startTime = date;
        }
        if(this.type == 'end'){
          this.endTime = date;
        }
      }
  }
}
</script>
<style lang="scss" scoped>
@import "../../css/function";
.information{
   .mint-header{
       padding: 0 rem(30);
       background: #fff;
       color: rgb(0,0,0);
       font-size: rem(30);
       height: rem(88);
       .mintui.mintui-back{
           color: #000;
       }
   }
   .in-form{
       padding: 0 rem(30);
       div{
           display: flex;
           height: rem(88);
           line-height: rem(88);
           font-size: rem(28);
           color: rgb(51,51,51);
           border-bottom: rem(2) solid rgb(241,241,241);
           label{
               width: rem(240);
               span{
                   color: red;
                   position: relative;
                   top: rem(4);
                   margin-right: rem(6);
               }
           }
           input{
               border: 0;
           }
       }
       .number{
           justify-content: space-between;
           align-items: center;
           div{
               display: flex;
               justify-content: space-around;
               width: rem(146);
               height: rem(37);
               line-height: rem(37);
               border: 0;
               color: rgb(51,51,51);
               span{
                   width: rem(50);
                   font-size: rem(28);
                   text-align: center;
                   border: rem(2) solid rgb(241,241,241);
               }
           }
       }
   }
   .title-say{
       height: rem(54);
       line-height: rem(54);
       padding-left: rem(30);
       background: rgb(248,248,248);
       font-size: rem(20) 
   }
   .remarks{
       padding: rem(30);
       font-size: rem(28);
       textarea{
           width: 100%;
           height: rem(180);
           border:0;
           border-bottom: rem(2) solid rgb(241,241,241);
           outline: 0; 
       }
   }
   .agree{
       padding: rem(140) rem(30) rem(51);
       font-size: rem(24);
       color: rgb(153,153,153);
       input{
           height: rem(24);
           background: #fff;
           position: relative;
           top: rem(4);
       }
       a{
           color: rgb(222,193,144);
       }
   }
   .footer{
       display: flex;
       justify-content: space-between;
       align-items: center;
       height: rem(132);
       position: fixed;
       bottom: 0;
       width: 100%;
       box-shadow: 10px 10px 27px rgb(0,0,0);
       .total{
           padding-left:rem(30); 
           line-height: rem(132);
       }
       .next{
           margin-right: rem(30);
           display: flex;
           flex-direction: column;
           justify-content: center;
           align-items: center;
           width: rem(400);
           height: rem(90);
           background: rgb(222,193,144);
           color: #fff;
       }
   }
}
</style>

