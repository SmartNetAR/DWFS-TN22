let saludo = require('./saludar')
let diasDeLaSemana = require('./modulo_dias_de_la_semana/dias')

saludo.recibir("juan")
saludo.despedir("María")

console.log('>>> hoy es :', diasDeLaSemana[0]);