// Las funciónes en cualquier lenguaje son una serie de procedimientos o instrucciones que realizan una acción. Las funciónes permiten tener un código más ordenado, fácil de mantener y reutilizable.. Puedes tener una función que valide un formulario y utilizarla en todos tus formularios, puedes tener también una función que envie datos al servidor y reutilizarla múltiples veces...

// Existen 3 formas de crear funciónes en JavaScript

// Declaración de Función -> la expresión de la función utiliza la palabra reservada function seguida de un nombre y un parentesis, en este parentesis se colocan los argumentos si es que los hay, finalmente el cuerpo de la función se define por unas llaves...

function sumar() {
  console.log(2 + 2);
}

// Las funciónes deben llamarse o invocarse, de otra forma en realidad no hacen nada:

sumar(); // se manda llamar por su nombre seguido del parentesis()

// Expresión de función - Este tipo de funciónes se asigna como si fuera una constante de tipo variable
const suma2 = function () {
  console.log(3 + 3);
};

suma2(); // se manda llamar de la misma forma

// Hoisting

// Ademas de las diferencias en sintaxis, existen diferencias entre una función tradicional y una expresión de función.. si llamamos la función antes de declararla, function expression va a funciónar bien, mientras que el otro nos va a marcar un error..

sumar(); //si puedo acceder antes de su declaración
function sumar() {
  console.log(2 + 2);
}

//sum2(); // no puedo acceder antes de declararla
const sum2 = function () {
  console.log(3 + 3);
};

// Eso pasa porque JavaScript se ejecuta digamos en 2 vueltas - Eso se le conoce como Hoisting , la primer vuelta registra todas las funciónes y determina las variables, esta etapa se le llama de creación, la segunda pasada es la que executa tu codigo, se llama de ejecución.

// Por lo tanto el primer código funcióna porque function se registra primero y después se ejecuta el código. El segundo no funcióna porque si bien es una función no es declarada como tal, lo ve más bien como una variable...

// Esto se le conoce como hosting que basicamente son esas 2 etapas (creación y ejecución)

// básicamente tu código se ejecuta asi:

//const sumar3;//No puedo declararla sin asignarle valor
//sumar3(); // a estas alturas es undefined...
//sumar3 = function () {
//  console.log(3 + 3); // pero como ya habiamos llamado la función, se queda como undefined
//};=

// Existe una 3ra forma de crear funciónes, que más bien son métodos, ya que se lanzan directamente sobre el objeto en el que se declaran: on las funciones anónimas, muchas de ellas se pueden simplificar como Funciones flecha.
const anonima = function () {
  console.log(3 + 3);
};
const flecha = () => {
  console.log(3 + 3);
};

// Y esta es pregunta para obtener un trabajo como JS Developer...

// Cuantas funciones del lenguaje o del Core tiene javascript?

// JavaScript cuenta con más de 4 mil funciónes. Java, python, PHP todos incluyen miles de funciónes, estas funciónes se les conoce como la libreria estandard.. En JavaScript no hay librería estandard, pero si hay funciónes que son parte digamos del Core...

alert("Hubo un error...");

prompt("Cual es tu edad?");

parseInt("1");

// Son ejemplos de funciónes, puedes ver que cuentan con un nombre y son llamadas con un parentesis...
// Veamos la diferencia entre un método y una función...
const numero1 = 20;
const numero2 = "20";

// Aunque en realidad terminan siendo practicamente lo mismo, la forma en que se utilizan tiene que ver más que nada en el contexto que son utilizadas..

console.log(parseInt(numero2)); // Esto es una función (No está asignada a un objeto concreto) con paso de parámetros, no nace para trabajar con un obj concreto

console.log(numero1.toString()); // Esto es un método, nace como función para el obj Number

// Tenemos funciones que no necesitan parámetros externos
function salir() {
  location.assign("http://www.w3schools.com");
}
//  y Funciónes que toman parametros y argumentos...
function suma1(a, b) {
  let resul = a + b;
  alert(resul);
}
//
// funciones que ejecutan acciones y funciones que devuelven devuelven valores
function recarga() {
  if (confirm("Atención! Los datos se borrarán.")) {
    location.reload(true);
    return true;
  }
}

// La siguiente función no tiene nada de emocionante, es demasiado simple, para que tus funciónes puedan ser más versatiles e inteligentes deberán utilizar parametros y argumentos

function saludar(nombre, apellido) {
  // nombre y apellido son parametros, son valores que se le pueden pasar a la función... Los valores digamos no son reales, pues son variables...
  console.log(`Hola ${nombre}  ${apellido} `);
}
saludar("Òscar", "Eroles"); // argumentos, son los valores reales...

// Parametros por default...

// Algunas veces mandarás llamar una función que no tendrá los argumentos que se requieren, por ejemplo cuando llenas tu perfil de facebook tal vez no llenas todos los campos,   en esos casos son muy convenientes por parametros por default, veamos nuestra función si solo le pasamos el nombre pero no el apellido

// Puedes ver que en la consola aparecerá undefined

function saludar(nombre = "Desconocido", apellido = "") {
  // nombre y apellido son parametros, son valores que se le pueden pasar a la función... Los valores digamos no son reales, pues son variables...
  console.log(`Hola ${nombre}  ${apellido} `);
}
saludar("Òscar", "Eroles"); // Argumentos son los valores reales...

saludar("Pepe");

// Como se comunican las funciónes entre si...

// Tus funciónes se van a comunicar, en lugar de tener una gran función con 800 lineas es recomendable dividirla en pequeñas partes, realizan una operación y se van hacia la otra función...

iniciarApp();

function iniciarApp() {
  console.log("Iniciando App...");
  segundafunción();
}

function segundafunción() {
  console.log("Desde la segunda función...");
  usuarioAutenticado("Pepe");
}

function usuarioAutenticado(usuario) {
  console.log("Autenticando usuario...");
  console.log(`Usuario autenticado con éxito ${usuario} `);
}
// funciónes que retornan valores

function suma(a, b) {
  return a + b;
}

const resultado = suma(1, 2);

console.log(resultado);

// Ejemplo más avanzado....
let total = 0;
function agregarCarrito(precio) {
  return (total += precio);
}

function calculaIva(total) {
  return 0.21 * total;
}

total = agregarCarrito(200);
/* total = agregarCarrito(300);
total = agregarCarrito(400); */
console.log(`El IVA a pagar es de ${calculaIva(total)}`);
console.log(total + calculaIva(total));

const totalPagar = calculaIva(total);

console.log(`El total a pagar es de ${total + calculaIva(total)}`);
// En este video estaremos viendo lo que son los arrow Functions!!

// Los arrow functions son otra forma de declarar funciónes y fueron agregadas en las últimas versiones, la sintaxis es más corta y cuando comencé a utilizarlas me parecian algo complejas, en este video y los siguientes te mostraré todo lo que tienes que saber de arrow functions

//a visualizar al ver metodos y funciones para Objetos tipo array
const aprendiendo1 = function () {
  console.log("Aprendiendo JavaScript");
};

const aprendiendo2 = () => {
  console.log("Aprendiendo JavaScript");
};

// una linea no requiere llaves
const aprendiendo3 = () => console.log("Aprendiendo JavaScript");

// retornar un valor
const aprendiendo4 = () => "Aprendiendo JavaScript";

console.log(aprendiendo4());
// Parametros en un arrow Function...

// Parametros
const aprendiendo5 = (tecnologia) => console.log(`aprendiendo ${tecnologia}`);
aprendiendo5("JavaScript");

// si es un solo parmetro no ocupamos el parentesis
const aprendiendo6 = (tecnologia) => console.log(`aprendiendo ${tecnologia}`);
aprendiendo6("JavaScript");

// multiples parametros si requieren parentesis
const aprendiendo = (tecn1, tecn2) =>
  console.log(`Aprendiendo ${tecn1} ${tecn2}`);
aprendiendo("JS", "ES");

// ForEach y Map con arrow functions...

const carrito = [
  { nombre: "Monitor 20 Pulgadas", precio: 500 },
  { nombre: "Televisión 50 Pulgadas", precio: 700 },
  { nombre: "Tablet ", precio: 300 },
  { nombre: "Audifonos", precio: 200 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Celular", precio: 500 },
];

const nuevoArray = carrito.map(
  (producto) => `Articulo: ${producto.nombre} Precio: $ producto.precio} `
);

const nuevoArray2 = carrito.forEach((producto) =>
  console.log(`Articulo: ${producto.nombre} Precio: $ producto.precio} `)
);

console.log(nuevoArray);
console.log(nuevoArray2);

// Los arrow functions si no se coloca el return y queda en una sola linea dan por implicito el return.. en el map

// Arrow functions en métodos de propiedad

const reproductor = {
  cancion: "",
  reproducir: (id) => console.log(`Reproduciendo canción id ${id}`),
  pausar: () => console.log("pausando..."),
  borrar: (id) => console.log(`Borrando canción con id: ${id}`),
  crearPlaylist: (nombre) => console.log(`Creando la Playlist ${nombre}`),
  reproducirPlaylist: (nombre) =>
    console.log(`Reproduciendo la Playlist ${nombre}`),

  // También existen los Set y Get si tienes experiencia con esos términos, y si no, set es para añadir un valor, get es para obtenerlo...

  set nuevaCancion(cancion) {
    this.cancion = cancion;
    console.log(`Añadiendo ${cancion}`);
  },
  get obtenerCancion() {
    console.log(`${this.cancion}`);
  },
};
reproductor.reproducir(30);
reproductor.pausar();

// Tambien los métodos pueden quedarse por fuera
/* reproductor.borrar = function(id) {

} */
reproductor.borrar(20);
reproductor.crearPlaylist("Heavy Metal");
reproductor.reproducirPlaylist("Heavy Metal");

// Probando set y get se utilizando de la siguiente forma
reproductor.nuevaCancion = "Enter Sandman";
reproductor.obtenerCancion;
