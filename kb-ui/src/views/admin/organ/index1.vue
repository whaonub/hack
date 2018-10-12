`<template>
  <div class="app-container calendar-list-container">
    <div class="filter-container text-center">
        <el-button type="primary" plain  size='small'>刷新</el-button>
        <el-button type="success" plain size='small'>增加</el-button>
        <el-button type="warning" plain size='small'>修改</el-button>
        <el-button type="danger" plain size='small'>删除</el-button>
        <el-button type="primary"  size='small'>查询</el-button>
    </div>

    <div class="organ-content">
      <el-card class="box-card">
          <el-form :inline="true" :model="formInline"   size='mini' label-width='150px'>
            <el-form-item label="机构编码" required>
              <el-input v-model="formInline.data1" placeholder=""></el-input>
            </el-form-item> 
            <el-form-item label="机构名称" required>
               <el-input v-model="formInline.data2" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="机构英文简称">
              <el-input v-model="formInline.data3" placeholder=""></el-input>
            </el-form-item>
            <el-form-item label="机构简称" required>
              <el-input v-model="formInline.data4" placeholder=""></el-input>
            </el-form-item> 
            <el-form-item label="机构级别" required>
              <el-input placeholder="请输入内容" v-model="formInline.data5" class="mini-input-width input-with-select">
                  <el-select v-model="formInline.data5" slot="prepend" placeholder="请选择">
                    <el-option label="一级" value="1"></el-option>
                    <el-option label="二级" value="2"></el-option>
                    <el-option label="三级" value="3"></el-option>
                  </el-select>
                </el-input>
            </el-form-item>
            <br>
            <el-form-item label="上级机构编码" required>
              <el-input v-model="formInline.data6" placeholder="" class="mini-input-width">
                 <el-button slot="append" icon="el-icon-search" type='success'></el-button>
              </el-input>
            </el-form-item>
             <el-form-item label="上级机构名称">
              <el-input v-model="formInline.data7" placeholder="">
              </el-input>
            </el-form-item>
            <el-form-item label="所在省" required>
             <el-input  v-model="formInline.data8" class="mini-input-width input-with-select">
                  <el-select v-model="formInline.data8" slot="prepend" placeholder="请选择">
                    <el-option label="湖北" value="1"></el-option>
                    <el-option label="安徽" value="2"></el-option>
                    <el-option label="北京" value="3"></el-option>
                  </el-select>
                </el-input>
            </el-form-item>
            <el-form-item label="所在市" required>
               <el-input  v-model="formInline.data9" class="mini-input-width input-with-select">
                  <el-select v-model="formInline.data9" slot="prepend" placeholder="请选择">
                    <el-option label="武汉" value="1"></el-option>
                    <el-option label="合肥" value="2"></el-option>
                    <el-option label="孝感" value="3"></el-option>
                  </el-select>
                </el-input>
            </el-form-item>
            <el-form-item label="所在县" required>
              <el-input  v-model="formInline.data10" class="mini-input-width input-with-select">
                  <el-select v-model="formInline.data10" slot="prepend" placeholder="请选择">
                    <el-option label="硚口区" value="1"></el-option>
                    <el-option label="汉口区" value="2"></el-option>
                    <el-option label="武昌区" value="3"></el-option>
                  </el-select>
                </el-input>
            </el-form-item>
            <el-form-item label="地址">
              <el-input v-model="formInline.data11" placeholder="">
              </el-input>
            </el-form-item>
            <el-form-item label="机构负责人姓名">
              <el-input v-model="formInline.data12" placeholder="">
              </el-input>
            </el-form-item>
            <el-form-item label="机构邮编">
              <el-input v-model="formInline.data13" placeholder="">
              </el-input>
            </el-form-item>
            <el-form-item label="机构电话">
              <el-input v-model="formInline.data14" placeholder="">
              </el-input>
            </el-form-item>
            <el-form-item label="机构传真">
              <el-input v-model="formInline.data15" placeholder="">
              </el-input>
            </el-form-item>
            <el-form-item label="成立日期" required>
              <el-date-picker
                v-model="formInline.data16"
                type="date"
                placeholder="选择日期" class="mini-input-width">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="停业标志" required>
               <el-input  v-model="formInline.data17" class="mini-input-width input-with-select" placeholder=''>
                  <el-select v-model="formInline.data17" slot="prepend" placeholder="请选择">
                    <el-option label="是" value="Y"></el-option>
                    <el-option label="否" value="N"></el-option> 
                  </el-select>
                </el-input>
            </el-form-item>
            <el-form-item label="是否收单位抵押金" required> 
             <el-input  v-model="formInline.data18" class="mini-input-width input-with-select" placeholder=''>
                  <el-select v-model="formInline.data18" slot="prepend" placeholder="请选择">
                    <el-option label="是" value="Y"></el-option>
                    <el-option label="否" value="N"></el-option> 
                  </el-select>
                </el-input>
            </el-form-item>
            <el-form-item label="是否有结算权" >
              <el-input  v-model="formInline.data19" class="mini-input-width input-with-select" placeholder=''>
                  <el-select v-model="formInline.data19" slot="prepend" placeholder="请选择">
                    <el-option label="是" value="Y"></el-option>
                    <el-option label="否" value="N"></el-option> 
                  </el-select>
                </el-input>
            </el-form-item>
            <el-form-item label="是否开启短信服务" >
              <el-input  v-model="formInline.data20" class="mini-input-width input-with-select" placeholder='编码'>
                  <el-select v-model="formInline.data20" slot="prepend" placeholder="请选择">
                    <el-option label="是" value="Y"></el-option>
                    <el-option label="否" value="N"></el-option> 
                  </el-select>
                </el-input>
            </el-form-item>
          </el-form>
      </el-card>
    </div>  
 
  </div>
</template>

<script>
  
  import { mapGetters } from 'vuex'
  export default {
    name: 'menu',
    data() {
      return {
         formInline: {
          data1: '',
          data2: '',
          data4: '',
          data5: '',
          data6: '',
          data7: '',
          data8: '',
          data9: '',
          data10: '',
          data11: '',
          data12: '',
          data13: '',
          data14: '',
          data15: '',
          data16: '',
          data17: '',
          data18: '',
          data19: '',
          data20: '',
           
        }
      }
    },
    filters: {
      
    },
    created() {
       
    },
    computed: {
      ...mapGetters([
        'elements',
        'permissions'
      ])
    },
    methods: {
    }
  }
</script>
<style lang="scss">
.organ-content{
  .text-center{
    text-align: center;
  }
  .el-form-item--mini.el-form-item, .el-form-item--small.el-form-item {
      margin-bottom: 12px;
  }
  .mini-input-width{
    width:178px;
  }
  .el-select .el-input {
      width:80px;
      input{
        padding:0 10px;
        padding-right: 25px;
      }
    }
}


  
</style>


