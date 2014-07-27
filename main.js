var fs = require('fs'),
    iconv = require('iconv-lite'),
    // geoip = require('geoip-lite'),
    request = require('./request');

var weatherUrl = 'http://www.weather.com.cn/data/cityinfo/',
    // ipUrl = 'http://curlmyip.com/',
    ipUrl = 'http://int.dpool.sina.com.cn/iplookup/iplookup.php';

var data = JSON.parse(fs.readFileSync('data/weathercity.code.json', 'utf-8')),
    cityName = process.argv.splice(2)[0],
    cityCode;

if(!cityName){
    request(ipUrl, function(obj){
        var result = iconv.decode(obj, 'GBK');
        cityName = result.split('\t')[5];
        outPutWeather(cityName);
    });
}else{
    outPutWeather(cityName);
}

function outPutWeather(cityName){
    cityCode = data[cityName];
    if(!cityCode){
        for(var i in data){
            if(i.indexOf(cityName) !== -1){
                cityCode = data[i];
                break;
            }
        }
    }
    if(!cityCode){
        console.log('ERROR: 找不到城市');
        return;
    }
    weatherUrl += cityCode + '.html';
    request(weatherUrl, function(obj){
        var wData = JSON.parse(obj.toString()),
            o = wData.weatherinfo;
        console.log(o.city + '今天天气：' + o.weather + ', ' + o.temp2 + '到' + o.temp1 );
    });
}
