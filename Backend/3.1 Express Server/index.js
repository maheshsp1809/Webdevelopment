const express = require("express");
const mahesh = express(); // You can use any name you prefer

mahesh.get("/", (req, res) => {
  res.send("Hello from Mahesh's Express app!");
});

mahesh.listen(3000, () => {
  console.log("Server is running on port 3000");
});
