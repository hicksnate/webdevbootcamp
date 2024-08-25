import express from "express";
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("You did it!");
});

app.listen(3000, () =>{
    console.log(`Swerver is running on port ${port}`);
});