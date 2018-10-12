<template>
  <div class="pull-height animated" :class="{'zoomOutUp': isLock}">
     <div class="header">
      <top></top>
     </div>
    <div class="index"> 
      <sidebar class="left"></sidebar>
      <div class="right">
        <div class="nav">
          <!-- <top class="top"></top> -->
          <tags></tags>
        </div>
        <div class="main" ref="menuScroll">
          <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
          </keep-alive>
          <router-view v-if="!$route.meta.keepAlive"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import tags from "./tags";
import top from "./top/";
import sidebar from "./sidebar/";
export default {
  components: {
    top,
    tags,
    sidebar
  },
  name: "index",
  data() {
    return {
      scrollTop:""
    };
  },
  created() {},
  // mounted () {
  //     this.box = this.$refs.menuScroll
  //     this.box.addEventListener('scroll',()=>{
  //        console.log(this.$refs.menuScroll.scrollTop)
  //        console.log(this.$route.meta.keepAlive)
  //        this.scrollTop = this.$refs.menuScroll.scrollTop
  //     })
  //   },

  computed: mapGetters(["isLock"]),
  props: [],
  methods: {}
};
</script>

<style lang="scss" scoped>
.header{
  
}
.index {
  display: flex;
  position: relative;
  height: 100%;
  background: #fff;
  overflow: hidden;
  .left {
    width: 230px;
    overflow-y: auto;
  }
  .right {
    padding-top: 47px;
    position: relative;
    flex: 1;
        padding-left: 10px;
  }
  .main {
    height: 100%;
    overflow-y: scroll;
  }
  .nav {
    position: absolute;
    top: 0;
    left: 10px;
    width: 100%;
    z-index: 999;
  }
  .top {
    margin-bottom: 2px;
  }
}
</style>