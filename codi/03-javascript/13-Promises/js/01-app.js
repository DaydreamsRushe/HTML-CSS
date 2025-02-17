//Una función callback es aquella que es pasada como argumento a otra función para que sea "llamada de nuevo" (call back) en un momento posterior. Una función que acepta otras funciones como argumentos y no estás obligado a usar la palabra "callback" como el nombre de tu argumento, Javascript solo necesita saber que es el nombre correcto del argumento. Pueden ser arrow functions

//Cuando se usan funciones Callback
//La mayoría del tiempo estamos creando aplicaciones que operan en una forma sincrónica. En otras palabras, algunos de nuestra operaciones comienzan solo después de que se hayan completado las anteriores. Usualmente, cuando solicitamos datos desde otras fuentes como una API externa, no siempre sabemos cuando nuestros datos serán devueltos. En estos casos queremos esperar la respuesta, pero no queremos que toda nuestra aplicación se detenga mientras se recuperan los datos. Estas son situaciones dónde las funciones callback resultan útiles ya que aceleran los procesos que no dependen de la API externa.

// Listado de paises
const paises = [
  "Francia",
  "España",
  "Portugal",
  "Australia",
  "Inglaterra",
  "Irlanda",
];
console.log(paises);
paises.push("Belgica");
/* console.log(paises); */

// Un nuevo pais se agrega despues de 2 segundos...Ejemplo
/* function nuevoPais(pais, callback) {
  setTimeout(() => {
    paises.push(pais);
    callback();
  }, 2000); // los dos segundos ya han pasado, y se agrega uno nuevo, ejecutamos el callback para que se vuelva a llamar a la presentación en consola
} */
const nuevoPais = (pais, callback) => {
  setTimeout(() => {
    paises.push(pais);
    callback();
  }, 2000); // los dos segundos ya han pasado, y se agrega uno nuevo, ejecutamos el callback para que se vuelva a llamar a la presentación en consola
};
//función callback
const mostrarPaises = () => {
  setTimeout(() => {
    paises.forEach((pais) => {
      console.log(pais);
    });
  }, 1000); // Después de un segundo obtenemos los paises...
};
console.log(nuevoPais("Belgica", mostrarPaises));
// Los paises se muestran despues de 1 segundo
onload = mostrarPaises; // Opcional

// Agregar nuevo pais
nuevoPais("Alemania", mostrarPaises); // mostrarPaises es el callback, una vez agregado alemania se va a ejecutar esa linea...
