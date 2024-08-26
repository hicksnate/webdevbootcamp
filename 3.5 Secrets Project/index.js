//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import bodyParser from 'body-parser';
import express from 'express';
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
const valPass = "ILoveProgramming";
let auth = false;

function checkPassword(req,res,next){
//Add password check here and set auth accourdingly. Probably a better way to do this.
    if (req.body.password === valPass){
        auth = true;
    }
    next();
}

app.use(bodyParser.urlencoded({extended: true}));

app.use(checkPassword);

app.post("/check", (req, res) =>{
    if (auth){
        res.statusCode = 201;
        auth = false;
        res.sendFile(__dirname + "/public/secret.html");
    }else{
        res.sendFile(__dirname + "/public/index.html");
    }
    
})

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
