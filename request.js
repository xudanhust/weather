var http = require('http');

var url = 'http://www.weather.com.cn/data/cityinfo/';

module.exports = function(cityCode, callback){

    var requestUrl = url + cityCode + '.html';

    http.get(requestUrl, function(res) {
        var data;
        res.on('data', function(chunk) {
            data = chunk;
        });
        res.on('end', function() { 
            callback(data);
        });
    }).on('error', function() {
        callback(null);
    });

};