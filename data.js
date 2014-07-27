var fs = require('fs');

var dataFilePath = 'weathercity.code.txt',
    dataPath = 'weathercity.code.json';

var content = fs.readFileSync(dataFilePath, 'utf-8').split('|'),
    data = {},
    temp;

for(var i=0, len = content.length; i<len; i++){
    temp = content[i].split(',');
    data[temp[0]] = temp[1];
}

fs.writeFileSync(dataPath, JSON.stringify(data));

console.log('Data is OK!');