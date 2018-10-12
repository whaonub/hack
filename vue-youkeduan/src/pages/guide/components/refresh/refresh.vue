<template>
    <div class="m-refresh">
        <div :id="id" class="minirefresh-wrap">
            <div class="minirefresh-scroll">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import MiniRefreshTools from 'minirefresh';
    import 'minirefresh/dist/minirefresh.min.css'
    import 'minirefresh/dist/themes/applet/minirefresh.theme.applet.min';
    import 'minirefresh/dist/themes/applet/minirefresh.theme.applet.min.css';

    export default {
        //组件名字
        name: 'my-refresh',

        //引入子组件
        components: {},

        //接收父组件的传值
        props: {
            //初始化参数
            init: {
                Type: Object,
                default: null,
            },

            //下拉事件
            down: {
                type: Function,
            },

            //上拉事件
            up: {
                type: Function,
            },

            //自动加载
            autoLoad: {
                type: String,
                default: '',
            },
        },

        //组件私有数据
        data() {
            return {
                miniRefresh: {},
            }
        },

        //数据计算
        computed: {
            //是否下拉刷新
            downIslock() {
                return typeof this.down == 'function' ? false : true
            },

            //是否上拉加载
            upIsLock() {
                return typeof this.up == 'function' ? false : true
            },

            //自动下拉刷新
            isDownAutoLoad() {
                return this.autoLoad == 'down' ? true : false
            },

            //自动上拉加载
            isUpAutoLoad() {
                return this.autoLoad == 'up' ? true : false
            },
        },

        //数据监听
        watch: {},

        //生命周期钩子：组件实例创建之后调用
        created() {
            const self = this
            self.id = 'minirefresh' + self.fn.randomString(4)
        },

        //生命周期钩子：组件实例渲染之后调用
        mounted() {
            const self = this
            //默认主题： MiniRefreshTools.theme.defaults
            //微信小程序主题： MiniRefreshTools.theme.applet
            let refreshInit = {
                container: '#' + self.id,//绑定的元素
                isUseBodyScroll: false,//使用body的滚动（要保证页面唯一）
                isScrollBar: false,//滚动条
                down: {
                    isLock: self.downIslock,
                    isAuto: self.isDownAutoLoad,
                    successAnim: {
                        isEnable: true,
                    },
                    callback: function () {
                        self.down(miniRefresh)
                    }
                },
                up: {
                    isLock: self.upIsLock,
                    isAuto: self.isUpAutoLoad,
                    loadFull: {
                        isEnable: false,
                    },
                    callback: () => {
                        self.up(miniRefresh, miniRefresh.endUpLoading)
                    }
                }
            }
            for (var key in self.init) {
                if (self.init.hasOwnProperty(key) === true) {
                    refreshInit[key] = self.init[key];
                }
            }

            let miniRefresh = new MiniRefreshTools.theme.defaults(refreshInit)

            //不使用上拉，隐藏底部加载区域
            if (self.upIsLock) {
                self.$el.querySelector('#' + self.id + ' .minirefresh-upwrap').style.display = 'none'
            }

            //传递实例对象给父级
            self.$emit('getObj', miniRefresh)
        },

        //自定义函数
        methods: {},
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";

    .m-refresh {
        position: relative;
        height: 100%;
    }

    .minirefresh-scroll {
        min-height: 100%;
        background: #f7f7f7;
    }
</style>
