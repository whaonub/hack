var app = new Vue({
    el: '#signLogin',
    data: function() {
        return {
            current: '',
            changeMode: true,
            calculator: false,
            weather: false,
            myModel: false,
            weatherItems: [],
            selectData: "",
            selectedVal: ""
        }
    },
    created: function() {
        this.obtainWeather()
    },
    methods: {

        press: function(event) {
            var me = this
            var key = event.target.textContent

            if (
                key != '=' &&
                key != 'C' &&
                key != '*' &&
                key != '/' &&
                key != '√' &&
                key != "x 2" &&
                key != "%" &&
                key != "←" &&
                key != "±" &&
                key != "sin" &&
                key != "cos" &&
                key != "tan" &&
                key != "log" &&
                key != "ln" &&
                key != "x^" &&
                key != "x !" &&
                key != "π" &&
                key != "e" &&
                key != "rad" &&
                key != "°"
            ) {
                me.current += key

            } else if (key === '=') {

                if ((me.current).indexOf('^') > -1) {
                    var base = (me.current).slice(0, (me.current).indexOf('^'))
                    var exponent = (me.current).slice((me.current).indexOf('^') + 1)
                    me.current = eval('Math.pow(' + base + ',' + exponent + ')')
                } else {
                    me.current = eval(me.current)
                }

            } else if (key === 'C') {

                me.current = ''

            } else if (key === '*') {

                me.current += '*'

            } else if (key === '/') {

                me.current += '/'

            } else if (key === '+') {

                me.current += '+'

            } else if (key === '-') {

                me.current += '-'

            } else if (key === '±') {

                if ((me.current).charAt(0) === '-') {
                    me.current = (me.current).slice(1)
                } else {
                    me.current = '-' + me.current
                }

            } else if (key === '←') {

                me.current = me.current.substring(0, me.current.length - 1)

            } else if (key === '%') {

                me.current = me.current / 100

            } else if (key === 'π') {

                me.current = me.current * Math.PI

            } else if (key === 'x 2') {

                me.current = eval(me.current * me.current)

            } else if (key === '√') {

                me.current = Math.sqrt(me.current)

            } else if (key === 'sin') {

                me.current = Math.sin(me.current)

            } else if (key === 'cos') {

                me.current = Math.cos(me.current)

            } else if (key === 'tan') {

                me.current = Math.tan(me.current)

            } else if (key === 'log') {

                me.current = Math.log10(me.current)

            } else if (key === 'ln') {

                me.current = Math.log(me.current)

            } else if (key === 'x^') {

                me.current += '^'

            } else if (key === 'x !') {

                var number = 1
                if (me.current === 0) {
                    me.current = '1'
                } else if (me.current < 0) {
                    me.current = NaN
                } else {
                    var number = 1
                    for (var i = me.current; i > 0; i--) {
                        number *= i
                    }
                    me.current = number
                }

            } else if (key === 'e') {

                me.current = Math.exp(me.current)

            } else if (key === 'rad') {

                me.current = me.current * (Math.PI / 180)

            } else if (key === '°') {

                me.current = me.current * (180 / Math.PI)

            }
        },
        changeModeEvent: function() {
            var me = this
            me.changeMode = !me.changeMode
        },
        changeCalculator: function() {
            var me = this
            me.calculator = true
        },
        changeMyModel: function(event) {
            var me = this
            if (event.target.parentElement.className == "shouxian" || event.target.className == "shouxian") {
                $.ajax({
                    url: "../app/js/selectJson.json",
                    success: function(res) {
                        me.selectData = res.data
                        me.selectedVal = me.selectData[0].value
                    }
                })
            }
            me.myModel = true
        },
        changeWeather: function() {
            var me = this
            me.weather = true
        },
        close: function() {
            this.current = "";
            this.calculator = false
        },
        closeMyModel: function() {
            this.myModel = false
            this.selectData = ""
        },
        getSelected: function(event) {
            //获取选中的机构代码
            this.selectedVal = event.target.value
        },
        //选取机构后点击确定按钮
        handelSure: function() {
            var me = this
            $.ajax({
                url: "",
                data: me.selectedVal,
                type: "post",
                success: function() {
                    console.log(1)
                }
            })
        },
        closeWeather: function() {
            var me = this
            me.weather = false
        },
        // 天气预报
        obtainWeather: function() {
            // 百度地图
            var me = this;
            var map = new BMap.Map('map');
            var myCity = new BMap.LocalCity();
            var cityName;
            myCity.get(myFun); //异步获得当前城市
            function myFun(result) {
                cityName = result.name.replace('市', '');
            }
            // 渲染页面
            setInterval(function time() {
                    var today = new Date();
                    var year = today.getFullYear();
                    var mon = today.getMonth() + 1;
                    var day = today.getDate();

                    var h = today.getHours();
                    var m = today.getMinutes();
                    // add a zero in front of numbers<10
                    m = checkTime(m);

                    function checkTime(i) {
                        if (i < 10) {
                            i = "0" + i
                        }
                        return i
                    }
                    $("span#time1").text(year + "-" + mon + "-" + day);
                    $("span#time2").text(h + ":" + m);
                }, 300)
                //设置延时，因为获得当前城市所在地是异步的
            setTimeout(function() {
                var url = 'https://sapi.k780.com/?app=weather.future&appkey=10003&sign=b59bc3ef6191eb9f747dd4e83c99f2a4&format=json&jsoncallback=getWeather_week&weaid=' + encodeURI(cityName);
                $.ajax({
                    type: "GET",
                    cache: false,
                    url: url,
                    dataType: "jsonp",
                    //jsonp: "callback",
                    jsonpCallback: "getWeather_week",
                    success: function(response) {
                        var result = response.result;
                        me.weatherItems = result
                    }
                });
            }, 1000);
        },
    }
})