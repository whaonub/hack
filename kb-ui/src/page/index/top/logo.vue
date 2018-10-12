<template>
  <div class="logo" :class="{'active-logo':isCollapse}">
    <transition name="fade">
      <span v-if="isCollapse" class="logo_title  is-bold is-active" key="0">大童</span>
    </transition>
    <transition-group name="fade">
      <template v-if="!isCollapse">
        <span class="logo_title is-bold" key="1"></span>
        <span class="logo_subtitle" key="2">大童核心微服务系统</span>
      </template>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "logo",
  data() {
    return {};
  },
  props: ["isCollapse"],
  computed: {},
  created() {},
  computed: {},
  methods: {}
};
</script>

<style scoped="scoped" lang="scss">
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-active {
  transition: opacity 2.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.logo {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 230px;
  height: 50px;
  line-height: 50px;
  // background: #002140;
      // background: #51a0c3;
  color: #fdfdfd;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  overflow: hidden;
  box-sizing: border-box;
}
.logo_title {
  padding: 0 5px 0 0;
  color: #409eff;
  font-size: 28px;
  &.is-bold {
    font-weight: 700;
  }
}
.is-active {
  position: absolute;
  top: 0;
  left: 0px;
  width:56px;
  color: #fff;
}
.logo_subtitle {
  font-size: 16px;
  padding-top: 5px;
}
.active-logo{
  width:64px;
}
</style>