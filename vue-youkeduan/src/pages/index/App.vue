<template>
    <div id="app">
        <transition :name="transitionName">
            <router-view/>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                transitionName: '',//动画切换的名字
            }
        },
        watch: {
            '$route'(to, from) {
                //如果to的索引值为1，不添加任何动画；如果to索引大于from索引,判断为前进状态,反之则为后退状态
                if (to.meta.index > 1) {
                    if (to.meta.index < from.meta.index) {
                        this.transitionName = 'slide-right';
                    } else {
                        this.transitionName = 'slide-left';
                    }
                } else if (to.meta.index == 1 && from.meta.index > 1) {
                    this.transitionName = 'slide-right';
                } else {
                    this.transitionName = ''
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "css/main";
    @import "css/function";
    @import "css/icons/main.css";
    #app{
        font-family: PingFangSC-Regular;
    }
    .slide-right-enter-active,
    .slide-right-leave-active,
    .slide-left-enter-active,
    .slide-left-leave-active {
        will-change: transform;
        transition: all .3s;
        position: absolute;
        width: 100%;
        left: 0;
    }

    .slide-right-enter {
        transform: translateX(-100%);
    }

    .slide-right-leave-active {
        transform: translateX(100%);
    }

    .slide-left-enter {
        transform: translateX(100%);
    }

    .slide-left-leave-active {
        transform: translateX(-100%);
    }
</style>
