"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
// 秘密鍵とデジタル証明書ファイルを指定する
var options = {
    key: fs_1["default"].readFileSync('./out/server.key'),
    cert: fs_1["default"].readFileSync('./out/server.crt')
};
var port = 9001;
// var io = require('socket.io').listen(port,options); // https
var io = require('socket.io').listen(port);
console.log((new Date()) + " Server is listening on port " + port);
io.sockets.on('connection', function (socket) {
    socket.on('message', function (message) {
        socket.broadcast.emit('message', message);
    });
    socket.on('disconnect', function () {
        socket.broadcast.emit('user disconnected');
    });
});
