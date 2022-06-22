const path = require("path");
const express = require("express");
const mainRoutes = require("./routes/main");
const productsRoutes = require("./routes/products");
const productsRoutesApi = require("./routes/productsApi");

const PORT = 3000;

const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname,  "./views"));

app.use("/", mainRoutes);

// rutas web que devuelven html
app.use("/productos", productsRoutes);

// rutas de api, que devuelven json
app.use("/api/productos", productsRoutesApi);


app.listen(PORT, ()=> console.log(`Escuchando en el puerto ${PORT}`));
