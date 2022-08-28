//Get
//Get By Id, name category, price...
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
  const prod = products.filter((p) => p[key] === value);
  if (prod) {
    return prod.length == 1 ? prod[0] : prod;
  } else {
    return `No product found for ${key}:- ${value}`;
  }
};

//Middleware in Node JS
app.use(express.json());

//Post Method
app.post("/api/products", (req, res) => {
  console.log("req.body :-", req.body);
  const prod = products.filter((p) => p.id === req.params.id);
  let newProd = {
    id: products.length + 1,
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
  };

  products.push(newProd);

  res.send(newProd);
});

//Put Method
app.put("/api/products/:id", (req, res) => {
  console.log("req.body :-", req.body);
  const prod = products.find((p) => p.id === parseInt(req.params.id));

  if (!prod) {
    res.send(`No movie found for the id :- ${req.params.id}`);
  } else {
    prod.name = req.body.name;
    prod.category = req.body.category;
    prod.price = req.body.price;
    console.log("updated product :-", prod);
    res.send(prod);
  }
});

//Delete Method
app.delete("/api/products/:id", (req, res) => {
  console.log("req.body :-", req.body);
  const prod = products.find((p) => p.id === parseInt(req.params.id));

  if (!prod) {
    res.send(`No movie found for the id :- ${req.params.id}`);
  }

  console.log("prod", prod);

  //Delete movie logic
  const index = products.indexOf(prod);
  if (index != -1) {
    products.splice(index, 1);
  }
  res.send(prod);
});

const port = process.env.PORT || "5000";
app.listen(port, () => console.log(`Listening to port ${port}`));
