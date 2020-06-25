const { productsArray } = require("./admin.controller");

const cartArray = [];

module.exports.getHome = (req, res) => {
  res.redirect("/");
};

module.exports.getProductDetails = (req, res) => {
  res.render("productDetail", {
    pageTitle: "product detail",
    products: productsArray,
    productId: req.params.id,
  });
};

module.exports.getEditProduct = (req, res) => {
  res.render("admin/editProduct", {
    pageTitle: "edit-product",
    products: productsArray,
    productId: req.params.id,
  });
};

module.exports.postEditProduct = (req, res) => {
  productsArray.forEach((product) => {
    if (product.id == Number(req.body.productId)) {
      productsArray.splice(productsArray.indexOf(product), 1, {
        id: req.body.productId,
        title: req.body.productTitle,
        price: req.body.productPrice,
        description: req.body.productDescription,
      });
    }
  });
  res.redirect("/admin/view-products");
};

var sum = 0;
cartArray.forEach((item) => {
  sum += Number(item.price);
});

const totalPrice = sum;
module.exports.getCart = (req, res) => {
  res.render("cart", {
    pageTitle: "cart",
    cart: cartArray,
    totalPrice: totalPrice,
  });
};

module.exports.postAddToCart = (req, res) => {
  productsArray.forEach((product) => {
    if (product.id == Number(req.body.productId)) {
      cartArray.push(product);
      res.redirect("/products/cart");
    }
  });
};

module.exports.postDeleteProduct = (req, res) => {
  productsArray.forEach((product) => {
    if (product.id == Number(req.params.id)) {
      productsArray.splice(productsArray.indexOf(product), 1);
      cartArray.forEach((item) => {
        if (item.id == Number(req.params.id)) {
          cartArray.splice(cartArray.indexOf(item), 1);
          res.redirect("/admin/view-products");
        }
      });
    }
  });
};

module.exports.postDeleteCartProduct = (req, res) => {
  cartArray.forEach((item) => {
    if (item.id == Number(req.params.id)) {
      cartArray.splice(cartArray.indexOf(item), 1);
      res.redirect("/products/cart");
    }
  });
};
