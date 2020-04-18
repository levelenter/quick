"use strict";
exports.__esModule = true;
var express_1 = require("express");
var fs_1 = require("fs");
// 秘密鍵とデジタル証明書ファイルを指定する
var options = {
    key: fs_1["default"].readFileSync('./out/server.key'),
    cert: fs_1["default"].readFileSync('./out/server.crt')
};
var app = express_1["default"]();
var path = require("path");
var assetsRoutes = express_1["default"].Router(); // アセットを取得する際のルーター
app.use('/html', express_1["default"].static(path.resolve('html'))); // TOOD: コンテンツは見直し
// let server = https.createServer(options,app);
// server.listen(3000, ()=>{
// 	console.info("Node.jsはPORT:" + 3000 + "をリッスンしています。" );
// });
var server = app.listen(3000, function () {
    console.info("Node.jsはPORT:" + 3000 + "をリッスンしています。");
});
