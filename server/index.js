const express = require("express");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.keepAliveTimeout = 5 * 3000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", require("./src/index.js"));

http.createServer(app).listen(8000, () => {
  console.log("node 启动");
});
