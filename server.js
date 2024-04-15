const express = require("express");
const app = express();
const mongoose = require("mongoose");
const CRUDroutes = require("./Routes/CRUD.routes");

app.use(express.json());

const port = 4000;

app.listen(port, ()=>{
    try{
        console.log(`server listening on port ${port}`);
        try{
            mongoose.connect("mongodb://0.0.0.0:27017/WAD-CRUD", {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            console.log("DB connected successfully")
        } catch(error){
            console.log(error.message);
        }
    } catch(error){
        console.log(error.message);
    }
})

app.use("/comment", CRUDroutes);

app.use("/", (req, res)=>{
    res.status(201).send("Static Webpage says Hello World")
})