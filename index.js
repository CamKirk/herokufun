const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.json({data:"Hello World"});
}).listen(process.env.PORT);