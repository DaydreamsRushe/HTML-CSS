//Reglas var y let
var nombre = "Contenido"; //Variables de ambito global. se pueden redeclarar. Su ambito pertenece a toda la aplicación y una vez declaradas, siempre ocupan memoria
var nombre = "Contenido dos";
nombre = "Contenido tres"; //se puede reasignar
console.log(nombre);

let monitor = "Pantalla Ordenador 21 pulgadas"; //Inicializamos variable con valor, let es de ambito de bloque. Se entiende por bloque el juego de { } al que pertenezca
//let no se puede redeclarar;
console.log(monitor);
//var y let se pueden reasignar
monitor = "Pantalla Ordenador 26 pulgadas";

// Podemos cambiar el tipo de dato
monitor = 20;
console.log(monitor);
monitor = true;
console.log(monitor);
monitor = null;
console.log(monitor);

//Javascript es un lenguaje de tipado Dinamico, No se especifican tipos de datos cuando se crea una variable, sino al asignar el valor. De tipado debil. (permite por ejemplo no acabar las sentencias con ; y lo da por supuesto)

let precio = 200;
console.log(precio);

//Tambien se puede inicializar una variable sin valor y asignarlo despues

let disponible;
console.log(disponible);
disponible = true;
console.log(disponible);

//inicializar multiples variables
let tipo = "sobreMesa",
  fabricante = "sin nombre",
  valoracion = 5;

console.log(tipo);
console.log(fabricante);
console.log(valoracion);

//Reglas de las variables

//pueden tener: letras, numeros, _ No pueden iniciarse nunca con un numero
//let 99num;
let dias99;

let _01;
//let 01_

//Nombrar variables con mas de una palabra
let nombreProducto = "monitor 30 pulgadas"; //CamelCase habitual en funciones, arreglos y variables
let nombre_producto = "monitor 40 pulgadas"; //underscore habitual en Variables
let NombreProducto = "monitor 2132 pulgadas"; //pascal case habitual en  Objetos, clases
let nombreproducto = "monitor...ya me he cansado"; //habitual en variables
