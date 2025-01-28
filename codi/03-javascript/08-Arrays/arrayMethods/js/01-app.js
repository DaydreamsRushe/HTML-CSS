//Métodos y casos de uso útiles cuando se trabaja con arrays

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];

const carrito = [
  { nombre: "Monitor 20 Pulgadas", precio: 500 },
  { nombre: "Televisión 50 Pulgadas", precio: 700 },
  { nombre: "Tablet", precio: 300 },
  { nombre: "Auriculares", precio: 200 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Móvil", precio: 500 },
  { nombre: "Altavoces", precio: 300 },
  { nombre: "Portátil", precio: 800 },
];

// Necesito saber si nuestra const meses tiene el mes de Febrero, con un .forEach() se puede ...

meses.forEach((mes) => {
  if (mes === "Enero") {
    console.log("Enero si existe, como Teruel...");
  }
});

// O también con el Array Method  .includes()

const resultado = meses.includes("Enero"); // Cambiar a Diciembre...
console.log(resultado);

// En el caso de un array de objetos... .includes() no es una opción, mejor este otro método llamado .some()
const exist = carrito.includes((producto) => producto.nombre === "Móvil");
console.log(exist); /// Noop

const existe = carrito.some((producto) => producto.nombre === "Móvil");
console.log(existe);

// Some en un arreglo tradicional...
const existe2 = meses.some((mes) => mes === "Febrero");
console.log(existe2);

// .findIndex()
// Primero veamos como seria el ejemplo con un forEach...
meses.forEach((mes, index) => {
  if (mes === "Abril") {
    // Si ponemos diciembre no lo va a encontrar...
    console.log(`Encontrado en el indice ${index}`);
  }
});

// .findIndex() te dirá el indice es decir la ubicación del elemento en el arreglo...
const indice = meses.findIndex((mes) => mes === "Abril"); // Cambiar a Diciembre, Tendremos -1 eso quiere decir que no lo encontró
console.log(indice);

// .reduce()

//método que lanza una función que simplifica al máximo la entrega de datos
// Supongamos que tenemos nuestro carrito de compras y queremos decirle al usuario cuanto es el total a pagar...
// Con un .forEach() lo podrías hacer asi... Perfecto

let total = 0;
carrito.forEach((producto) => (total += producto.precio));
console.log(total);

// Método .reduce() actual
let res = carrito.reduce((total, producto) => total + producto.precio, 0); //0 es el inicio
console.log(res);

// .filter() MUY...MUY ÚTIL

// Filter va a crear un array basado en un parametro a evaluar..

let r = carrito.filter(
  (producto) => producto.precio > 400 && producto.precio < 600
); // Todos los productos mayores de 400 y menores de 600
let r2 = carrito.filter((producto) => producto.nombre === "Móvil"); // Traerte el Móvil
let r3 = carrito.filter((producto) => producto.nombre !== "Portátil"); // Todos menos la Portátil

console.log(r);
console.log(r2);
console.log(r3);
// .filter() es en mi opinión el más util y el más utilizado!

// .find() crea un array nuevo en base al primer resultado que sea true...

// con un foreach seria algo asi...
let resul = "";
carrito.forEach((producto, index) => {
  if (producto.nombre === "Altavoces") {
    resul = carrito[index];
  }
});
console.log(resul);

// con .find() seria

const resul2 = carrito.find((producto) => producto.nombre === "Altavoces");
console.log(resul2);

// Unir 2 arreglos con .concat()...
const mes2 = [
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const mes3 = meses.concat(mes2);
console.log(mes3);

// Otra forma potente es el spread operator..
const mes4 = [...meses, ...mes2]; // Tienes que asegurarte de que sean arrays cuando usas ...  'Otro mes'
console.log(mes4);

// El spread operator es muy útil para crear un nuevo arreglo sin modificar el original...

// Si tienes 2 arreglos los unes, pero tienes un arreglo y quieres añadir un elemento al final que es un string utilizarias...

const mese2 = [...meses, "Julio"];
console.log(meses);
console.log(mese2); // Recuerda esto no modifica el arreglo original como si haria push, lo cual es muy útil en programación funcional

// O al inicio... en lugar de utilizar unshift,
const meses3 = ["Julio", ...meses];

// O tal vez quieres añadir un objeto a un arreglo de objetos al final
const producto = { producto: "Disco Duro", precio: 300 };
const carrito2 = [...carrito, producto];
console.log(carrito2);

// o al inicio
const carrito3 = [producto, ...carrito];
console.log(carrito3);
