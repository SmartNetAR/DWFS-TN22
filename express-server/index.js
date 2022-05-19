const express = require('express');
const app = express();

app.get("/", (req, res)=>{
    res.send("hola desde express !!!");
})


app.listen(3031, () => console.log('escuchando en el puerto 3031'));
