const router = require("express").Router();
const admin = require("../controllers/admin.controller");

router.get("/", admin.getHome);

router.get("/add-product", admin.getAddProduct);

router.post("/add-product", admin.addNewProduct);

router.get("/view-products", admin.getViewProducts);

module.exports = router;
