//Get
//Get By Id
//Post
//update
//delete
//input validation

//Create a simple js based application ->
// Product -> id, name, price, brand, quantity
// CRUD -> C(POST), R(GET, GET By Id, Get By Name, Get By Price), U(PUT), D(DELETE)

const Joi = require("@hapi/joi");
const express = require("express");
const app = express();

const products = [
  { id: 1, name: "Apple Iphone 13", category: "Mobile", price: "20_000" },
  { id: 2, name: "Sony Bravia A80J", category: "Television", price: "60_000" },
  { id: 3, name: "S22 Ultra", category: "Mobile", price: "30_000" },
  { id: 4, name: "Boat Lite Earpods", category: "Accessories", price: "2_000" },
  { id: 5, name: "Iphone Charger", category: "Accessories", price: "2_500" },
  { id: 6, name: "LG C12", category: "Television", price: "50_000" },
];

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.get("/api/products/id/:id", (req, res) => {
  res.send(findProduct("id", parseInt(req.params.id)));
});

app.get("/api/products/name/:name", (req, res) => {
  res.send(findProduct("name", req.params.name));
});

app.get("/api/products/category/:category", (req, res) => {
  res.send(findProduct("category", req.params.category));
});

let findProduct = (key, value) => {
  //   const prod = products.filter((p) => {
  //     console.log("Key:- ", p[key], " Value is : ", value);
  //     return p[key] === value;
  //   });
  const prod = products.filter((p) => p[key] === value);
  if (prod) {
    return prod.length == 1 ? prod[0] : prod;
  } else {
    return `No product found for ${key}:- ${value}`;
  }
};

//Middleware in Node JS
app.use(express.json());

const port = process.env.PORT || "5000";
app.listen(port, () => console.log(`Listening to port ${port}`));
