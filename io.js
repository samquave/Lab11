var fs = require('fs');

var data = fs.readFileSync(process.argv[2]);
var text = data.toString();

var line = text.split('\n');
console.log(line.length - 1);