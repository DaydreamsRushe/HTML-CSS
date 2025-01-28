//Veamos otro tipo de formas de crear variables, variables de tipo constante: const
//Existen pocas diferencias entre let y const, cuando hablamos de datos primitivos: en una variable con const, su valor no puede ser reasignado, debe inicializarse con un valor, nunca undefined, suele escribirse en UPPERCASE.

const PRECIO = 20;
console.log(PRECIO);

const mo = "Pantalla de 19Pulgadas";
console.log(mo);
/* mo = "monitor de 21 pulgadas"; //no puede reasignarse */
console.log(mo);

//Existen otras diferencias entre const y let especialmente cuando se trabajam con arrays y objetos, osea, con datos complejos.
//Mientras mantengan la estructura del contenido o Referencia, pueden sufrir modificaciones en los valores.
//Recuerda: las variables con const no se pueden reasignar y tampoco se pueden iniciar sin un valor.

//Ejemplo

/* const nom = function nombre() {
  var nombre = prompt("introduce tu nombre");
  alert(nombre + " es mi nombre");
  alert(`${nombre} es mi nombre`);
  console.log(nombre + " si que es el nombre pesaoooooo");
  console.log(`${nombre} si que es el nombre pesaoooooo`);
  document.querySelector(
    "#mostrar3"
  ).innerHTML = `<p> pesao eres ${nombre}</p>`;
}; */
