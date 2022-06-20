const express = require("express");
const mainRoutes = require("./routes/main");
const productsRoutes = require("./routes/products");

const PORT = 3000;

const app = express();

app.use("/", mainRoutes);
app.use("/productos", productsRoutes);


app.listen(PORT, ()=> console.log(`Escuchando en el puerto ${PORT}`));
