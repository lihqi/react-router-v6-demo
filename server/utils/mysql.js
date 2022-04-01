const mysql = require("mysql");

const request = mysql.createConnection({
  host: "106.55.107.78",
  user: "sa",
  password: "user@1234",
  database: "ceshi",
});

request.connect((err) => {
  if (err) {
    throw new Error(err);
  }
  console.log("数据库连接成功!");
});

// mysq语句
function sqlStr(sql) {
  return new Promise((resolve, reject) => {
    request.query(sql, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
}

const SERVER_HTTP = "http://106.55.107.78:8888/";

module.exports = { SERVER_HTTP, sqlStr };
