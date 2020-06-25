const productsArray = [];

module.exports.getHome = (req, res) => {
  res.render("admin/admin", { pageTitle: "admin" });
};

module.exports.getAddProduct = (req, res) => {
  res.render("admin/addProduct", { pageTitle: "add product" });
};

module.exports.addNewProduct = (req, res) => {
  const productTitle = req.body.title;
  const productPrice = req.body.price;
  const productDescription = req.body.description;

  productsArray.push({
    id: Math.random(),
    title: productTitle,
    price: productPrice,
    description: productDescription,
  });
  res.status(302).redirect("/");
};

module.exports.getViewProducts = (req, res) => {
  res.render("admin/viewProduct", {
    pageTitle: "Products",
    products: productsArray,
  });
};

module.exports.productsArray = productsArray;
