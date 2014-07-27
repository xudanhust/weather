var request = require('./request');

var weatherUrl = 'http://www.weather.com.cn/data/cityinfo/';

var getWeather = function(cityCode, callback){
    weatherUrl += cityCode + '.html';
    request(weatherUrl, function(obj){
        var o = JSON.parse(obj.toString());
        callback(o);
    });
}

module.exports = getWeather;