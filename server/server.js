const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();

const connectDB = require("./Config/db");

// middleware
app.use(morgan("dev"));
app.use(bodyParser.json({limit: "20mb"}));
app.use(cors());
const {readdirSync} = require("fs");

//connectDB

connectDB();

const authRoute = require("./Routes/auth");
// app.use("/api", authRoute);
readdirSync("./Routes").map((r) =>
  app.use("/api", require("./Routes/" + r))
);

const port = 5500;
app.listen(port, () =>
  console.log(`Server runing Port : ${port}`)
);
