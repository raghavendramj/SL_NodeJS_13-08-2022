const express = require("express");
const app = express();
const router = express.Router();

router.get(
  "courses/:id",
  (req, res, next) => {
    //if user Id is 0, skip the next router.
    if (req.params.id === "0") next("route");
    else next();
  },
  (req, res, next) => {
    res.render("regular");
  }
);

// mount the router on the app
app.use("/", router);
