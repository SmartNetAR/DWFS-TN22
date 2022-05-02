const fs = require('fs');

const datos = fs.readFileSync('./tareas.json', 'utf-8');


const tareas = JSON.parse(datos);

console.log(tareas);
