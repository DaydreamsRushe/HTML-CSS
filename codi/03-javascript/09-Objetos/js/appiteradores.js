// Uso de laPalabra reservada this...
// this se refiere al valor sobre el objeto o que se esta ejecuta en ese momento

const usuario = {
  nombre: "Pepe",
  edad: 30,
  hijos: ["pepillo", "pepin", "pepita"],
  info: function () {
    return `Usuario: ${this.nombre}, Edad ${this.edad}, Hijos: ${this.hijos}`;
  },
};

const mostraUser = document.querySelector("#mostraUser");
mostraUser.innerHTML = usuario.info();

console.log(usuario.info());

// Object.keys y object.values y entries, iteradores de objetos,

const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true,
};

console.log(Object.keys(producto)); // nos devolverá un array con los keys del objeto
console.log(Object.keys(usuario)); // nos devolverá un array con los keys del objeto
console.log(Object.values(producto)); // nos devolverá un arreglo con los valores del objeto
console.log(Object.values(usuario)); // nos devolverá un arreglo con los valores del objeto
console.log(Object.entries(usuario)); // Entries nos va a retornar un Array de cada juego de llaves y valores
console.log(Object.entries(producto)); // Entries nos va a retornar un Array de cada juego de llaves y valores
const mostra = document.querySelector("#mostra");
mostra.innerHTML = `KEYS: : ${Object.keys(
  producto
)}<br><br>VALUES${Object.values(
  producto
)}<br><br>ARRAY ENTRADAS:  ${Object.entries(
  producto
)} <br><br>KEYS: ${Object.keys(usuario)}<br><br>VALUES: ${Object.values(
  usuario
)}<br><br>INFO: ${usuario.info()} <br> <br>ARRAY ENTRIES:  ${Object.entries(
  usuario
)}<br><br>INFO: ${usuario.info()}`;

/* 
const mostra = document.querySelector("#mostra");
mostra.innerHTML = `${Object.keys(producto)}<br><br>${formatObjectValues(producto)}<br><br> ${formatObjectEntries(producto)} <br><br>${Object.keys(usuario)}<br><br>${formatObjectValues(usuario)}<br><br> ${formatObjectEntries(usuario)}`;

function formatObjectValues(obj) {
  const values = Object.values(obj);
  return values.map(value => typeof value === 'function' ? value.toString() : JSON.stringify(value));
}

function formatObjectEntries(obj) {
  const entries = Object.entries(obj);
  return entries.map(([key, value]) => [key, typeof value === 'function' ? value.toString() : JSON.stringify(value)]); 
}*/

const listaProductos = document.querySelector("#lista-productos");

const productos = Object.entries(producto);
productos.forEach((elem) => {
  const li = document.createElement("li");
  li.textContent = JSON.stringify(elem);
  listaProductos.appendChild(li);
});

const listaUsuarios = document.querySelector("#lista-usuarios");
const usuarios = Object.entries(usuario);
usuarios.forEach((elem) => {
  const li = document.createElement("li");
  /* li.textContent = JSON.stringify(elem); */
  li.textContent = elem;
  listaUsuarios.appendChild(li);
});
