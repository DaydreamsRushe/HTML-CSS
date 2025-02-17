// Listado de paises
const paises = [];

// Un nuevo pais se agrega despues de 2 segundos...
const nuevoPais = (pais, callback) => {
  paises.push(pais);
  console.log(`Agregado: ${pais}`);
  callback();
};

const mostrarPaises = () => {
  console.log(paises);
};

// Los paises se muestran despues de los segundos indicados sin depender del orden de carga
const iniciarInfiernoCallback = () => {
  setTimeout(() => {
    // Agregar nuevo pais
    nuevoPais("Alemania", mostrarPaises);
    setTimeout(() => {
      nuevoPais("Francia", mostrarPaises);
      setTimeout(() => {
        nuevoPais("Inglaterra", mostrarPaises);
        setTimeout(() => {
          nuevoPais("Bélgica", mostrarPaises);
          setTimeout(() => {
            nuevoPais("Galia", mostrarPaises);
          }, 1000);
          setTimeout(() => {
            nuevoPais("Britania", mostrarPaises);
          }, 5000);
          setTimeout(() => {
            nuevoPais("Helvetia", mostrarPaises);
          }, 2000);
        }, 3000);
      }, 6000);
    }, 1000); // Después de .... segundos obtenemos los paises...
  }, 3000);
};

window.onload = iniciarInfiernoCallback; // Opcional

// mostrarPaises es el callback, una vez agregado alemania se va a ejecutar esa linea...
