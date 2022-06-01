const express = require('express');
const cors = require('cors');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { readdirSync } = require("fs");
const csrfProtection = csurf({ cookie: true });
require("dotenv").config();
// const dotenv = require("dotenv").config();



const app = express();
const port = 8000;
console.log(port);

// //Database is left to do
// // mongoose.connect(process.env.DATABASE).then(() =>console.log('Database connected')).catch((err)=>console.log(err))
mongoose.connect(process.env.DATABASE).then(() =>console.log('Database connected')).catch((err)=>console.log(err));


app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json({limit:"5mb"}));
app.use((req,res,next)=>{
    console.log("This is my middle ware");
    next();
});

readdirSync('./routes').map((r)=>{
    console.log(r);
    return app.use('/api',require(`./routes/${r}`));

})

app.use(csrfProtection);
app.get('/api/csrf-token',(req,res)=>{
    res.json({csrfToken:req.csrfToken()})
})





// app.get('/myfirstapi',(req,res) =>{
//     // res.status(200).send("Try Again !!Hello world")
//     // res.json({sn:"one"})
//     res.status(200).send("Try Again !!Hello world")


// })




app.listen(port,()=>{
    console.log("Our app is running on",port)
})

