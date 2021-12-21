const express = require("express");
const res = require("express/lib/response");
const path = require('path');
const app = require("express")();
const PORT = process.env.PORT||3000;

app.use('/public', express.static(path.join(__dirname, "public")));
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'/index.html'));
});

app.listen(PORT,()=>{
    console.log("App is running at port ${PORT}")
});