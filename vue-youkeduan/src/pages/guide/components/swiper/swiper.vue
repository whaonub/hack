<template>
    <div :id="id" class="swiper-container">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>

        <!--自定义内容-->
        <slot name="content"></slot>

        <!-- 如果需要导航按钮 -->
        <div v-if="button" class="swiper-button-prev" :class="{'m-prev': button}">
            <slot name="prev"></slot>
        </div>
        <div v-if="button" class="swiper-button-next" :class="{'m-next': button}">
            <slot name="next"></slot>
        </div>

        <!-- 如果需要分页器 -->
        <div v-if="page" class="swiper-pagination" :class="pageClass">11</div>

        <!-- 如果需要滚动条 -->
        <div v-if="scrollbar" class="swiper-scrollbar"></div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.css'

    export default {
        //组件名字
        name: 'my-swiper',

        //引入子组件
        components: {},

        //接收父组件的传值
        props: {
            //初始化参数
            init: {
                Type: Object,
                default: null,
            },

            //绑定索引
            value: {
                type: [Number, String],
                default: 0
            },

            //是否显示前进后退按钮
            button: {
                type: Boolean,
                defualt: false,
            },

            //是否显示分页器
            page: {
                type: Boolean,
                defualt: false,
            },

            //分页器自定义类
            pageClass: {
                type: String,
                default: null,
            },

            //是否显示滚动条
            scrollbar: {
                type: Boolean,
                defualt: false,
            },

            //滚动条自定义类
            scrollbarClass: {
                type: String,
                default: null,
            },
        },

        //组件私有数据
        data() {
            return {
                id: '',
                swiper: {},
            }
        },

        //数据计算
        computed: {
            index() {
                return this.swiper.activeIndex
            }
        },

        //生命周期钩子：组件实例创建之后调用
        created() {
            const self = this
            self.id = 'swiper-container-' + self.fn.randomString(4)
        },

        //生命周期钩子：组件实例渲染之后调用
        mounted() {
            const self = this
            let swiperInit = {
                //方向，（horizontal：水平，vertical：垂直）
                direction: 'horizontal',

                //环路
                loop: true,

                //宽度
                width: window.innerWidth,

                //初始页码
                initialSlide: 0,

                // 前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                // 分页器
                pagination: {
                    el: '.swiper-pagination',
                },

                // 滚动条
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
            }

            for (var key in self.init) {
                if (self.init.hasOwnProperty(key) === true) {
                    swiperInit[key] = self.init[key];
                }
            }

            //创建实例对象
            self.swiper = new Swiper('#' + self.id, swiperInit)

            //传递实例对象给父级
            self.$emit('getObj', self.swiper)
        },

        //数据监听
        watch: {
            value(value) {//改变索引
                const self = this
                self.swiper.slideTo(value)
            },
            index(value) {//获取索引
                const self = this
                self.$emit('input', value)
            },
        },

        //自定义函数
        methods: {},
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";

    .m-prev, .m-next {
        top: 50%;
        width: auto;
        height: auto;
        margin-top: 0;
        transform: translateY(-50%);
        background: none;
    }
</style>
