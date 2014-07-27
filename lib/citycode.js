var fs = require('fs');

var data = JSON.parse(fs.readFileSync('./data/weathercity.code.json', 'utf8'));

var getCityCode = function(cityName){
    var cityCode = data[cityName];
    if(!cityCode){
        for(var i in data){
            if(i.indexOf(cityName) !== -1){
                return data[i];
            }
        }
    }
    if(!cityCode){
        console.error('ERROR: 找不到城市');
        return null;
    }
    return cityCode;
}

module.exports = getCityCode;