const express = require("express");
const app = express();

app.use("/static", express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/signup", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});
app.get("/submission", (req, res) => {
  res.sendFile(__dirname + "/submission.html");
});
app.listen(8080);