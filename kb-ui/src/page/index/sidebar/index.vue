<template>
  <div class="sidebar-container" :class="{'is-active':isCollapse}">
   
    <el-menu unique-opened :default-active="nowTagValue" class="el-menu-vertical-demo" mode="vertical" :show-timeout="200" background-color="#eee" text-color="#333" active-text-color="#333333" :collapse="isCollapse">
      <sidebar-item :menu="menu" :isCollapse="isCollapse"></sidebar-item>
    </el-menu>
  </div>
</template>

<script>
import MENU from "@/mock/menu";
import { setUrlPath } from "@/util/util";
import { mapGetters } from "vuex";
import SidebarItem from "./sidebarItem";
import logo from "./logo";
export default {
  name: "sidebar",
  components: { SidebarItem, logo },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("GetMenu").then(data => {}); 
  },
  computed: {
    ...mapGetters(["menu", "tag", "isCollapse"]),
    nowTagValue: function() {
      return setUrlPath(this.$route);
    }
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>

</style>

