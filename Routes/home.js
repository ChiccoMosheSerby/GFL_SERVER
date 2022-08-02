const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  // get all branches to DB

  res.send({ serverRes: "hello world" });
});
module.exports = router;
