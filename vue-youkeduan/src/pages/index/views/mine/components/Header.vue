<template>
    <div>
        <mt-Header icon="back" @click="back" :title="title" class="f-32 mb-44">
            <mt-button icon="back" slot="left" @click="back"></mt-button>
        </mt-Header>
        <mt-navbar v-model="currentTab">
            <mt-tab-item v-for="item in navList" :key="item.id" :id="item.id">{{item.title}}</mt-tab-item>
        </mt-navbar>
    </div>
</template>

<script>
import {
    Header,
    Button,
    Navbar,
    TabItem 
} from 'mint-ui'
export default {
    data(){
        return {
            navList:[
                {title:'全部',id:1},
                {title:'执行中',id:2},
                {title:'售后',id:3},
                {title:'已完成',id:4},
            ],
            currentTab:1
        }
    },
    props:['title'],
    components:{
        mtHeader: Header,
        mtButton: Button,
        mtNavbar: Navbar,
        mtTabItem: TabItem 

    },
    methods:{
        back:function(){
            this.$router.back(-1)
        }
    }
}
</script>
<style>
.mint-header{
    background: #fff;
    color:#000;
}
</style>

