<<<<<<< HEAD
const express = require("express");
const path = require("path");
const pagesRoutes = require("./routes/pages");

const app = express();
const port = 3025;


app.use(express.static('public'));
app.use('/',pagesRoutes);

app.get('/',(req,res)=>{
    res.redirect('/principal');
});

app.get('/',(req,res)=>{
    res.redirect('/generador');
});

app.get('/',(req,res)=>{
    res.redirect('/calculadora');
});

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
});
=======
const express = require("express");
const path = require("path");
const pagesRoutes = require("./routes/pages");

const app = express();
const port = 3025;


app.use(express.static('public'));
app.use('/',pagesRoutes);

app.get('/',(req,res)=>{
    res.redirect('/principal');
});

app.get('/',(req,res)=>{
    res.redirect('/generador');
});

app.get('/',(req,res)=>{
    res.redirect('/calculadora');
});

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
});
>>>>>>> 1d5c8d8af510a451a8aa57dc67b6d77d17c4ed86
