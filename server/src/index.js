const express = require("express");
const { sqlStr } = require("../utils/mysql");
const router = express.Router();

router.post("/login", (req, res) => {
  const { uid, pwd } = req.body;
  const sql = `select name,pwd from user where name='${uid}' and pwd='${pwd}'`;
  sqlStr(sql).then((data) => {
    if (data.length) {
      res.json(1).end();
    } else {
      res.json(0).end();
    }
  });
});
module.exports = router;
