require("dotenv").config({path:"./env"})
const express = require("express")
const app = express();

app.get("/", (req ,res,next)=>{
    res.json({message:"homepage"})
})


app.listen(process.env.PORT, console.log(`server running on port ${process.env.PORT}`))