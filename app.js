const express = require("express");
const app = express();

app.use("/static", express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/signup", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});
app.get("/static/submission", (req, res) => {
  res.sendFile(__dirname + "/static/submission.html");
});
app.post("/static/signup.html",(req,res)=>{
  res.sendFile(__dirname + "/public/submission.html");
})
/*app.get("/static/signup/lname/:name", (req, res) => {
 var user=req.params.name;
res.send ('Welcom' +user);
console.log( 'Welcom' +user);
});*/
app.listen(8080);