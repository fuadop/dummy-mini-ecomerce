const router = require("express").Router();
const main = require("../controllers/main.controller");

router.get("/", main.getHome);

module.exports = router;
