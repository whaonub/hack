<template>
    <!--<div class="jr-upload">
        <div class="jr-upload__item" v-for="(item,key) in fileList" :key="key" v-if="limit > 1 && item">
            <img class="jr-upload__close" src="../assets/icon/close.png" @click="remove(item)">
            <img class="jr-upload__image" v-if="item.localUrl" :src="item.localUrl" alt="">
            <img class="jr-upload__image" v-else-if="item.url" :src="fileUrl + item.url" alt="">
        </div>

        <div class="jr-upload__upload" :class="{'jr-upload__upload&#45;&#45;list': limit > 1}"
             v-if="limit == 1 || fileList.length < limit" @click="nativeUpload">
            <slot></slot>
            <img class="jr-upload__show-image" v-if="show && limit == 1 && fileList[0] && fileList[0].localUrl" :src="fileList[0].localUrl" alt="">
            <img class="jr-upload__show-image" v-else-if="show && limit == 1 && fileList[0] && fileList[0].url" :src="fileUrl + fileList[0].url"
                 alt="">
            <input v-if="!disabled && !isPlus" class="jr-upload__input" type="file" @change="fileUpload"
                   :accept="accept" :multiple="limit > 1 ? true : false">
        </div>
    </div>-->
    <div class="upload-list">
        <ul class="upload">
            <li v-for="(item, key) in fileList" :key="key" class="upload__li">
                <img v-if="disabled" @click.stop="remove(item)" class="upload__close" src="../assets/icon/close.png">
                <img v-if="item.localUrl" class="upload__img" :src="item.localUrl">
                <img v-else="" class="upload__img" :src="fileUrl + item.fileUrl">
                <input v-if="disabled" class="upload__input" type="file" :accept="accept" @change="fileUpload($event, item)">
            </li>
            <li v-if="disabled && !isMax" class="upload__li">
                <img class="upload__add" src="../assets/icon/fileAdd.png">
                <input class="upload__input" type="file" :accept="accept" @change="fileUpload($event)">
            </li>

        </ul>
    </div>
</template>

<script>
    export default {
        //组件名字
        name: 'my-upload',

        //引入子组件
        components: {},

        //接收父组件的传值
        props: {
            //双向绑定值
            value: {
                type: Array,
            },

            //是否允许上传操作
            disabled: {
                type: Boolean,
                default: true,
            },

            //文件上传地址
            action: {
                type: String,
                default: null,
            },

            //上传的名字
            name: {
                type: String,
                default: null,
            },

            //上传数量限制
            limit: {
                type: Number,
                default: 1,
            },

            //允许上传的文件类型
            accept: {
                type: String,
                default: 'image/png,image/gif,image/jpeg',
            },
        },

        //组件私有数据
        data() {
            return {
                fileUrl: this.config.fileUrl,//文件的基地址
                isPlus: false,//是否在h5+环境中
                fileList: [],//文件列表
            }
        },

        //数据计算
        computed: {
            //是否到达最大数量
            isMax() {
                const self = this
                let isMax = false
                if (self.fileList.length >= self.limit) {
                    isMax = true
                }
                return isMax
            },
        },

        //数据监听
        watch: {
        },

        //生命周期钩子：组件实例创建之后调用
        created() {
            const self = this
            if (window.plus) {
                self.isPlus = true
            }

            self.fileList = self.value
        },

        //生命周期钩子：组件实例渲染之后调用
        mounted() {
        },

        //自定义函数
        methods: {
            /**
             * 文件上传处理
             */
            fileUpload(event, val = '') {
                const self = this
                let fileList = event.target.files //上传文件列表

                for (let i = 0; i < fileList.length; i++) {
                    let value = fileList[i]
                    let file = {
                        fileName: '',//文件上传前的名字
                        fileUrl: '',//上传成功后的地址
                        localUrl: window.URL.createObjectURL(value),//本地预览地址
                    }

                    //文件上传处理
                    self.fn.ossUploadFile(value, p => {
                        //处理上传进度
                    }).then(res => {
                        if (val) {//修改
                            self.fileList.forEach((item, index) => {
                                if (item.fileUrl == val.fileUrl) {
                                    file.fileName = res.fileName
                                    file.fileUrl = res.fileUrl
                                    self.fileList.splice(index, 1, file)
                                }
                            })
                        } else {//添加
                            if (self.fileList.length < self.limit) {
                                file.fileName = res.fileName
                                file.fileUrl = res.fileUrl
                                self.fileList.push(file)
                            }
                        }
                        self.$emit('input', self.fileList)
                    })
                }
            },


            /**
             * 原生选择图片
             */
            nativeUpload() {
                const self = this

                plus.nativeUI.actionSheet({
                    cancel: "取消", buttons: [
                        {title: "拍照"},
                        {title: "从相册中选择"}
                    ]
                }, function (e) {//1 是拍照  2 从相册中选择
                    switch (e.index) {
                        case 1:
                            clickCamera();
                            break;
                        case 2:
                            clickGallery();
                            break;
                    }
                })

                //打开相册
                function clickGallery() {
                    plus.gallery.pick(function (path) {
                        plus.zip.compressImage({
                            src: path,
                            dst: "_doc/chat/gallery/" + path,
                            quality: 20,
                            overwrite: true
                        }, function (e) {
                            console.error(JSON.stringify(e))

                            // var task = plus.uploader.createUpload(server + "upload/chat", {
                            //     method: "post"
                            // }, function(t, sta) {
                            //     console.log(JSON.stringify(t))
                            //     if(sta == 200) {
                            //         var msg = t.responseText;
                            //         var oImg = JSON.parse(msg);
                            //         var imgUrl = oImg.urls;
                            //         var re = new RegExp("\\\\", "g");
                            //         imgUrl = imgUrl.replace(re, "/");
                            //         uploadMsg(2, imgUrl);
                            //     }
                            // });
                            // task.addFile(e.target, {});
                            // task.start();
                        }, function (err) {
                            console.error("压缩失败：" + err.message);
                        });

                    }, function (err) {
                    });
                };


                // 拍照
                function clickCamera() {
                    var cmr = plus.camera.getCamera();
                    var res = cmr.supportedImageResolutions[0];
                    var fmt = cmr.supportedImageFormats[0];
                    cmr.captureImage(function (path) {
                        //plus.io.resolveLocalFileSystemURL(path, function(entry) {
                        plus.io.resolveLocalFileSystemURL(path, function (entry) {
                            var localUrl = entry.toLocalURL();
                            plus.zip.compressImage({
                                src: localUrl,
                                dst: "_doc/chat/camera/" + localUrl,
                                quality: 20,
                                overwrite: true
                            }, function (e) {
                                var task = plus.uploader.createUpload(server + "upload/chat", {
                                    method: "post"
                                }, function (t, sta) {
                                    if (sta == 200) {
                                        var msg = t.responseText;
                                        var oImg = JSON.parse(msg);
                                        var imgUrl = oImg.urls;
                                        var re = new RegExp("\\\\", "g");
                                        imgUrl = imgUrl.replace(re, "/");
                                        console.log(imgUrl);
                                        uploadMsg(2, imgUrl);
                                    }
                                });
                                task.addFile(e.target, {});
                                task.start();
                            }, function (err) {
                                console.log("压缩失败：  " + err.message);
                            });
                        });
                    }, function (err) {
                        console.error("拍照失败：" + err.message);
                    }, {
                        index: 1
                    });
                }
            },

            /**
             * 删除图片
             */
            remove(val) {
                const self = this
                self.fileList.forEach((item, index) => {
                    if (item.fileUrl == val.fileUrl) {
                        self.fileList.splice(index, 1)
                    }
                })
            },
        },
    }
</script>

<style lang="scss" scoped="">
    @import "../../css/function";

    .upload-list {
        box-sizing: border-box;
        padding: 0 rem(30);
    }

    .upload {
        display: flex;
        flex-wrap: wrap;
    }

    .upload__li {
        position: relative;
        width: rem(150);
        height: rem(150);
        margin: 0 0 rem(30) rem(30);
        &:nth-child(4n+1) {
            margin-left: 0;
        }
    }

    .upload__add {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
    }

    .upload__input {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        opacity: 0;
    }

    .upload__close {
        position: absolute;
        top: rem(-15);
        right: rem(-15);
        z-index: 3;
        width: rem(30);
        height: rem(30);
    }

    .upload__img {
        width: 100%;
        height: 100%;
    }

    //旧版本
    .jr-upload {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
    }

    .jr-upload__item {
        position: relative;
        width: rem(218);
        height: rem(218);
        margin: 0 rem(24) rem(24) 0;
        box-sizing: border-box;
        border: solid 1px #dedada;
    }

    .jr-upload__item:nth-child(3n+3) {
        margin-right: 0;
    }

    .jr-upload__close {
        position: absolute;
        top: 0;
        right: 0;
        width: rem(40);
        height: rem(40);
        margin: rem(-20) rem(-20) 0 0;
    }

    .jr-upload__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .jr-upload__upload {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .jr-upload__upload--list {
        display: flex;
        justify-content: center;
        align-items: center;
        width: rem(218);
        height: rem(218);
        box-sizing: border-box;
        margin-bottom: rem(24);
        border: solid 1px #dedada;
        background-color: #f7f7f7;
    }

    .jr-upload__show-image {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 998;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .jr-upload__input {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
        width: 100%;
        height: 100%;
        opacity: 0;

    }
</style>
