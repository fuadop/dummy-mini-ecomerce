const admin = require("../controllers/admin.controller");

module.exports.getHome = (req, res) => {
  res.render("home", { pageTitle: "Home", products: admin.productsArray });
};
