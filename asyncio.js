var fs = require('fs');

fs.readFile(process.argv[2], function(err, data) {
    if (err) {
        console.log(err);
    }else {
        var text = data.toString();
        var lines = text.split('\n');
        console.log(lines.length - 1);
    }
})