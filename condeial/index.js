const express = require("express");
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error in starting the server. Please try after some time.");
  }

  console.log(`Server is up and running on port ${PORT}`);
});
