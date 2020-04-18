import express from "express";

const app = express();
const path = require("path");

app.use('/html', express.static( path.resolve('html'))); // TOOD: コンテンツは見直し

let server = app.listen(3000, ()=>{
	console.info("Node.jsはPORT:" + 3000 + "をリッスンしています。" );
});