// Los Arrays, colecciones, o arreglos forman una parte muy importante en cualquier lenguaje de programación.
// Para Javascript son Tipos de datos complejos
// Un ejemplo típico son los elementos de un formulario
// Otro es un carrito de compras, sirve para agrupar elementos del mismo tipo.
// También la forma en que facebook o otras redes muestran un listado de amigos o personas que le dieron Me Gusta a tu última foto, seguramente es un arreglo.

// Veamos primero como crear un Array..
//primera representación de un array, dos formatos
const primerArray = new Array(6);
primerArray[0] = 100;
primerArray[1] = 300;
primerArray[2] = 500;
primerArray[5] = 600;
/* const primerArray = [100, 300, 500, , , 600]; */
console.log(primerArray);
document.write(primerArray + "<br>");
//Podemos acceder por su índice: Recuerda que em piezan en 0,....
console.log(primerArray[1]);
console.log(primerArray[3]);

//segunda presentación, no nombramos la cantidad de elementos y mezclamos tipo de dato
const segundoArray = new Array();
segundoArray[0] = "precio";
segundoArray[1] = 300;
segundoArray[2] = 500;
segundoArray[5] = 600;
/* const segundoArray = ["precio", 300, 500, 600]; */
console.log(segundoArray);
document.write(segundoArray + "<br>");

//tercera presentación, directa asignación en los índices
const tercerArray = new Array("primero", "segundo", 0, 25, "cuarenta");
//actual presentación
/* const tercerArray = ["Uno", "segundo", 90, 15, , , "cincuenta"]; */
console.log(tercerArray);
document.write(tercerArray + "<br>");

const nums = [10, 20, 30, 40, 50];
console.log(nums);

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];
console.log(meses);

// En JavaScript cuando veas corchetes hablamos de Arreglos, a diferencia de los objeto que se encierran entre llaves{}. Ahora no es obligatorio que el Array tenga numeros o strings unicamente, también puede tener un poco de todo:

const deTodo = [
  "Hola",
  10,
  true,
  "si",
  null,
  { nombre: "Juan", trabajo: "Programador" },
  [1, 2, 3, 4],
];
console.log(deTodo);

// Incluso un Array puede contener otro u otros Arrays
// Recuerda, un arreglo es una forma de agrupar grandes cantidades de información en una sola variable.

// Veamos algunas operaciones útiles en los arreglos,

// Si quieres saber cuantos elementos hay un arreglo puedes utilizar la propiedad length, veamos los elementos que tiene la const meses
console.log(meses.length);

// Si un Array tiene muchos elementos, es  muy complicado ir 1 por 1, si tienes un carrito de compras y agregas o quitas elementos del carrito, ese arreglo crece de forma dinamica, entonces, como acceder a todos los elementos? Con un iterador, y en javascript hay varios, - Que veremos más adelante- como el bucle for ya visto y que existe en diferentes lenguajes...

for (let i = 0; i < meses.length; i++) {
  console.log(meses[i]);
}
// Al Igual que los objetos un arreglo se puede modificar a pesar de utilizar la palabra prefijo const
meses[0] = "Nuevo Mes"; // sustituye el índice [0]

// También se puede añadir al final, o incluso dejar slots vacios
meses[7] = "Ultimo Mes";

// En los arrays existen métodos que son bastante útiles para gestionarlos,

console.log(meses);

// Supongamos que creamos un carrito de compras desde la consola, más adelante lo haremos ya desde una interfaz web.
const carrito = [];

// Añadir un elemento al carrito...
const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 500,
};

const producto2 = {
  nombre: "Móvil",
  precio: 500,
};

carrito.push(producto);
carrito.push(producto2);

console.log(carrito);

// Añadir al Inicio del carrito...

const producto3 = {
  nombre: "Teclado",
  precio: 50,
};
carrito.unshift(producto3);
console.log(carrito);
// Existen otras formas más modernas de hacerlo... pero esta sintaxis aún se utiliza mucho asi que veamos como hacerlo
// Veamos como Eliminar elementos de un arreglo... con un objeto solo se utiliza delete, los arreglos también son sencillos de manipular

// Eliminar el primer elemento...
carrito.shift();
console.log(carrito);

// // Eliminar el ultimo elemento...
carrito.pop();
console.log(carrito);

// Ahora supongamos que deseas eliminar del centro...con splice(x,y);
//// el segundo parametro es que tantos elementos vamos a borrar, 0 significa nada, entonces seria igual a no tener nada, si no le pasas un valor va a borrar todos a partir de ahi..
/* carrito.splice(1, 2);

console.log(carrito); */

// Array Destructuring - Al igual que con objetos algunas veces quieres crear una variable y su valor por cada posición de un Array:

const numero = [10, 20, 30, 40, "50"];

const [a, b, c, d, e] = numero;

// console.log(numeros);
console.log(a);
console.log(c);
console.log(d);
console.log(b);
console.log(e);

// Si quieres saltarte un valor, pon una coma vacia...

//Métodos para Arrays
const carro = [
  { nombre: "Monitor 20 Pulgadas", precio: 500 },
  { nombre: "Televisión 51 Pulgadas", precio: 700 },
  { nombre: "Tablet ", precio: 300 },
  { nombre: "Auriculares", precio: 200 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Móvil", precio: 500 },
];

// Recorrer un arreglo de la forma tradicional y mostrar su contenido...
for (let i = 0; i < carro.length; i++) {
  console.log(`Articulo: ${carro[i].nombre} Precio: $ ${carro[i].precio} `);
}

// ForEach
carro.forEach((producto) => {
  console.log(`Articulo: ${producto.nombre} Precio: $ producto.precio} `);
});

// Muy similar al forEach existe un array metod llamado map, la diferencia es que map te crea un array nuevo...

const nuevoArray = carro.map(function (producto) {
  return `Articulo: ${producto.nombre} Precio: $ producto.precio} `; //return,en forma de array nuevo
});

const nuevoArray2 = carro.forEach(function (producto) {
  return `Articulo: ${producto.nombre} Precio: $ producto.precio} `; // no definido
});

console.log(nuevoArray);
console.log(nuevoArray2);
