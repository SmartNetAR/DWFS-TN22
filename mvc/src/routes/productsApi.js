const express = require("express");
const router = express.Router();

const {
    agregarProducto,
    obtenerPorId,
    listar,
    borrarProducto
} = require("../controllers/productosApi");

router.get("/", listar);

router.get("/:id", obtenerPorId);

router.post("/", agregarProducto);

router.delete("/:id", borrarProducto);

module.exports = router;
