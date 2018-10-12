<template>
  <div>
    123
  </div>
</template>
<script>
import {
  Tabbar,
  TabItem
} from 'mint-ui'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'ProductDetail',
  computed: {
  ...mapState({
    data:state => state.productDetail
  })
  } ,
  components:{
    Tabbar,
    TabItem,
  },

  methods:{
    ...mapActions('productDetail',['changeState']),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
