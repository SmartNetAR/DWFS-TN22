const express = require("express");
const router = express.Router();

const {agregarProducto, listar, borrarProducto} = require("../controllers/productos");

router.get("/", listar);

router.post("/", agregarProducto);

router.delete("/:id", borrarProducto);

module.exports = router;
