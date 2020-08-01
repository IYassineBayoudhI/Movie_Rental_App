const express = require("express");
const app = express();
const Joi = require("@hapi/joi");
Joi.objectId = require("joi-objectid")(Joi); // For validating object Ids
//Routes
const movie = require("./routes/movieRoute");
const category = require("./routes/categoryRoute");

//MiddleWares
app.use(express.json());
app.use("/api/movies", movie);
app.use("/api/categories", category);

const PORT = /*process.env.PORT ||*/ 3000;
app.listen(PORT, () => console.log(`listening on localhost:${PORT}`));
