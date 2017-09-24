var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
    if (req.method === 'GET') {
        var urlData = url.parse(req.url, true);
        if (urlData.pathname === '/api/parsetime') {
            var date = new Date(urlData.query.iso);
            var data = {
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            };
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
        } else if (urlData.pathname === '/api/unixtime') {
            var date = new Date(urlData.query.iso);
            var data = {
                unixtime: date.getTime()
            };
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(data));
        }else {
            res.writeHead(404);
            res.end('');
        }
    }


})
server.listen(process.argv[2]);