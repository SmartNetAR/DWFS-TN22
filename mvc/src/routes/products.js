const express = require("express");
const router = express.Router();

const {
    agregarProducto,
    obtenerPorId,
    listar,
    borrarProducto,
    vistaListado
} = require("../controllers/productos");

router.get("/", listar);

router.get("/lista", vistaListado);

router.get("/:id", obtenerPorId);

router.post("/", agregarProducto);

router.delete("/:id", borrarProducto);

module.exports = router;
