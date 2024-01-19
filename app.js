require("dotenv").config({path:"./.env"})
const express = require("express")
const app = express();

//logger 
const logger =require("morgan");
const ErrorHandler = require("./utils/ErrorHandler");
app.use(logger("tiny"))

//routes
app.use("/", require("./routes/indexRoutes"))


//error handling
app.all("*",(req,res,next)=>{
    next(new ErrorHandler(`requested url not found ${req.url}`,404))
})

app.use(generatedErrors);


app.listen(process.env.PORT, console.log(`server running on port ${process.env.PORT}`))