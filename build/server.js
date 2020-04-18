"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const path = require("path");
app.use('/html', express_1.default.static(path.resolve('html'))); // TOOD: コンテンツは見直し
let server = app.listen(3001, () => {
    console.info("Node.jsはPORT:" + 3001 + "をリッスンしています。");
});
//# sourceMappingURL=server.js.map