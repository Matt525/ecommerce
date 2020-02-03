const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/", (req, res) => {
  console.log("It worked");
});

const port = process.env.PORT || 3001;

app.listen("port", () => {
  console.log("Running on port "`${port}`);
});
