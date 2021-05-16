// Please follow the branches for further topics
// 14. Express (Route Params)
const express = require("express");

// Create express app
const app = express();

// Get request
// app.get(route, function)
app.get("/", (req, res) => {
  // Respond
  res.send("this is the homepage"); // Send String
});

app.get("/contact", (req, res) => {
  // Respond
  res.send("this is the contact page"); // Send String
});

// Dynamic route
app.get("/profile/:id", (req, res) => {
  // Respond
  res.send(`You requested to see a profile with the id of ${req.params.id}`);
});

// Listen to port
app.listen(3000);
