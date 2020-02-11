var app = new Vue({
    el: "#app",
    data: {
        city: "",
        weatherList: [],
        defaultCityList: ["北京", "上海", "广州"]
    },
    methods: {
        getWeather: function () {
            console.log(this.city)
            var that = this
            axios.get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city)
                .then(function (response) {
                    that.weatherList = response.data.data.forecast
                    console.log(response.data.data.forecast)
                }).catch(function (err) {
                console.log(err)

            })
        },
        changeCity: function (city) {
            this.city = city
            this.getWeather()

        }
    }
})