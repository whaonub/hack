<template>
  <div class="login-container pull-height" @keyup.enter.native="handleLogin">
    <!-- <div class="login-info text-white animated fadeInLeft">
      <h2 class="login-info-title">新云核心微服务系统</h2>
      <ul class="login-info-list">
        <li class="login-info-item">
          <i class="el-icon-check"></i> 是一个基于Spring Cloud、oAuth2.0开发基于Vue前后分离的开发平台。</li>
        <li class="login-info-item">
          <i class="el-icon-check"></i> 是一个基于vue+vuex+vue-router快速后台管理系统，采用token交互验证方式。</li>
        <li class="login-info-item">
          <i class="el-icon-check"></i> 最大程度上帮助企业节省时间成本和费用开支。 </li>
      </ul>
    </div> -->
    <div class="login-border  animated fadeInRight">
      <div class="login-main">
        <h4 class="login-title"> 新云核心微服务系统
          <!-- <top-theme></top-theme> -->
        </h4>
        <el-tabs v-model="activeName">
          <el-tab-pane label="用户密码" name="user">
            <userLogin></userLogin>
          </el-tab-pane>
          <el-tab-pane label="短信验证码" name="code">
            <codeLogin></codeLogin>
          </el-tab-pane>
          <!-- <el-tab-pane label="第三方授权登录" name="third">
            <thirdLogin></thirdLogin>
          </el-tab-pane> -->
        </el-tabs>
      </div>
    </div>

  </div>
</template>
<script>
import userLogin from "./userlogin";
import codeLogin from "./codelogin";
import thirdLogin from "./thirdlogin";
import topTheme from "../index/top/top-theme";
import theme from "@/mixins/theme";
export default {
  name: "login",
  mixins: [theme()],
  components: {
    topTheme,
    userLogin,
    codeLogin,
    thirdLogin
  },
  data() {
    return {
      activeName: "user"
    };
  },
  created() {},
  mounted() {},
  computed: {},
  props: [],
  methods: {}
};
</script>

<style lang="scss">
.login-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: rgba(0, 0, 0, 0.3);
  position: relative;
}
.login-container::before {
  z-index: -999;
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url("../../assets/img/login.png");
  background-size: cover;
}
.login-info {
  padding-left: 60px;
}
.login-info-title {
  line-height: 90px;
}
.login-info-item {
  font-size: 14px;
}
.login-border {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 30px 40px 25px 40px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 1px 1px 2px #eee;
}
.login-main {
  border-radius: 3px;
  box-sizing: border-box;
  background-color: #fff;
}
.login-main > h3 {
  margin-bottom: 20px;
}
.login-main > p {
  color: #76838f;
}
.login-title {
  margin: 0 0 20px;
  text-align: center;
  color: #409eff;
  letter-spacing: 3px;
}
.login-submit {
  margin-top: 20px;
  width: 100%;
  background: #3080fe;
  border-radius: 28px;
}
.login-form {
  margin: 10px 0;
  .el-form-item__content {
    width: 270px;
  }
  .el-form-item {
    margin-bottom: 12px;
  }
  .el-input {
    input {
      text-indent: 5px;
      border-color: #dcdcdc;
      border-radius: 3px;
    }
    .el-input__prefix {
      i {
        padding: 0 5px;
        font-size: 16px !important;
      }
    }
  }
}
.login-code {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 0 0 10px;
}
.login-code-img {
  width: 100px;
  height: 38px;
  background-color: #fdfdfd;
  border: 1px solid #f0f0f0;
  color: #333;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 5px;
  line-height: 32px;
  text-indent: 5px;
  text-align: center;
}
</style>