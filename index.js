const express = require('express');
const axios = require("axios");
const path= require('path');
const app = express();

//Static Folder
//  app.use(express.static(path.join(__dirname,'public','index.html')));

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'));
});

   /* app.get('/', ( req , res) =>{
        console.log('Calling app.get');
        res.send('<h1>Hello World</h1>');
    });*/

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`Server is running at PORT ${PORT}`));