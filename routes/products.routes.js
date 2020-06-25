const router = require("express").Router();
const product = require("../controllers/products.controller");

router.get("/", product.getHome);

router.get("/cart", product.getCart);

router.post("/cart", product.postAddToCart);

router.get("/:id", product.getProductDetails);

router.get("/:id/edit", product.getEditProduct);

router.post("/:id/edit", product.postEditProduct);

router.post("/:id/delete", product.postDeleteProduct);

router.post("/:id/cart-delete", product.postDeleteCartProduct);

module.exports = router;
