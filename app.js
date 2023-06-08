const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/public')));


app.get('/', (req,res) =>{
    res.sendFile((__dirname + '/views/index.html')); 
});

app.get('/login', (req,res) =>{
    res.sendFile((__dirname + '/views/login.html')); 
});

app.get('/registro', (req,res) =>{
    res.sendFile((__dirname + '/views/register.html')); 
});

app.listen(3003, function () {
    console.log("Servidor corriendo");
});


