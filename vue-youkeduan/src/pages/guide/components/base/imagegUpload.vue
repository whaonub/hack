<template>
    <div class="c-image">
        <input class="c-image__input" type="file" @change="imgUpload" accept="image/png,image/gif,image/jpeg" multiple>
        <img class="c-image__img" v-if="filePreviewUrl" :src="filePreviewUrl" alt="">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        //组件名字
        name: 'jr-image-upload',

        //引入子组件
        components: {},

        //接收父组件的传值
        props: {
            fieldName: {//字段名字
                type: String,
            },
            fileList: {//新上传的文件对象(多张是数组)
                type: [Array, Object],
            },
            imageUrl: {//预览图片
                type: [String, Array],
                default: '',
            },
            success: {//图片上传成功的回调
                type: Function,
            }
        },

        //组件私有数据
        data() {
            return {
                fileUrl: this.config.fileUrl,//文件的基地址
                filePreviewUrl: '',//图片预览地址
                file: null,//文件
            }
        },

        //数据计算
        computed: {},

        //生命周期钩子：组件实例创建之后调用
        created() {
            const self = this
            if (typeof self.fileList == 'object') {
                self.filePreviewUrl = self.fileList.filePreviewUrl
            } else if (typeof self.imageUrl == 'string') {
                self.filePreviewUrl = self.fileUrl + self.imageUrl
            }
        },

        //生命周期钩子：组件实例渲染之后调用
        mounted() {
        },

        //数据监听
        watch: {},

        //自定义函数
        methods: {
            /**
             * 图片上传处理
             */
            imgUpload(el) {
                const self = this
                let fileList = el.target.files //文件列表

                self.filePreviewUrl = window.URL.createObjectURL(fileList[0])
                self.fn.ossUploadFile(fileList[0], p => {
                    //处理上传进度
                }).then(res => {
                    self.file = res
                    self.file.fieldName = self.fieldName
                    self.file.filePreviewUrl = self.filePreviewUrl
                    if (self.success) {
                        self.fieldName
                        self.success(self.file)
                    }
                })
            }
        },
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";

    .c-image {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .c-image__input {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 99;
        width: 100%;
        height: 100%;
        opacity: 0;
    }

    .c-image__img {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 98;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
