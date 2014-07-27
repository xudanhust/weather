var fs = require('fs'),
    request = require('./request');

var data = JSON.parse(fs.readFileSync('weathercity.code.json', 'utf-8')),
    cityName = process.argv.splice(2)[0],
    cityCode = data[cityName];

if(!cityCode){
    for(var i in data){
        if(i.indexOf(cityName) !== -1){
            cityCode = data[i];
            break;
        }
    }
}

request(cityCode, function(obj){
    var wData = JSON.parse(obj.toString()),
        o = wData.weatherinfo;
    console.log(o.city + '的天气：' + o.weather + ', ' + o.temp2 + '到' + o.temp1 );
});

