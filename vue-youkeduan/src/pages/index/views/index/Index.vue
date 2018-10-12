<template>
    <div class="index">
        <div class="pb-100">
            <router-view></router-view>
        </div>
        <tabbar v-model="data.currentTab">
            <tab-item
                    v-for="item in data.tabbarList"
                    :id="item.id"
                    :key="item.id"
            >
                <router-link :to="item.link">
                    <div @click="changeState({currentTab:item.id})">
                        <div><i :class="`iconfont icon-${item.icon}`"></i></div>
                        <div class="title">{{item.title}}</div>
                    </div>
                </router-link>
            </tab-item>
        </tabbar>
    </div>
</template>
<script>
    import {
        Tabbar,
        TabItem
    } from 'mint-ui'
    import {mapState, mapActions} from 'vuex'

    export default {
        name: 'Index',
        computed: {
            ...mapState({
                data: state => state.index.index
            })
        },
        beforeCreate() {
            this.$store.dispatch('index/getLocationData')
        },
        components: {
            Tabbar,
            TabItem,
        },
        methods: {
            ...mapActions('index', ['changeState', 'getLocationData']),
        },
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
    @import "../../css/function";

    .index {
        .mint-tabbar {
            position: fixed;
            bottom: 0;
        }
        .title {
            color: #b6b6b6;
        }
        .iconfont {
            color: #737373;
        }
        .mint-tab-item.is-selected {
            background: #fff;
            .title, .iconfont {
                color: #e4cca4;
            }

        }
    }
</style>
