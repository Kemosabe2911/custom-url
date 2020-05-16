const express = require('express');
const axios = require("axios");

const app = express();

app.get('/', ( req , res) =>{
    console.log('Calling app.get');
    res.send('<h1>Hello World</h1>');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server is running at PORT ${PORT}`));