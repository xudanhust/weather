# 命令行天气预报
## 数据
* 天气数据来自中央气象台数据接口：[http://www.weather.com.cn/data/cityinfo/101010100.html](http://www.weather.com.cn/data/cityinfo/101010100.html)
* 取城市名接口：[http://int.dpool.sina.com.cn/iplookup/iplookup.php](http://int.dpool.sina.com.cn/iplookup/iplookup.php)

## 用法
输入：（默认自动通过当前IP获取城市，也可以指定城市名，城市名必须为中文）

	node main.js [杭州]

输出

	杭州的天气：雷阵雨转多云, 25℃到33℃
	
## 版本

* 1.0.0 实现天气查询功能
* 1.1.0 增加自动定位城市功能（根据IP地址）