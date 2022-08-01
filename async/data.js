const empleados = [
    {id: 1, nombre: "juan", salario: "100"},
    {id: 2, nombre: "ana", salario: "120"}
]


function buscarEmpleadoPorId(id) {
    return new Promise((resolve, reject)=> {

        if ( typeof id !== "number")
        {
            return reject("El id debe ser numérico");
        }

        setTimeout(() => {
            const empleado = empleados.find( empleado => empleado.id === id);
            if (empleado)
                resolve(empleado);
            else
                reject("El empleado no existe");
        }, 1500);

    })
}


module.exports = {
    buscarEmpleadoPorId
};
