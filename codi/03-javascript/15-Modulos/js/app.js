console.log(nombreCliente);
//1) Esto nos puede llevar a variables que se mezclen con otras en especial si el codigo es mantenido por multiples personas, es voluminoso o tambien si decidimos implementar librerias...
//La solucion es agrupar cada archivo en lo que se conoce como un IIFE Immediately Invoked Function Expression
//2)para mejorar esta forma de uso con las IIFE, usaremos modulos, que nos permite importar y exportar parte del codigo entre archivos js segun nuestras necesidades: ejemplo de importacion de nombreCliente
/* import { nombreCliente} from "./cliente.js";
console.log(nombreCliente); */
/* import { nombreCliente, ahorro} from "./cliente.js";
console.log(nombreCliente, ahorro); */
/* import { nombreCliente, ahorro, mostrardatos } from "./cliente.js";
const cliente = mostrarDatos(nombreCliente, ahorro); //incluimos una funcion
console.log(cliente); */
import { nombreCliente, ahorro, Cliente } from "./cliente.js";
const nuevoCliente = new Cliente(nombreCliente, ahorro);
console.log(nuevoCliente.mostrarDatos());
console.log(nuevoCliente.ahorro);
