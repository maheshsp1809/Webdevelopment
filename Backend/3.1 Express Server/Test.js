const express = require("express");
const app = express();
const port = 3000;

// Handling different HTTP methods for the same route
app
  .route("/data")
  .get((req, res) => {
    res.send("GET request: Fetch data");
  })
  .post((req, res) => {
    res.send("POST request: Create data");
  })
  .put((req, res) => {
    res.send("PUT request: Update data");
  })
  .delete((req, res) => {
    res.send("DELETE request: Delete data");
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
