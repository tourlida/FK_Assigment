const express = require("express");

const router = express.Router();

module.exports = router;

//Connection to the database
require("dotenv").config({ encoding: "utf8" });

const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

//Test when the application is up and running communication
router.get("/health", (req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: "200",
    timestamp: Date.now(),
  };
  try {
    res.send(healthcheck);
  } catch (error) {
    healthcheck.message = error;
    res.status(503).send();
  }
});

//Test database communication
router.get("/ready", (req, res) => {
  if (database.readyState == 1) {
    res.send("Database connected successfully!");
    res.status(200).send();
  } else {
    res.send("Database connection failed!");
    res.status(503).send();
  }
});
