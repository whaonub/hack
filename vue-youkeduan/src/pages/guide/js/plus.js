import h5Plus from '../../../lib/js/plus'
import router from '../router/index'
import fn from './index'

export default {
    ...h5Plus,

    /**
     * 打印plus日志
     */
    log(data) {
        console.debug(JSON.stringify(data))
    },

    /**
     * 物理按键返回
     * @param backFn
     */
    goBack(backFn = null) {
        const self = this
        self.plus(function () {
            let backButtonPress = 0 //点击返回按键次数

            //移除监听事件
            plus.key.removeEventListener('backbutton', function () {
            })

            //添加监听事件
            plus.key.addEventListener('backbutton', function () {
                if (router.history.current.meta.index > 1) {
                    if (backFn) {
                        backFn()
                    } else {
                        router.back()
                    }
                } else {
                    backButtonPress++
                    if (backButtonPress > 1) {
                        plus.runtime.quit();
                    } else {
                        fn.myMessage('再按一次退出程序')
                    }

                    setTimeout(function () {
                        backButtonPress = 0
                    }, 2000)
                }
                //stopPropagation()
            })
        })
    },

    /**
     * 获取推送配置
     */
    getPushConfig() {
        const self = this
        return new Promise((resolve, reject) => {
            self.plus(function () {
                let config = plus.push.getClientInfo()
                resolve(config)
            }, function () {
                reject('')
            })
        })
    },

    /**
     * 获取系统信息
     */
    getSystem() {
        const self = this
        return new Promise((resolve, reject) => {
            self.plus(function () {
                resolve(plus.device)
            })
        })
    },

    /**
     * 获取版本号
     */
    getVersion() {
        const self = this
        return new Promise((resolve, reject) => {
            self.plus(function () {
                resolve(plus.runtime.version)
            })
        })
    },

    /**
     * 下载文件
     */
    downFile(path) {
        const self = this
        return new Promise((resolve, reject) => {
            let wgtWaiting = null //加载动画
            self.plus(function () {
                wgtWaiting = plus.nativeUI.showWaiting("开始下载")
                let downUrl = path
                let downOption = {filename: "_doc/download/", retry: 1};
                let task = plus.downloader.createDownload(downUrl, downOption, function (download, status) {
                    wgtWaiting.close()
                    if (status == 200) {
                        resolve(download.filename)
                    } else {
                        fn.myMessage('下载失败')
                        reject()
                    }
                })

                task.addEventListener("statechanged", function (download, status) {
                    switch (download.state) {
                        case 2:
                            wgtWaiting.setTitle("已连接");
                            break;
                        case 3:
                            let percent = download.downloadedSize / download.totalSize * 100;
                            wgtWaiting.setTitle("已下载 " + parseInt(percent) + "%");
                            break;
                        case 4:
                            wgtWaiting.setTitle("下载完成");
                            wgtWaiting.close()
                            break;
                    }
                })
                task.start();
            })
        })
    },

    /**
     * 安装app
     */
    installApp(path) {
        const self = this
        let wgtWaiting = null //加载动画
        self.plus(function () {
            wgtWaiting = plus.nativeUI.showWaiting("开始安装")
            plus.runtime.install(path, {}, function (wgtinfo) {
                wgtWaiting.close()
                plus.runtime.restart()
            }, function (error) {
                wgtWaiting.close()
                fn.myMessage('应用更新失败！')
            });
        })
    },

    /**
     * 询问
     */
    confirm(title, content, button, callBack) {
        const self = this
        self.plus(function () {
            plus.nativeUI.confirm(content, event => {
                callBack(event)
            }, title, button);
        })
    },

    /**
     * 分享
     * 微信好友 WXSceneSession
     * 微信朋友圈 WXSceneTimeline
     * QQ好友 qq
     * 腾讯微博 tencentweibo
     * 新浪微博 sinaweibo
     */
    share() {
        const self = this
        return new Promise((resolve, reject) => {
            self.plus(function () {
                plus.share.getServices(function (s) {
                    let shares = {};
                    for (let i in s) {
                        let t = s[i];
                        shares[t.id] = t;
                    }
                    resolve(shares)
                }, function (e) {
                    reject(e)
                })
            })
        })
    },

    /**
     * 发送分享消息
     */
    shareMessage(share, msg) {
        share.send(msg)
    },
}
