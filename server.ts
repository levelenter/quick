import express from "express";
import https from "https";
import fs from "fs";

// 秘密鍵とデジタル証明書ファイルを指定する
const options = { 
  key : fs.readFileSync('./out/server.key'),
  cert: fs.readFileSync('./out/server.crt')
};

const app = express();
const path = require("path");

const assetsRoutes = express.Router(); // アセットを取得する際のルーター
app.use('/html', express.static(   path.resolve('html'))); // TOOD: コンテンツは見直し


// let server = https.createServer(options,app);
// server.listen(3000, ()=>{
// 	console.info("Node.jsはPORT:" + 3000 + "をリッスンしています。" );
// });


let server = app.listen(3000, ()=>{
	console.info("Node.jsはPORT:" + 3000 + "をリッスンしています。" );
});