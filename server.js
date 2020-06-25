const express = require("express");
const bodyParser = require("body-parser");

//controllers
const redirect = require("./controllers/redirect.controller");
//routes import
const mainRoute = require("./routes/main.routes");
const adminRoute = require("./routes/admin.routes");
const productsRoute = require("./routes/products.routes");

const app = express();

app.set("view engine", "ejs");
app.set("views", "pages");
// middlewares
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes middleware

app.use(mainRoute);
app.use("/admin", adminRoute);
app.use("/products", productsRoute);

//404 middleware
app.use(redirect);

port = process.env.PORT || 4000;
app.listen(port, () => console.log(`listening on ${port}`));
