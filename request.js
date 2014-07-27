var http = require('http');

module.exports = function(url, callback){

    http.get(url, function(res) {
        // console.log('request: ' + url + '\r');
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