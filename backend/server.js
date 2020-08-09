const express = require("express");
const app = express();
const Joi = require("@hapi/joi");
Joi.objectId = require("joi-objectid")(Joi); // For validating object Ids
//Routes
const movie = require("./routes/movieRoute");
const category = require("./routes/categoryRoute");

//MiddleWares
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", ",DELETE,PUT,OPTIONS, POST, GET");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());
app.use("/api/movies", movie);
app.use("/api/categories", category);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`listening on localhost:${PORT}`));
