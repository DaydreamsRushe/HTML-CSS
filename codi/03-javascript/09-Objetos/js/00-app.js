// Los objetos son la pieza principal en JavaScript y en cualquier lenguaje en lugar de crear diferentes variables:

const nombreProducto = "Monitor 20 Pulgadas";
const preci = 30;
const disponible = true;

// Podemos crear un objeto que agrupe toda esta información en una sola variable
const product = {
  // Esto se le conoce como objeto literal. Estas llaves despues del signo = representan un objeto
  nombre: /* Propiedad o llave del objeto */ "Monitor 20 pulgadas", //Valor de la propiedad o llave valor. No usamos el operador de asignación = sino :, esta sintaxis es propia de los objetos y representa el valor que tendrá la propiedad o la llave del objeto.
};
// si deseas agregar más propiedades puedes hacerlo de la siguiente forma

const producto = {
  nombre: "Monitor 20 pulgadas", // La , es importante, sin ella tendriamos un error
  precio: 30,
  disponible: true, // El último elemento puede o no tener la ,
};

console.log(producto);

// Supongamos que deseamos acceder al nombre, en los objetos de javascript y otros lenguajes de programación, utilizamos la sintaxis de punto para acceder a los valores de las propiedades del producto

console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

// Otra forma aunque no tan común es:
console.log(producto["nombre"]);

// Añadir propiedades nuevas a un objeto...
// Para añadir nuevas propiedades se utiliza de la misma forma la sintaxis de punto
producto.imagen = "image.jpg";

// Finalmente para eliminar una propiedad se utiliza delete
/* delete producto.nombre; */
/* delete producto.precio; */
console.log(producto);

// Veamos como asignar variables a un objeto

/* const nombre = producto.nombre;
console.log(nombre); */

// Otra forma de hacerlo y que también es nueva, es con algo llamado object destructuring...

// Destructuring significa, sacar de una esctructura, puede ser complejo, no lo es tanto sobretodo cuando lo practicas
const { nombre } = producto;

// si deseas extraer más variables;
const { precio } = producto;

console.log(nombre);
console.log(precio);

// O de una vez extraes todas las variables que necesitas
/* const { nombre, precio } = producto; */

// Un objeto puede contener cualquier tipo de dato dentro de el, incluso puede tener otros objetos, este concepto se le conoce como anidamiento de Objetos, o objetos anidados.

const otroProducto = {
  nombre: "Monitor 20 pulgadas",
  precio: 30,
  disponible: true,
  informacion: {
    peso: "1kg",
    medida: "1m",
  },
};

console.log(otroProducto); // Puedes ver que tenemos un objeto dentro de un objeto.

// De nueva cuenta para acceder a un objeto, se utiliza la sintaxis de punto

console.log(otroProducto.informacion);
console.log(otroProducto.informacion.peso);
console.log(otroProducto.informacion.medida);

// Veamos como hacer destructuring de un objeto que esta dentro de otro objeto..

const {
  /*   nombre,
  precio, 
  disponible, */ //ya estan en una desestructuración anterior como variables
  informacion,
  informacion: { peso, medida },
} = otroProducto;

console.log(nombre);
console.log(precio);
console.log(disponible);
console.log(informacion);
console.log(peso);
console.log(medida);

// Si recuerdas una variable de tipo const una vez que es definida no puede reasginarse su valor.
// En el caso de los objetos veremos que tienen un comportamiento diferente, ya que sus propiedades si se pueden reescribir.

const producto2 = {
  nombre: "Monitor 20 pulgadas",
  precio: 30,
  disponible: true,
};

console.log(producto2);

producto2.disponible = false;

console.log(producto2); // Puedes ver que lo pudimos modificar, a pesar de ser const.

// Unir 2 objetos, esto llega a ser muy común ya que algunas veces en una base de datos obtienes el ID del cliente y también tienes los clientes que pertenecen a ese ID y te gustaría unirlos

const productos = {
  nombre: "Monitor 20 pulgadas",
  precio: 30,
  disponible: true,
};

const medidas = {
  peso: "1 kg",
  medida: "1 metro",
};

// Una forma de hacerlo es con el object method llamado assign

const resultados = Object.assign(productos, medidas);

// Otra forma de hacerlo que se considera más moderna es con El Spread Operator o Rest Operator, veamoslo en el siguiente video

console.log(resultados);
// Otra forma de hacerlo que se considera más moderna es con algo llamado el Spread Operator o Rest Operator

const resultado = { ...productos, ...medidas };

console.log(resultado);

//Uso de this
// /This se refiere al valor sobre el objeto o context que se esta ejecutando en ese momento

const producto3 = {
  nombre: "Monitor 20 pulgadas",
  precio: 30,
  disponible: true,
  mostrarInfo: function () {
    return `El Producto: ${this.nombre}  tiene un precio de ${this.precio}`;
  },
};

console.log(producto3.mostrarInfo());

// Principales iteradores: Object.keys y object.values y entries, estos son más conocidos como iteradores de objetos,

const producto4 = {
  nombre: "Monitor 20 pulgadas",
  precio: 30,
  disponible: true,
};

console.log(Object.keys(producto4)); // nos devolverá un arreglo con los keys del objeto
console.log(Object.values(producto4)); // nos devolverá un arreglo con los valores del objeto
console.log(Object.entries(producto4)); // Entries nos va a retornar una matriz de llaves y valores
