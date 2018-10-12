import cookie from 'js-cookie'
import config from './config'

export default {
    /**
     * 登录处理
     */
    login() {
        cookie.set(config.environmentPrefix + 'isLogin', true)
    },

    /**
     * 退出登录处理
     * @param root
     */
    logout(root) {
        cookie.remove(config.environmentPrefix + 'isLogin')
        root.$router.push('/')
    },

    /**
     *  判断是否登录
     * @returns {*}
     */
    islogin() {
        return cookie.get(config.environmentPrefix + 'isLogin')
    },

    getCoord(){//获取地理位置信息
        return new Promise((resolve, reject) =>{
            let map = new AMap.Map('allmap') //地图对象
            let info = {//位置信息
                longitude: '116.403965', //经度
                latitude: '39.915143',//维度
            }

            //地图定位
            map.plugin('AMap.Geolocation', function () {
                let geolocation = new AMap.Geolocation({
                    enableHighAccuracy: true,//是否使用高精度定位，默认:true
                    timeout: 10000,          //超过10秒后停止定位，默认：无穷大
                    maximumAge: 0,           //定位结果缓存0毫秒，默认：0
                    convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
                    showButton: true,        //显示定位按钮，默认：true
                    buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
                    buttonOffset: new AMap.Pixel(20, 70),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                    showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
                    showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
                    panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
                    zoomToAccuracy: true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                });
                map.addControl(geolocation);
                geolocation.getCurrentPosition();

                //返回定位信息
                AMap.event.addListener(geolocation, 'complete', onComplete => {
                    info.longitude = onComplete.position.lng //获取到的经度
                    info.latitude= onComplete.position.lat //获取到的纬度

                    resolve(info)
                })

                //返回定位出错信息
                AMap.event.addListener(geolocation, 'error', onError => {
                    // 定位失败，设置中心点坐标和地图级别（默认到天安门）
                    resolve(info)
                })
            })
        })
    },
}
