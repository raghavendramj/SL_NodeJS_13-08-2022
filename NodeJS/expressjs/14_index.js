const express = require("express");
const app = express();
const products = require("./14_products");

app.use(express.json());
app.use("/prods", products);

const port = process.env.PORT || "5000";
app.listen(port, () => console.log(`Listening to port ${port}`));
