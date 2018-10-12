<template>
    <my-page class="page">
        <my-head></my-head>
        <div class="btn" @click="submit">完成</div>
        <my-body>
            <div class="user-label">
                <div class="user-label__top">
                    <div class="user-label__title">已选标签</div>
                    <div class="user-label__num">
                        <span class="user-label__cur-num">{{userLabel.length}}</span>
                        <span class="user-label__all-num">/10</span>
                    </div>
                </div>
                <ul class="user-label__ul">
                    <li class="user-label__li" v-for="(item, key) in userLabel" :key="key">
                        <img @click="removeLabel(item)" class="user-label__close" src="../../assets/user/close.png">
                        <div class="user-label__text">{{item}}</div>
                    </li>
                </ul>
            </div>
            <ul class="all-label">
                <li v-for="(item, key) in alllebel" :key="key" @click="selectLabel(item)" :class="{'all-label__li--active': userLabel.indexOf(item) > -1}" class="all-label__li">{{item}}</li>
            </ul>
        </my-body>
    </my-page>
</template>

<script>
    import MyBody from "../../components/layout/body.vue";
    import MyHead from "../../components/layout/head.vue";
    import MyPage from "../../components/layout/page";

    export default {
        //组件名字
        name: '',

        //引入子组件
        components: {
            MyPage,
            MyHead,
            MyBody
        },

        //接收父组件的传值
        props: {},

        //组件私有数据
        data() {
            return {
                userLabel: [],//用户标签
                alllebel: [],//全部标签
            }
        },

        //数据计算
        computed: {},

        //数据监听
        watch: {},

        //生命周期钩子：组件实例创建之后调用
        created() {
            this.getUserLabel()
            this.getAllLabel()
        },

        //生命周期钩子：组件实例渲染之后调用
        mounted() {
        },

        //自定义函数
        methods: {
            /**
             * 获取用户标签
             */
            getUserLabel() {
                const self = this
                self.api.getUserLabel().then(res => {
                    res.data.forEach(item => {
                        self.userLabel.push(item.label)
                    })
                })
            },

            /**
             * 获取全部标签
             */
            getAllLabel() {
                const self = this
                self.api.getAllLabel().then(res => {
                    self.alllebel = res.data
                })
            },

            /**
             * 选择标签
             */
            selectLabel(val) {
                const self = this
                if (self.userLabel.length < 10 && self.userLabel.indexOf(val) == -1) {
                    self.userLabel.push(val)
                } else {
                    self.fn.myMessage('该标签已选择')
                }
            },

            /**
             * 删除标签
             */
            removeLabel(val) {
                const self = this
                self.userLabel.forEach((item, index) => {
                    if (item == val) {
                        self.userLabel.splice(index, 1)
                    }
                })
            },

            /**
             * 提交选择
             */
            submit() {
                const self = this
                self.api.setUserLabel({
                    label: self.userLabel
                }).then(() => {
                    self.fn.myMessage('操作成功')
                })
            },
        },
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";

    .page {
        padding-bottom: rem(100);
    }

    .user-label {
        background-color: #fff;
    }

    .user-label__top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: rem(120);
        box-sizing: border-box;
        padding: 0 rem(30);
    }

    .user-label__title {
        font-size: rem(28);
        color: #333;
    }

    .user-label__cur-num {
        font-size: rem(28);
        color: #dec190;
    }

    .user-label__all-num {
        font-size: rem(28);
        color: #999;
    }

    .user-label__ul {
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
        padding: 0 rem(54) rem(16);
    }

    .user-label__li {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: rem(124);
        height: rem(54);
        margin: 0 0 rem(44) rem(44);
        border: solid 1px #dec190;
        border-radius: rem(4);
        &:nth-child(4n+1) {
            margin-left: 0;
        }
    }

    .user-label__close {
        position: absolute;
        top: rem(-14);
        right: rem(-14);
        z-index: 1;
        width: rem(28);
        height: rem(28);
    }

    .user-label__text {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        font-size: rem(22);
        color: #dec190;
    }

    .all-label {
        display: flex;
        flex-wrap: wrap;
        margin-top: rem(10);
        box-sizing: border-box;
        padding: rem(40) rem(33);
        background-color: #fff;
    }

    .all-label__li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: rem(124);
        height: rem(54);
        margin: 0 0 rem(16) rem(16);
        font-size: rem(22);
        color: #999;
        background-color: #f8f8f8;
        border-radius: rem(4);
        &:nth-child(5n+1) {
            margin-left: 0;
        }
    }

    .all-label__li--active {
        color: #fff;
        background-color: #dec190;
    }

    .btn {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 999;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: rem(100);
        font-size: rem(30);
        color: #fff;
        background-color: #dec190;
    }
</style>
