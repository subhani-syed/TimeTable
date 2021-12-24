const express = require("express");
const res = require("express/lib/response");
const path = require('path');
const app = require("express")();
const PORT = process.env.PORT||3000;

app.use('/public', express.static(path.join(__dirname, "public")));
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'/index.html'));
});

// Routing For Weekdays
app.get("/monday",(req,res)=>{
    res.sendFile(path.join(__dirname,'/monday.html'));
});
app.get("/tuesday",(req,res)=>{
    res.sendFile(path.join(__dirname,'/tuesday.html'));
});
app.get("/wednesday",(req,res)=>{
    res.sendFile(path.join(__dirname,'/wednesday.html'));
});
app.get("/thursday",(req,res)=>{
    res.sendFile(path.join(__dirname,'/thursday.html'));
});
app.get("/friday",(req,res)=>{
    res.sendFile(path.join(__dirname,'/friday.html'));
});
app.get("/saturday",(req,res)=>{
    res.sendFile(path.join(__dirname,'/saturday.html'));
});


app.listen(PORT,()=>{
    console.log("App is running at port ${PORT}");
});