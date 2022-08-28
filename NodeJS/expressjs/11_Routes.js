const express = require("express");
const app = express();
const router = express.Router();

// a middleware function with no mount path. This code is executed for every request to the router
router.use((req, res, next) => {
  console.log("0. Common for all...Time:", Date.now());
  next();
});

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use(
  "/users/:id",
  (req, res, next) => {
    console.log("1. Request URL:", req.originalUrl);
    next();
  },
  (req, res, next) => {
    console.log("2. Request Type:", req.method);
    next();
  }
);

router.get("/users/:id", (req, res, next) => {
  res.send(["John", "Mitch", "Doe"]);
});

app.use("/", router);

const port = process.env.PORT || "5000";
app.listen(port, () => console.log(`Listening to port ${port}`));
