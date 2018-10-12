<template>
    <my-page>
        <my-head></my-head>
        <my-body>
            <ul class="list">
                <li class="list__li list__li--must">
                    <div class="list__title m-flex">姓名</div>
                    <div class="m-flex-end">
                        <input v-if="editStatus" v-model="user.name" type="text" class="list__input" placeholder="请输入">
                        <span v-else="" class="list__span">{{userInfo.name}}</span>
                    </div>
                </li>
                <li class="list__li list__li--must">
                    <div class="list__title m-flex">地区</div>
                    <div class="m-flex-end">
                        <input v-if="editStatus" v-model="user.areaName" type="text" class="list__input" placeholder="请输入">
                        <span v-else="" class="list__span">{{userInfo.areaName}}</span>
                    </div>
                </li>
                <li class="list__li list__li--must">
                    <div class="list__title m-flex">身份证号</div>
                    <div class="m-flex-end">
                        <input v-if="editStatus" v-model="user.identityNum" type="text" class="list__input" placeholder="请输入">
                        <span v-else="" class="list__span">{{userInfo.identityNum}}</span>
                    </div>
                </li>
                <li class="list__li list__li--must">
                    <div class="list__title m-flex">导游证号</div>
                    <div class="m-flex-end">
                        <input v-if="editStatus" v-model="user.guideNum" type="text" class="list__input" placeholder="请输入">
                        <span v-else="" class="list__span">{{userInfo.guideNum}}</span>
                    </div>
                </li>
                <li class="list__li list__li--must">
                    <div class="list__title m-flex">开户银行</div>
                    <div class="m-flex-end">
                        <input v-if="editStatus" v-model="user.bankName" type="text" class="list__input" placeholder="请输入">
                        <span v-else="" class="list__span">{{userInfo.bankName}}</span>
                    </div>
                </li>
                <li class="list__li list__li--must">
                    <div class="list__title m-flex">银行卡号</div>
                    <div class="m-flex-end">
                        <input v-if="editStatus" v-model="user.bankNum" type="text" class="list__input" placeholder="请输入">
                        <span v-else="" class="list__span">{{userInfo.bankNum}}</span>
                    </div>
                </li>
                <li class="list__li">
                    <div class="list__title m-flex">车辆信息</div>
                    <div class="m-flex-end">
                        <div class="list__btn" @click="goVehicleInfo">{{user.status == 0 ? '添加' : '查看'}}</div>
                    </div>
                </li>
            </ul>
            <div class="upload">
                <div class="upload__top">
                    <div class="upload__title">头像</div>
                    <div class="upload__example" @click="lookExample('./static/guide/img/scsfz.jpg')">查看示例</div>
                </div>
                <my-upload v-model="headPhoto" :disabled="editStatus"></my-upload>
            </div>
            <div class="upload">
                <div class="upload__top">
                    <div class="upload__title">身份证正面</div>
                    <div class="upload__example" @click="lookExample('./static/guide/img/scsfz.jpg')">查看示例</div>
                </div>
                <my-upload v-model="identityFrontPhoto" :disabled="editStatus"></my-upload>
            </div>
            <div class="upload">
                <div class="upload__top">
                    <div class="upload__title">身份证反面</div>
                    <div class="upload__example" @click="lookExample('./static/guide/img/scsfz.jpg')">查看示例</div>
                </div>
                <my-upload v-model="identityReversePhoto" :disabled="editStatus"></my-upload>
            </div>
            <div class="upload">
                <div class="upload__top">
                    <div class="upload__title">手持身份证</div>
                    <div class="upload__example" @click="lookExample('./static/guide/img/scsfz.jpg')">查看示例</div>
                </div>
                <my-upload v-model="identityInHandPhoto" :disabled="editStatus"></my-upload>
            </div>
            <div class="upload">
                <div class="upload__top">
                    <div class="upload__title">导游证</div>
                    <div class="upload__example" @click="lookExample('./static/guide/img/scsfz.jpg')">查看示例</div>
                </div>
                <my-upload v-model="guidePhoto" :disabled="editStatus"></my-upload>
            </div>
            <div v-if="user.status == 0" class="operation-btn" @click="submit">提交审核</div>
            <div v-else-if="user.status == 1" class="operation-btn">审核中</div>
            <div v-else-if="user.status == 2 || user.status == 3" class="operation-btn" @click="reedit">重新编辑</div>
            <div v-else-if="user.status == 4" class="operation-btn">违规禁用</div>
            <div class="popup" v-if="examplePhoto" @click="lookExampleHide">
                <img class="popup__img" :src="examplePhoto">
            </div>
        </my-body>
    </my-page>
</template>

<script>
    import MyBody from "../../components/layout/body";
    import MyHead from "../../components/layout/head";
    import MyUpload from "../../components/upload/upload";
    import MyPage from "../../components/layout/page";

    export default {
        //组件名字
        name: '',

        //引入子组件
        components: {MyPage, MyUpload, MyHead, MyBody},

        //接收父组件的传值
        props: {},

        //组件私有数据
        data() {
            return {
                editStatus: false,//是否可以编辑
                user: {//用户信息
                    status: 0,
                },
                examplePhoto: '',//示例图片
                headPhoto: [],//头像
                identityFrontPhoto: [],//身份证正面
                identityReversePhoto: [],//身份证反面
                identityInHandPhoto: [],//手持身份证
                guidePhoto: [],//导游证
            }
        },

        //数据计算
        computed: {
            userInfo() {
                return this.$store.state.user.userInfo
            },
        },

        //数据监听
        watch: {},

        //生命周期钩子：组件实例创建之后调用
        created() {
            const self = this
            self.api.getUserInfo()
            self.user = self.fn.deepClone(self.userInfo)
            if(self.userInfo.status == 0){
                self.editStatus = true
            }

            //头像
            if(self.userInfo.headPhoto){
                self.headPhoto.push({
                    fileUrl: self.userInfo.headPhoto,
                })
            }

            //身份证正面
            if(self.userInfo.identityFrontPhoto){
                self.identityFrontPhoto.push({
                    fileUrl: self.userInfo.identityFrontPhoto,
                })
            }

            //身份证反面
            if(self.userInfo.identityReversePhoto){
                self.identityReversePhoto.push({
                    fileUrl: self.userInfo.identityReversePhoto,
                })
            }

            //手持身份证
            if(self.userInfo.identityInHandPhoto){
                self.identityInHandPhoto.push({
                    fileUrl: self.userInfo.identityInHandPhoto,
                })
            }

            //导游证
            if(self.userInfo.guidePhoto){
                self.guidePhoto.push({
                    fileUrl: self.userInfo.guidePhoto,
                })
            }
        },

        //生命周期钩子：组件实例渲染之后调用
        mounted() {
        },

        //自定义函数
        methods: {
            /**
             * 查看示例图片
             */
            lookExample(path) {
                const self = this
                self.examplePhoto = path
            },

            /**
             * 隐藏示例图片
             */
            lookExampleHide() {
                const self = this
                self.examplePhoto = ''
            },

            /**
             * 查看车辆信息
             */
            goVehicleInfo(){
                const self = this
                self.$router.push({
                    name: 'userVehicleInfo'
                })
            },

            /**
             * 重新编辑
             */
            reedit(){
                const self = this
                self.user.status = 0
                self.editStatus = true
            },

            /**
             * 提交审核
             */
            submit() {
                const self = this

                //获取上传图片信息
                self.user.headPhoto = self.headPhoto[0] ? self.headPhoto[0].fileUrl : ''
                self.user.identityFrontPhoto = self.identityFrontPhoto[0] ? self.identityFrontPhoto[0].fileUrl : ''
                self.user.identityReversePhoto = self.identityReversePhoto[0] ? self.identityReversePhoto[0].fileUrl : ''
                self.user.identityInHandPhoto = self.identityInHandPhoto[0] ? self.identityInHandPhoto[0].fileUrl : ''
                self.user.guidePhoto = self.guidePhoto[0] ? self.guidePhoto[0].fileUrl : ''

                //上传字段验证
                if (!self.user.name) {
                    self.fn.myMessage('请输入姓名')
                } else if (!self.user.areaName) {
                    self.fn.myMessage('请输入地区')
                } else if (!self.user.identityNum) {
                    self.fn.myMessage('请输入身份证号')
                } else if (!self.user.guideNum) {
                    self.fn.myMessage('请输入导游证号')
                } else if (!self.user.bankName) {
                    self.fn.myMessage('请输入开户银行')
                } else if (!self.user.bankNum) {
                    self.fn.myMessage('请输入银行卡号')
                } else if (!self.user.headPhoto) {
                    self.fn.myMessage('请上传头像')
                } else if (!self.user.identityFrontPhoto) {
                    self.fn.myMessage('请上传身份证正面')
                } else if (!self.user.identityReversePhoto) {
                    self.fn.myMessage('请上传身份证反面')
                } else if (!self.user.identityInHandPhoto) {
                    self.fn.myMessage('请上传手持身份证')
                } else if (!self.user.guidePhoto) {
                    self.fn.myMessage('请上传导游证')
                } else {
                    self.api.setUserInfo(self.user).then(() => {
                        self.$router.push({
                            name: 'index'
                        })
                    })
                }
            },
        },
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";

    .list__li {
        @include m-border(t);
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: rem(88);
        box-sizing: border-box;
        padding: 0 rem(30) 0 rem(54);
        background-color: #fff;
        &:first-child {
            @include m-border();
        }
    }

    .list__li--must:before {
        content: '';
        position: absolute;
        top: 50%;
        left: rem(30);
        z-index: 1;
        width: rem(14);
        height: rem(16);
        margin-top: rem(-11);
        background: url('../../assets/common/must.png') no-repeat 0 0;
        background-size: 100%;
    }

    .list__title {
        width: rem(200);
        font-size: rem(26);
        color: #333;
    }

    .list__span {
        font-size: rem(26);
        color: #999;
    }

    .list__input {
        width: 100%;
        font-size: rem(26);
        color: #999;
        text-align: right;
        border: none;
    }

    .list__btn {
        display: flex;
        justify-content: center;
        align-items: center;
        height: rem(54);
        padding: 0 rem(40);
        font-size: rem(22);
        color: #fff;
        border-radius: rem(4);
        background-color: #dec190;
    }

    .upload {
        margin-top: rem(20);
        background-color: #fff;
    }

    .upload__top {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: rem(88);
        box-sizing: border-box;
        padding: 0 rem(30) 0 rem(50);
        &:before {
            content: '';
            position: absolute;
            top: 50%;
            left: rem(30);
            z-index: 1;
            width: rem(14);
            height: rem(16);
            margin-top: rem(-11);
            background: url('../../assets/common/must.png') no-repeat 0 0;
            background-size: 100%;
        }
    }

    .upload__title {
        font-size: rem(28);
        color: #333;
    }

    .upload__example {
        font-size: rem(28);
        color: #333;
    }

    .operation-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: rem(88);
        margin-top: rem(30);
        font-size: rem(30);
        color: #fff;
        background-color: #dec190;
    }

    .popup {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1000;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .3);
    }

    .popup__img {
        width: 80%;
    }
</style>
