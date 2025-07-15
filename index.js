const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));


let posts = [
    {
        username : "Nishant kumar",
        content : "Hello world"
    },
    {
        username : "Prashant kumar",
        content : "Everything is good"
    },
    {
        username : "Aksahra",
        content : "Hardwork.."
    },
]

app.get("/",(req,res)=>{
    res.send("Welcome");
    console.log("Requesting");
})
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})
app.get("/:Home",(req,res)=>{
    res.send("Welcome to Home")
})
app.listen(port,()=>{
    console.log("listening to port 8080");
});