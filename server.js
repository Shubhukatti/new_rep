const express = require("express");
const users = require("./db.json")
const cors = require('cors')

const app = express();
const path = require("path");
const port = process.env.PORT || 2345;


app.use(cors())

if(process.env.NODE_ENV == "production"){
    
}

app.get("/",(req,res) =>{
    res.send("Hello from express");
})

app.get("/users",(req,res)=>{
    res.send(users);
})


app.listen(port,function () {
    console.log("listening to ",port);
})