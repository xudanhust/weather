var assert = require('assert'),
    getCityCode = require('../lib/citycode'),
    getCityName = require('../lib/cityname'),
    getWeather = require('../lib/weather');

describe('module: getCityName', function(){
    it('输入城市名，返回城市名', function(done){
        getCityName('杭州', function(cityName){
            if(cityName === '杭州'){
                done();
            }
        });
    });
    it('不输入城市名，根据IP获取城市名', function(done){
        getCityName(null, function(cityName){
            if(typeof cityName === 'string'){
                done();
            }
        });
    });
});

describe('module: getCityCode', function(){
    it('直接匹配获取城市代码', function(){
        assert.equal('101010100', getCityCode('北京'));
        assert.equal('101210101', getCityCode('浙江杭州'));
    });
    it('模糊匹配获取城市代码', function(){
        assert.equal('101210101', getCityCode('杭州'));
        assert.equal('101200101', getCityCode('武汉'));
        assert.equal('101180301', getCityCode('新乡'));
    });
});

describe('module: getWeather', function(){
    it('输入城市代码，返回天气数据', function(done){
        getWeather('101210101', function(o){
            if(typeof o === 'object' && o.weatherinfo && o.weatherinfo.weather){
                done();
            }
        });
    });
});

