const express = require("express");

const path=require("path");
const app=express();

const PORT=3000;

app.use(express.static(path.join(__dirname,"build")));

app.get("*", function(req,res) {
    res.sendFile(path.join( "build", "index.html"));
});

app.listen(PORT);