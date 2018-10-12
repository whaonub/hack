<template>
    <div class="content">
        <mt-popup
            class="flex"
            v-model="popupVisible"
            position="top">
            <slot></slot>
        </mt-popup>
    </div>
</template>
<script>
import { Popup } from 'mint-ui';
import { mapState, mapActions } from 'vuex'

export default {
    props:["popupVisible"],
     computed:{
        ...mapState({
            data: state => state.circles.circlesTheme
        })
    },
    components:{
        mtPopup:Popup
    },
    methods:{
        
    }
}
</script>
<style lang="scss">
 @import "../../../css/function";
    .mint-popup-top{
        width: 100%;
        margin-top: rem(100);
        flex-wrap:wrap; 
    }
    .v-modal{
        margin-top: rem(110)
    }
    
</style>
