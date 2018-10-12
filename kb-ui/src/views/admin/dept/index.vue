
<template>
  <div class="app-container calendar-list-container">
    <div class="filter-container"> 
      <el-form :inline="true" :model="deptSearchData" class="demo-form-inline" size="small">
        <el-form-item label="机构名称">
          <el-input v-model="deptSearchData.organName" placeholder=""></el-input>
        </el-form-item>
        
        <el-form-item label="机构编码">
          <el-input v-model="deptSearchData.organCode" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="机构级别" prop="comgrade" class="comgrade" >
          <el-input v-model="deptSearchData.organType" class="mini-input-width input-with-select">
            <el-select v-model="deptSearchData.organType" slot="prepend" class="comgradeSelect" clearable>
              <el-option label="区域中心" value="01"></el-option>
              <el-option label="法人公司" value="02"></el-option>
              <el-option label="分公司" value="03"></el-option>
              <el-option label="营业部" value="04"></el-option>
              <el-option label="销售服务部" value="05"></el-option>
            </el-select>
          </el-input>
        </el-form-item> 
        <el-form-item>
          <el-button class="filter-item" type="primary" style="margin-left: 20px;" v-waves icon="search" @click="handleFilter">搜索</el-button>
          <el-button type="success" v-if="deptManager_btn_add" icon="plus" v-waves @click="handlerAddNew" class="filter-item">添加</el-button>
        </el-form-item>
      </el-form>
    </div>

    <el-row class="search-table-container">

    </el-row>
    <el-row class="tree-container">
      <tree-grid 
      :items='treeData' 
      :columns='testColumns' 
      @on-handler-add='handlerAdd'
       @on-handler-edit='handlerEdit' 
       @on-handler-delete='handleDelete'></tree-grid>
    </el-row>

    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="60%" class="deptDialog">
      <el-form :inline="true" :label-position="labelPosition" label-width="160px" :model="form" :rules="rules" ref="form" size="mini">
        <el-form-item label="机构编码" prop="comcode">
          <el-input v-model="form.comcode" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="机构名称" prop="comname">
          <el-input v-model="form.comname" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="机构英文简称">
          <el-input v-model="form.ehshortname" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="机构简称" prop="shortname">
          <el-input v-model="form.shortname" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="机构级别" prop="comgrade" class="comgrade">
          <el-input v-model="form.comgrade" class="mini-input-width input-with-select">
            <el-select v-model="form.comgrade" slot="prepend" placeholder="请选择" class="comgrade" clearable>
              <el-option label="区域中心" value="01"></el-option>
              <el-option label="法人公司" value="02"></el-option>
              <el-option label="分公司" value="03"></el-option>
              <el-option label="营业部" value="04"></el-option>
              <el-option label="销售服务部" value="05"></el-option>
            </el-select>
          </el-input>
        </el-form-item> 
        <el-form-item label="上级机构编码" prop="upcomcode">
          <el-input v-model="form.upcomcode" placeholder="" class="mini-input-width" disabled>
            <el-button slot="append" icon="el-icon-search" type='success'></el-button>
          </el-input>
        </el-form-item>
        <el-form-item label="上级机构名称">
          <el-input v-model="form.upcomname" placeholder="">
          </el-input>
        </el-form-item>
        <el-form-item label="所在省/市/区" required>
          <el-cascader :options="resetOptions" :props="props" v-model="selectedOptions" class="mini-input-width" clearable>
          </el-cascader>
        </el-form-item> 
        <el-form-item label="地址">
          <el-input v-model="form.address" placeholder="">
          </el-input>
        </el-form-item>
        <el-form-item label="机构负责人姓名">
          <el-input v-model="form.satrapname" placeholder="">
          </el-input>
        </el-form-item>
        <el-form-item label="操作员代码" prop="operator">
          <el-input v-model="form.operator" placeholder="">
          </el-input>
        </el-form-item>
        <el-form-item label="机构邮编">
          <el-input v-model="form.zipcode" placeholder="">
          </el-input>
        </el-form-item>
        <el-form-item label="机构电话">
          <el-input v-model="form.phone" placeholder="">
          </el-input>
        </el-form-item>
        <el-form-item label="机构传真">
          <el-input v-model="form.fax" placeholder="">
          </el-input>
        </el-form-item>
        <el-form-item label="成立日期" prop="founddate">
          <el-date-picker v-model="form.founddate" type="date" placeholder="选择日期" class="mini-input-width">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="停业标志" prop="endflag">
          <el-input v-model="form.endflag" class="mini-input-width input-with-select" placeholder=''>
            <el-select v-model="form.endflag" slot="prepend" placeholder="请选择">
              <el-option label="是" value="Y"></el-option>
              <el-option label="否" value="N"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <el-form-item label="是否有结算权">
          <el-input v-model="form.balanceflag" class="mini-input-width input-with-select" placeholder=''>
            <el-select v-model="form.balanceflag" slot="prepend" placeholder="请选择">
              <el-option label="是" value="Y"></el-option>
              <el-option label="否" value="N"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <!-- 公有 -->
        <el-form-item label="是否财务核算机构" v-if="common_show">
          <el-input v-model="form.isadjustcal" class="mini-input-width input-with-select" placeholder=''>
            <el-select v-model="form.isadjustcal" slot="prepend" placeholder="请选择">
              <el-option label="是" value="Y"></el-option>
              <el-option label="否" value="N"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <el-form-item label="所属财务核算机构编码" v-if="common_show">
          <el-input v-model="form.adjustcalcom" placeholder="">
          </el-input>
        </el-form-item>
        <el-form-item label="所属财务核算机构名称" v-if="common_show">
          <el-input v-model="form.data11" placeholder="">
          </el-input>
        </el-form-item>
        <!-- 法人公司专有 -->
        <el-form-item label="是否收单位抵押金" prop="isadjustcal" v-if="company_show">
          <el-input v-model="form.isdepositflag" class="mini-input-width input-with-select" placeholder=''>
            <el-select v-model="form.isdepositflag" slot="prepend" placeholder="请选择">
              <el-option label="是" value="Y"></el-option>
              <el-option label="否" value="N"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <el-form-item label="是否开启短信服务" v-if="company_show">
          <el-input v-model="form.msgflag" class="mini-input-width input-with-select" placeholder=''>
            <el-select v-model="form.msgflag" slot="prepend" placeholder="请选择">
              <el-option label="是" value="Y"></el-option>
              <el-option label="否" value="N"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <el-form-item label="是否同步到NC" v-if="company_show">
          <el-input v-model="form.usesynchroflag" class="mini-input-width input-with-select" placeholder=''>
            <el-select v-model="form.usesynchroflag" slot="prepend" placeholder="请选择">
              <el-option label="是" value="Y"></el-option>
              <el-option label="否" value="N"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <el-form-item label="计税类型" v-if="company_show">
          <el-input v-model="form.taxtype" class="mini-input-width input-with-select" placeholder=''>
            <el-select v-model="form.taxtype" slot="prepend" placeholder="请选择">
              <el-option label="是" value="Y"></el-option>
              <el-option label="否" value="N"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        
        <el-form-item label="是否限制资格证" v-if="company_show">
          <el-input v-model="form.stoplicenseflag" class="mini-input-width input-with-select" placeholder=''>
            <el-select v-model="form.stoplicenseflag" slot="prepend" placeholder="请选择">
              <el-option label="是" value="Y"></el-option>
              <el-option label="否" value="N"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <el-form-item label="是否限制职业证" v-if="company_show">
          <el-input v-model="form.stoppractyflag" class="mini-input-width input-with-select" placeholder=''>
            <el-select v-model="form.stoppractyflag" slot="prepend" placeholder="请选择">
              <el-option label="是" value="Y"></el-option>
              <el-option label="否" value="N"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        
        <!-- 分公司专有 -->
        <el-form-item label="是否渠道专属" v-if="filiale_show">
          <el-input v-model="form.signflag" class="mini-input-width input-with-select" placeholder=''>
            <el-select v-model="form.signflag" slot="prepend" placeholder="请选择">
              <el-option label="是" value="Y"></el-option>
              <el-option label="否" value="N"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <el-form-item label="基本法类型" v-if="filiale_show">
          <el-input v-model="form.basicLaw" class="mini-input-width input-with-select" placeholder=''>
            <el-select v-model="form.basicLaw" slot="prepend" placeholder="请选择">
              <el-option label="是" value="Y"></el-option>
              <el-option label="否" value="N"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <el-form-item label="版本类型" v-if="filiale_show">
          <el-input v-model="form.editiontype" class="mini-input-width input-with-select" placeholder=''>
            <el-select v-model="form.editiontype" slot="prepend" placeholder="请选择">
              <el-option label="是" value="Y"></el-option>
              <el-option label="否" value="N"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <el-form-item label="是否使用影像系统" v-if="filiale_show">
          <el-input v-model="form.usescansys" class="mini-input-width input-with-select" placeholder=''>
            <el-select v-model="form.usescansys" slot="prepend" placeholder="请选择">
              <el-option label="是" value="Y"></el-option>
              <el-option label="否" value="N"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <!-- 营业部 -->
        
        <!-- 销售服务部 -->
        <el-form-item label="所属批牌机构" v-if='sales_show'>
          <el-input v-model="form.licensecomcode" class="mini-input-width input-with-select" placeholder=''>
            <el-select v-model="form.licensecomcode" slot="prepend" placeholder="请选择">
              <el-option label="是" value="Y"></el-option>
              <el-option label="否" value="N"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
      </el-form>
      


      <div slot="footer" class="dialog-footer">
        <div v-if="formStatus == 'update'">
          <el-button type="primary" @click="submitForm('form')">更新</el-button>
          <el-button @click="onCancel">取消</el-button>
        </div>
        <div v-if="formStatus == 'create'">
          <el-button type="primary" @click="submitForm('form')">保存</el-button>
          <el-button @click="onCancel">取消</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {
    fetchTree,
    getObj,
    addObj,
    delObj,
    putObj,
    filterObj,
    selectAddress
  } from '@/api/dept'
  import {
    mapGetters
  } from 'vuex'

  import TreeGrid from '@/components/TreeGrid.vue'
  export default {
    name: 'menu',
    data() {
      return {
        filterText: '',
        dialogVisible: false,
        dialogTitle: '',
        list: null,
        total: null,
        formEdit: false,
        formAdd: true,
        formStatus: '',
        showElement: false,
        typeOptions: ['0', '1'],
        methodOptions: ['GET', 'POST', 'PUT', 'DELETE'],
        // 省市县渲染对应属性
        props:{
            value: 'id',
            label:'placeName',
            children: 'children'
        },
        // 请求响应数据信息
        listQuery: {
            "head": {
                "reqTime": "2018-06-04 15:03:00",
                "function": "addCom"
            },
            "body": {
                "comInfo": {
                    
                }
            }
        },
        // 树形表格数据源
        treeData: [],
        defaultProps: {
          children: 'children',
          label: 'name'
        },
        labelPosition: 'right',
        // form表单信息
        form: {
          comname: undefined,
          upcomcode: undefined,
          comcode: undefined,
          operator: '',
          ehshortname:"",
          shortname: '',
          comgrade: '',
          address:'',
          data11: '',
          satrapname: '',
          zipcode: '',
          phone: '',
          fax: '',
          founddate: '',
          endflag: '',
          isdepositflag: '',
          balanceflag: '',
          msgflag: '',
          province: "",
          city: "",
          county: "",
          usesynchroflag:"",
          taxtype:"",  
          stoplicenseflag:'',
          stoppractyflag:'',
          isadjustcal:'',
          adjustcalcom:'',  
          signflag:'',   
          basicLaw:'',  
          editiontype:'',   
          usescansys:'',   
          licensecomcode:'',
          description:''
        },
        // 查询请求
        dataList:{
          "head": {
              "reqTime": "2018-06-04 15:03:00",
              "function": "selectComInfoByCondition"
          },
          "body": {
              "conditions": {
                  "comcode": "",
                  "comname": "",
                  "comgrade": "",
                  "upcomcode": ""
              }
          }
        },
        // 省市县数据源
        selectedOptions: [],
        resetOptions:[],
        currentId: '1000000000',
        // 弹框底部按钮显示条件
        deptManager_btn_add: false,
        deptManager_btn_edit: false,
        deptManager_btn_del: false,
        // 根据级别显示表单信息
        common_show:false,//公有
        company_show:false,//法人公司
        filiale_show:false,//分公司
        sales_show:false,//销售


        deptSearchData: {
          organCode: '',
          organName: '',
          organType: ''
        },
        // 树形表格title
      testColumns: [{
          title: '机构名称',
          key: 'comname',
          width: '150',
        }, {
          title: '机构简称',
          key: 'shortname',
          width: '150',
        }, {
          title: '机构编码',
          key: 'comcode',
        }, {
          title: '机构类型',
          key: 'comtype',
        }, {
          title: '机构级别',
          key: 'description',
        }, {
          title: '机构性质',
          key: 'property',
        }, {
          title: '停业标志',
          key: 'endflag',
        }, {
          title: '操作',
          type: 'action',
          actions: {
            type1: 'text',
            text1: '添加机构',
            type2: 'text',
            text2: '编辑',
            type3: 'text',
            text3: '删除'
          },
          width: '150',
        }],
        // 验证条件
        rules:{
          comname: { required: true, message: '请输入机构名称', trigger: 'blur' },
          comcode: [
            { required: true, message: '请输入机构编码', trigger: 'blur' }
          ],
          operator: [
            { required: true, message: '请输入操作员代码', trigger: 'blur' }
          ],
          shortname: { required: true, message: '请输入机构简称', trigger: 'blur' },
          comgrade: { required: true, message: '请选择机构级别', trigger: 'blur' },
          founddate: { required: true, message: '请选择成立日期', trigger: 'blur' },
          endflag: { required: true, message: '请输入停业标志', trigger: 'blur' },
          isdepositflag: { required: true, message: '请选择是否收单位抵押金', trigger: 'blur' },
        }
      }
      
    },
    // created生命周期
    created() {
      this.getList()
      this.deptManager_btn_add = this.permissions['sys_dept_add']
      this.deptManager_btn_edit = this.permissions['sys_dept_edit']
      this.deptManager_btn_del = this.permissions['sys_dept_del']
    },
    computed: {
      ...mapGetters([
        'elements',
        'permissions'
      ]),
      // isShow(){
      //   if(this.form.comgrade == ''){
      //     console.log(this.form.comgrade)
      //   }
      // }
    },
    components: {
      TreeGrid
    },
    
    methods: {
      getList() {
        fetchTree(this.listQuery).then(response => {
          this.treeData = response.data.body.data
        })
      }, 
      getNodeData(data, func) {
        if (!this.formEdit) {
          this.formStatus = 'update'
        }
        getObj(data.comcode).then(response => {
          let data = response.data.body.data
          this.form = data
          this.selectedOptions = [this.form.province,this.form.city,this.form.county]

          if (typeof func == "function") {
            func();
          }
        })
        this.currentId = data.comcode
        this.showElement = true
      },
      //增加机构没有父元素的时候
      handlerAddNew() {
        this.currentId = '1000000000';
        this.selectedOptions = []
        this.resetForm();
        this.form.upcomcode = this.currentId;
        this.formEdit = false
        this.formStatus = 'create'
        this.dialogTitle = '新增机构'
        this.dialogVisible = true
        
      },
      // 省市县数据处理
      runData(data){
        var vm = this
        for(let i in data){
          if(data[i].children && data[i].children.length > 0){
            vm.runData(data[i].children)
          }else{
            delete data[i].children
          }
        }
      },
      //增加机构
      handlerAdd(data, index) {
        var vm = this;
        
        this.getNodeData(data, function () {
          vm.resetForm();
          vm.selectedOptions = []
          vm.form.upcomcode = data.comcode
          vm.form.upcomname = data.comname
          vm.formEdit = false
          vm.formStatus = 'create'
          vm.dialogTitle = '新增机构'
          vm.dialogVisible = true
        }); 
        selectAddress().then(response =>{
          let data = response.data.body.data
          vm.runData(data)
          this.resetOptions = data
        })
      },
      
      //修改机构
      handlerEdit(data, index) {
        var vm = this;
        this.getNodeData(data,  ()=> {
          vm.form.upcomname = data.comname
          vm.formEdit = false
          vm.formStatus = 'update'
          vm.dialogTitle = '修改机构'
          vm.dialogVisible = true
        });
        selectAddress().then(response =>{
          let data = response.data.body.data
          vm.runData(data)
          this.resetOptions = data
        })
      },
      //删除机构
      handleDelete(data, index) {
        var vm = this;
        this.getNodeData(data, function () {
          vm.$confirm('此操作将永久删除, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            delObj(vm.currentId).then(() => {
              vm.getList()
              vm.resetForm()
              vm.onCancel()
              vm.$notify({
                title: '成功',
                message: '删除成功',
                type: 'success',
                duration: 2000
              })
            })
          })
        });
      },

      // 时间格式处理 yyyy-mm-dd
      fmtDate(obj){
        var date =  new Date(obj);
        var y = 1900+date.getYear();
        var m = "0"+(date.getMonth()+1);
        var d = "0"+date.getDate();
        return y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);
      },

      // 点击更新按钮保存机构信息
      update() {
        this.form.founddate = this.fmtDate(this.form.founddate)
        this.form.province = this.selectedOptions[0]
        this.form.city = this.selectedOptions[1]
        this.form.county = this.selectedOptions[2]
        this.listQuery.body.comInfo = this.form
        putObj(this.listQuery).then(() => {
          this.getList()
          this.$notify({
            title: '成功',
            message: '更新成功',
            type: 'success',
            duration: 2000
          })
        })
        this.dialogVisible = false
      },
      // 点击保存新增机构
      create() {
        this.form.founddate = this.fmtDate(this.form.founddate)
        this.form.province = this.selectedOptions[0]
        this.form.city = this.selectedOptions[1]
        this.form.county = this.selectedOptions[2]
        this.listQuery.body.comInfo = this.form
        addObj(this.listQuery).then(res => {
          if(res.data.body.code != '0000'){
              this.$notify({
              title: '失败',
              message: res.data.body.message,
              type: 'error',
              duration: 2000
            })
          }else{
            this.getList()
            this.$notify({
              title: '成功',
              message: '创建成功',
              type: 'success',
              duration: 2000
            })
          }
        })
        this.dialogVisible = false
      },
      // 点击取消按钮
      onCancel() {
        this.formEdit = false
        this.formStatus = ''
        this.$refs['form'].resetFields();
        this.dialogVisible = false
        
      },
      // 重置表单数据
      resetForm() {
        this.form = {
         comname: undefined,
          upcomcode: undefined,
          comcode: undefined,
          operator: '',
          ehshortname:"",
          shortname: '',
          comgrade: '',
          address:'',
          data11: '',
          satrapname: '',
          zipcode: '',
          phone: '',
          fax: '',
          founddate: '',
          endflag: '',
          isdepositflag: '',
          balanceflag: '',
          msgflag: '',
          province: "",
          city: "",
          county: "",
          usesynchroflag:"",
          taxtype:"",  
          stoplicenseflag:'',
          stoppractyflag:'',
          isadjustcal:'',
          adjustcalcom:'',  
          signflag:'',   
          basicLaw:'',  
          editiontype:'',   
          usescansys:'',   
          licensecomcode:''
        }
      },
      // 点击按钮验证表单
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if(this.formStatus == 'update'){
              this.update()
            }else if(this.formStatus == 'create'){
              this.create()
            }
          } else {
            return false;
          }
        });
      },
      // 查询
      handleFilter() {
        this.dataList.body.conditions.comname = this.deptSearchData.organName
        this.dataList.body.conditions.comcode = this.deptSearchData.organCode
        this.dataList.body.conditions.comgrade = this.deptSearchData.organType
        filterObj(this.dataList).then(response => {
          let data = response.data.body.data;
          // 属性配置信息
          let attributes = {
              comcode: 'resourcesId',
              upcomcode: 'resParentId',
              comname: 'resName',
              description:'description',
              comtype:'comtype',
              shortname:'shortname',
              endflag:'endflag',
              rootId: '1000000000'
          };
          if(this.isEmpty(this.deptSearchData.organName) && this.isEmpty(this.deptSearchData.organCode) && this.isEmpty(this.deptSearchData.organType)){
            this.treeData = this.toTreeData(data, attributes);
          }else{
            this.treeData = data
          }
          
        })   
      },

      // 判断是否为空
      isEmpty(str){
        if(str == "" || str == null || str == undefined){
          return true
        }else{
          return false
        }
      },

      // 树形数据转化
      toTreeData(data, attributes) {
        let resData = data;
        let tree = [];
        for (let i = 0; i < resData.length; i++) {
            if (resData[i].upcomcode == attributes.rootId) {
                let obj = {
                    comcode: resData[i].comcode,
                    comname: resData[i].comname,
                    description:resData[i].description,
                    comtype:resData[i].comtype,
                    shortname:resData[i].shortname,
                    endflag:resData[i].endflag,
                    children: []
                };
                tree.push(obj);
                resData.splice(i, 1);
                i--;
            }
        }
        run(tree);
        function run(chiArr) {
            if (resData.length !== 0) {
                for (let i = 0; i < chiArr.length; i++) {
                    for (let j = 0; j < resData.length; j++) {
                        if (chiArr[i].comcode == resData[j].upcomcode) {
                            let obj = {
                                comcode: resData[j].comcode,
                                comname: resData[j].comname,
                                children: []
                            };
                            chiArr[i].children.push(obj);
                            resData.splice(j, 1);
                            j--;
                        }
                    }
                  run(chiArr[i].children);
                }
            }
        }
        return tree;
      }


    }
  }

</script>

<style lang="scss">
  .filter-button {
    margin-right: 10px;
  }

  .tree-container {
    margin-bottom: 60px;
  }

  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
  .demo-form-inline .comgrade{
    .el-input__inner{
      width:60px;
      pointer-events: none;
    }
    .comgradeSelect .el-input__inner{
      width:120px;
    }
    .comgradeSelect .el-input__suffix{
       left:90px;
    }
  }
  .deletecolor {
    color: #f56c6c;
  }

  .deptDialog {
    .el-form-item--mini.el-form-item {
      margin-bottom: 20px;
    }
    .comgrade .el-input__inner{
      pointer-events: none;
    }
    .el-form-item--mini .el-form-item__error{
      padding-top:5px;
    }
    .mini-input-width {
      width: 178px;
    }

    .el-select .el-input {
      width: 130px;
      input {
        padding: 0 10px;
        padding-right: 25px;
      }
    }
  }
  

</style>
