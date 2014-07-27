var getCityCode = require('./lib/citycode'),
    getCityName = require('./lib/cityname'),
    getWeather = require('./lib/weather');

getCityName(process.argv.splice(2)[0], function(cityName){
    getWeather(getCityCode(cityName), function(o){
        var o = o.weatherinfo;
        console.log(o.city + '今天天气：' + o.weather + ', ' + o.temp2 + '到' + o.temp1 );
    });
});
