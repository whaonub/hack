<template>
    <div>
        <guide-list :listNumber="guideList"></guide-list>
    </div>
</template>
<script>
    import guideList from '@/pages/index/components/guideList'
    import api from '@/pages/index/api'
    import {mapState,mapActions} from 'vuex'
    export default {
        data(){
            return {
                guideList:""
            }
        },
        components:{
            guideList
        },
        computed: {
            
        },
        created(){
            this.getGuideList()
        },
        methods:{
            async getGuideList(){
                const data = {}
                const res = await api.guideList(data)
                this.guideList = res.data
                console.log(this.guideList)
            },
        }
    }
</script>
<style>

</style>

