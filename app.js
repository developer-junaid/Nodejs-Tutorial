// Please follow the branches for further topics
// 15. Express (Template Engines) EJS
const express = require("express");

// Create express app
const app = express();

// Set view engine
app.set("view engine", "ejs");

// Get request
// app.get(route, function)
app.get("/", (req, res) => {
  // Respond with html
  res.sendFile(__dirname + "/index.html"); // Send html
});

app.get("/contact", (req, res) => {
  // Respond with html
  res.sendFile(__dirname + "/contact.html"); // Send html
});

// Dynamic route
app.get("/profile/:id", (req, res) => {
  // Data
  var data = {
    age: 29,
    job: "ninja",
    hobbies: ["eating", "fighting", "reading"],
  };

  // Respond with template
  res.render("profile", { person: req.params.id, data });
});

// Listen to port
app.listen(3000);
