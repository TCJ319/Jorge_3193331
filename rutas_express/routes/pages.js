<<<<<<< HEAD
const express = require("express");
const path = require("path");

const router = express.Router();

router.get('/principal', (req,res)=>{
    res.sendFile(path.join(__dirname,'../public','/principal.html'))
});

router.get('/generador', (req,res)=>{
    res.sendFile(path.join(__dirname,'../public','/generador.html'))
});

router.get('/calculadora', (req,res)=>{
    res.sendFile(path.join(__dirname,'../public','/calculadora.html'))
});


=======
const express = require("express");
const path = require("path");

const router = express.Router();

router.get('/principal', (req,res)=>{
    res.sendFile(path.join(__dirname,'../public','/principal.html'))
});

router.get('/generador', (req,res)=>{
    res.sendFile(path.join(__dirname,'../public','/generador.html'))
});

router.get('/calculadora', (req,res)=>{
    res.sendFile(path.join(__dirname,'../public','/calculadora.html'))
});


>>>>>>> 1d5c8d8af510a451a8aa57dc67b6d77d17c4ed86
module.exports = router;