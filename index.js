const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

 app.use(express.static(path.join(__dirname,"public")));
 app.use(express.json()); 
 app.use(express.urlencoded({ extended: true }));
let posts = [
    {
        id : "@nishantkumar",
        username : "Nishant kumar",
        content : "Hello world"
    },
    {
        id : "@prashantkumar",
        username : "Prashant kumar",
        content : "Everything is good"
    },
    {
        id : "@aksahra",
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
app.get("/Home",(req,res)=>{
    res.send("Welcome to Home")
})


app.get("/posts/new",(req,res)=>{
    res.render("new.ejs")
})
app.post("/posts",(req,res)=>{
    let{username,content,id}=req.body || {};//to avoid destruction due to the JSON non implementation
    posts.push({username,content,id});
    res.redirect("/posts");
    console.log(req.body);
})

app.get("/posts/:id",(req,res)=>{
    let {id}= req.params;
    let post = posts.find((p)=>id === p.id);
    console.log(post);
    res.render("show.ejs",{post});
});

app.listen(port,()=>{
    console.log("listening to port 8080");
});