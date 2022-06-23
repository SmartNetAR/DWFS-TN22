const productosData = require("../data/productosData")

const productos = {
    listar: (req, res) => {
        res.status(200).send(productosData);
    },
    obtenerPorId: (req, res) => {
        const productId = parseInt(req.params.id, 10);
        let productoEncontrado; 

        for (let i = 0; i < productosData.length; i++) {
            if ( productosData[i].id === productId ) {
                // acá lo encontramos al producto
                productoEncontrado = productosData[i];
            }
        }
        // terminamos de iterar el for de la búsqueda del productos

        // si no se encuentra ningún producto
        if (!productoEncontrado){
            res.status(404).send();
        }
        else {
            res.send( productoEncontrado );
        }

    },
    agregarProducto: (req, res) => {
        res.status(201).send("se ha creado el producto");
    },
    borrarProducto: (req, res) => {
        const productId = parseInt(req.params.id, 10);

        for (let i = 0; i < productosData.length; i++) {
            if ( productosData[i].id === productId ) {
                productosData.splice(i, 1)
            }
        }

        res.send(`se ha borrado el producto con id ${productId}`);
    }
}

module.exports = productos;
