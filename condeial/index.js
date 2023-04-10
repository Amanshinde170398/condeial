const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", require("./routes"));

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error in starting the server. Please try after some time.");
  }

  console.log(`Server is up and running on port ${PORT}`);
});
