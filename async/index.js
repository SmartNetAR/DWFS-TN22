const data = require("./data");

function imprimir(empleado) {
    console.log("El sueldo de", empleado.nombre, "es", empleado.salario)
}
// USO DE THEN
// data.buscarEmpleadoPorId(1)
//     .then((data)=> {
//         imprimir(data);
//     })
//     .catch((error) => {
//         console.log(error)
//     });


// USO DE ASYNC AWAIT
async function getEmpleado() {
    try {
        const empleado = await data.buscarEmpleadoPorId();
        // const sueldoCalculado = await calcularSueldo(empleado); EX..
        // const aguinaldo = await calcularAguinaldo(sueldoCalculado); EX..
        imprimir(empleado);
    }
    catch (error) {
        console.log(error)
    }
};

getEmpleado();

















// imprimir(empleado);
