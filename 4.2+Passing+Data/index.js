import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const data = {
    title: "Please enter your name below: "
  
  };
  res.render("index.ejs", data);
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  const fullName = req.body["fName"] + req.body["lName"];
  const nameLen = fullName.length;
  
  const data = {
    title: `Your name is ${nameLen} characters long.`
  }
  
  });

  

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
