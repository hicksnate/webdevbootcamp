import express from "express";
const app = express();
const port = 3000;


app.get("/", (req,res) =>{
    res.send("<h1>This is the homepage.</h1>");
});
app.get("/about", (req,res) =>{
    res.send("<h1>About Me</h1><p>This is a short paragraph about me.</p>");
});
app.get("/contact", (req,res) =>{
    res.send("<h1>Contact Information</h1><p>nate.s.hicks@gmail.com</p>");
});
app.listen(3000, () =>{
    console.log(`Swerver is running on port ${port}!`);
});