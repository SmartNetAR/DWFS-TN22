function multiplicar(num1, num2) {
    return num1 * num2;
}

const dividir = function(num1, num2) {
    return num1 / num2;
}

const restar = (num1, num2) => {
    return num1 - num2;
}

const sumar = (num1, num2) => num1 + num2;

const resultado = multiplicar(10, 3);
const resultadoDivision = dividir(10, 3);
const resultadoResta = restar(10, 5);
const resultadoSuma = sumar(11, 12);

function imprimir( funCallback )
{
    console.log( "imprimiendo...: ", funCallback() )
}

imprimir(() => "RETORNADO DESDE EL CALLBACK" )

const edad = 16;

const esMayorDeEdad = edad >= 18 ? "Si, es mayor." : "No, es menor";

let esMayor;

if (edad >= 18)
{
    esMayor = "Si, es mayor."
}
else
{
    esMayor = "No, es menor"
}


const titulosTareas = [
    "Repasar JS",
    "Armar aplicación de tareas",
]

const tareas = [
    {
        "titulo": "Repasar JS",
        "estado": "terminada"
    },
    {
        "titulo": "Armar app de tareas",
        "estado": "en progreso"
    }
]

console.log(tareas)

tareas.push({
    titulo: "Break",
    estado: "pendiente"
})

console.log(tareas)