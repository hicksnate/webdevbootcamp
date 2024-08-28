import express from "express";
import ejs from "ejs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

//app.set('view engine', 'ejs');
//app.set('views', __dirname + "/views");

const date = new Date();
const day = date.getDay();
console.log(day);
let dayMsg = '';

if (day === 0 || day === 6){
    dayMsg = "Hey! It's the weekend. It's time to relax!";
}else{
    dayMsg = "Hey! It's a weekday. It's time to work hard!";
}


app.get("/", (req, res) => {
    res.render('index.ejs', { message: dayMsg });
});
  
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});