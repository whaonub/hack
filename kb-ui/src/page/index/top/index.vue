<template>
  <div class="top">
     <logo :isCollapse="isCollapse"></logo>
    <div class="top-button is-left">
      <div class="tags-breadcrumb">
        <i class="icon-navicon tag-collapse" :class="[{ 'tag-collapse_right': isCollapse }]" @click="showCollapse"></i>
      </div>
    </div>
    <h1 class="top-title">
       
    </h1>
    <div class="top-button is-right">   
      <!-- <el-tooltip class="item" effect="dark" content="主题色" placement="bottom">
        <span class="top-item">
          <top-theme></top-theme>
        </span>
      </el-tooltip> -->
      <span class="top-title-link">
        您好， {{userInfo.username}} ({{userMsg.roleName}} , {{userMsg.comName}}) 
      </span> 
      <span class="top-title-link">
        <span class="el-icon-edit"></span>
        <router-link to="/info/index">修改信息</router-link>
      </span>
      <!-- <el-tooltip class="item" effect="dark" :content="isFullScren?'退出全屏':'全屏'" placement="bottom">
        <span class="top-item">
          <i :class="isFullScren?'icon-tuichuquanping':'icon-quanping'" @click="handleScreen"></i>
        </span>
      </el-tooltip> -->
      <el-button size="mini" @click.native="logout" divided>退出系统</el-button>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import { fullscreenToggel, listenfullscreen } from "@/util/util";
import topLock from "./top-lock";
import topMenu from "./top-menu";
import topTheme from "./top-theme";
import logo from "./logo";
import {getUserInfo} from '@/api/login'
export default {
  components: { topLock, topMenu, topTheme ,logo},
  name: "top",
  data() {
    return {
      userMsg:{}
    };
  },
  filters: {},
  created() {
    this.getUser()
  },
  mounted() {
    listenfullscreen(this.setScreen);
  },
  updated(){
    
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    }),
    ...mapGetters(["isFullScren", "isCollapse"])
  },
  methods: {
    getUser(){
      getUserInfo().then(res=>{
        this.userMsg =  res.data.data
      })
    },
    showCollapse() {
      this.$store.commit("SET_COLLAPSE");
    },
    handleScreen() {
      fullscreenToggel();
    },
    setScreen() {
      this.$store.commit("SET_FULLSCREN");
    },
    logout() {
      this.$confirm("是否退出系统, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$store.dispatch("LogOut").then(() => {
          this.$router.push({ path: "/login" });
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.el-dropdown-link{
  color:#fff;
}
.top-title-link{
  display: inline-block;
  margin: 0 5px;
  font-size: 12px;
  color: #fff;
  cursor: pointer;
}
.top-time-now{
   font-size: 12px;
  color: #fff;
  margin:6px 5px;
}
.top-button .el-button{
  background: #56bbe5;
  color: #fff;
}
</style>

