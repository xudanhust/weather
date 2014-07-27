var iconv = require('iconv-lite'),
    request = require('./request');

var ipUrl = 'http://int.dpool.sina.com.cn/iplookup/iplookup.php';

var getCityName = function(cityName, callback){
    if(cityName){
        callback(cityName);
    }else{
        request(ipUrl, function(obj){
            var result = iconv.decode(obj, 'GBK');
            cityName = result.split('\t')[5];
            callback(cityName);
        });
    }
};

module.exports = getCityName;