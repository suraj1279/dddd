const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.post("/add", (req, res) => {
  console.log(req.body);
  res.sendStatus(200); // Send a response to the client
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000`); // Log the port number
});
