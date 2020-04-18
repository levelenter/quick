"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// 秘密鍵とデジタル証明書ファイルを指定する
// const options = { 
//   key : fs.readFileSync('./out/server.key'),
//   cert: fs.readFileSync('./out/server.crt')
// };
const app = express_1.default();
const path = require("path");
const assetsRoutes = express_1.default.Router(); // アセットを取得する際のルーター
app.use('/html', express_1.default.static(path.resolve('html'))); // TOOD: コンテンツは見直し
// let server = https.createServer(options,app);
// server.listen(3000, ()=>{
// 	console.info("Node.jsはPORT:" + 3000 + "をリッスンしています。" );
// });
let server = app.listen(3000, () => {
    console.info("Node.jsはPORT:" + 3000 + "をリッスンしています。");
});
//# sourceMappingURL=server.js.map