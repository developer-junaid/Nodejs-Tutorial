// Please follow the branches for further topics
// 13. Express (Basic)
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

// Listen to port
app.listen(3000);
