const express = require("express");
const path  = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
})
app.get("/hobbies",(req,res)=>{
    res.sendFile(path.join(__dirname, 'hobbies.html'));
})
app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname, 'about.html'));
})
app.get("/project",(req,res)=>{
    res.sendFile(path.join(__dirname, 'project.html'));
})
app.get("/interest",(req,res)=>{
    res.sendFile(path.join(__dirname, 'interest.html'));
})
app.listen(PORT,()=>{
    console.log("server started on: ",`http://localhost:${PORT}`);
})
