// Please follow the branches for further topics
// 18. Express (Handling POST Requests)
const express = require("express"); // npm i express
const bodyParser = require("body-parser"); // npm i body-parser

const app = express(); // Set Middleware to assets request

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set("view engine", "ejs"); // Set view engine

app.use("/assets", express.static("assets")); // Set Middleware to assets request

// REQUESTS

app.get("/", (req, res) => {
  res.render("index"); // Respond with html (ejs)
});

app.get("/contact", (req, res) => {
  res.render("contact", { query: req.query }); // Respond with html (ejs) and pass query
});

app.post("/contact", urlencodedParser, (req, res) => {
  res.render("contact-success", { data: req.body }); // Respond with html (ejs) and pass query
});

// Dynamic route
app.get("/profile/:id", (req, res) => {
  var data = {
    age: 29,
    job: "ninja",
    hobbies: ["eating", "fighting", "reading"],
  };

  res.render("profile", { person: req.params.id, data }); // Respond with template
});

app.listen(3000); // Listen to port
