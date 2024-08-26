import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.post("/submit", (req, res) =>{
  console.log(req.body);
  const street = req.body.street;
  const pet = req.body.pet;
  res.send(`<h1>Your band name is: </h1><h3>${street + pet}</h3>`);
})

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});