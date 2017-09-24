var net = require('net');

var server = net.createServer(function(socket) {
    var d = new Date();
    var date = d.getFullYear() + '-' + doubleDigit(d.getMonth() + 1) + '-' + doubleDigit(d.getDate()) + ' ' + doubleDigit(d.getHours()) + ':' + doubleDigit(d.getMinutes()) + '\n';
    socket.end(date);
})

server.listen(process.argv[2]);

function doubleDigit(value) {
    if (value < 10) {
        return '0' + value;
    }else { 
        return String(value);
    }
}