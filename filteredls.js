var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, data) {
    if (err) {
        console.log(err);
    }else {
        for (var i = 0; i < data.length; i++) {
            var current = path.extname(data[i]);
            var supplied = '.' + process.argv[3]
            if (current === supplied) {
                console.log(data[i]);
            }
        }
    }
})
