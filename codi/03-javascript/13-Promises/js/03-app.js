/* 
Una Promise, es un objeto que representa la terminación o el fracaso de una operación asíncrona. Esencialmente, una promesa es un objeto devuelto al cual se adjuntan funciones callback, en lugar de pasar funciones de tipo callback a una función.

Considera la función "crearArchivoAudioAsync()"", la cual genera de manera asíncrona un archivo de sonido de acuerdo a un archivo de configuración, y dos funciones callback, una que es llamada si el archivo de audio es creado satisfactoriamente, y la otra que es llamada si ocurre un error. El código podría verse de la siguiente forma:

function exitoCallback(resultado) {
  console.log("Archivo de audio disponible en la URL " + resultado);
}

function falloCallback(error) {
  console.log("Error generando archivo de audio " + error);
}

crearArchivoAudioAsync(audioConfig, exitoCallback, falloCallback);
La programación moderna, devuelve un objeto promise al que puedes adjuntar funciones de retorno (callbacks). 

Al crear la función "crearArchivoAudioAsync" como un objeto promise, usarla sería tan simple como esto:

crearArchivoAudioAsync(audioConfig).then(exitoCallback, falloCallback);

Versión corta de:
const promesa = crearArchivoAudioAsync(audioConfig);
promesa.then(exitoCallback, falloCallback);

Este procedimiento es una llamada a diferentes tipos de funciones asíncronas, y tiene varias ventajas con respecto a los callback tradicionales

Garantías de seguridad

Las funciones callback adjuntas al objeto nunca serán llamadas antes de la terminación de la ejecución actual del bucle de eventos de JavaScript.
Las funciones callback añadidas con then() incluso después del éxito o fracaso de la operación asíncrona serán llamadas siempre despues de resolver las anteriores.
Múltiples funciones callback pueden ser añadidas llamando a then() varias veces. 
Cada una de ellas es ejecutada una seguida de la otra, en el orden en el que fueron insertadas.

Garantias de Encadenamiento
Una necesidad común es el ejecutar dos o más operaciones asíncronas seguidas, donde cada operación posterior se inicia cuando la operación previa tiene éxito, con el resultado del paso previo. Logramos esto creando una cadena de objetos promises.
Cada método o función then() devuelve una promesa nueva, diferente de la original:

const promesa = hazAlgo();
const promesa2 = promesa.then(exitoCallback, falloCallback);
o
let promesa2 = hazAlgo().then(exitoCallback, falloCallback);

Esta segunda promesa (promesa2) representa no sólo la terminación de hazAlgo(), sino también de exitoCallback o falloCallback que pasaste, las cuales pueden ser otras funciones asíncronas devolviendo una promesa. Cuando ese es el caso, cualquier función callback añadida a promesa2 se queda en cola detrás de la promesa devuelta por exitoCallback o falloCallback.

Básicamente, cada promesa representa la terminación de otro paso (asíncrono on no) en la cadena.

En el pasado, hacer varias operaciones asíncronas en fila conduciría a la clásica pirámide de funciones callback:

hazAlgo(function(resultado) {
  hazAlgoMas(resultado, function(nuevoResultado) {
    hazLaTerceraCosa(nuevoResultado, function(resultadoFinal) {
      console.log('Obtenido el resultado final: ' + resultadoFinal
    }, falloCallback);
  }, falloCallback);
}, falloCallback);

Con las funciones modernas, adjuntamos nuestras funciones callback a las promesas devueltas, formando una cadena de promesa:

hazAlgo()
  .then(function (resultado) {
    return hazAlgoMas(resultado);
  })
  .then(function (nuevoResultado) {
    return hazLaTerceraCosa(nuevoResultado);
  })
  .then(function (resultadoFinal) {
    console.log("Obtenido el resultado final: " + resultadoFinal);
  })
  .catch(falloCallback);

Los argumentos a then() son opcionales, y catch(falloCallBack) es un atajo para then(null, falloCallBack). 
Versión corta con arrow functions (Recuerda que la palabra return no se usa en las arrow functions porque se da implícito):


hazAlgo()
  .then((resultado) => hazAlgoMas(resultado))
  .then((nuevoResultado) => hazLaTerceraCosa(nuevoResultado))
  .then((resultadoFinal) => {
    console.log(`Obtenido el resultado final: ${resultadoFinal}`);
  })
  .catch(falloCallback);
Es importante devolver siempre resultados en cada function, de otra forma las funciones callback no se encadenarán y los errores no serán capturados.

Encadenar después de una captura
Es posible encadenar después de un fallo - por ejemplo: un catch- lo que es útil para lograr nuevas acciones incluso después de una acción fallida en la cadena. Lea el siguiente ejemplo:

new Promise((resolver, rechazar) => {
  console.log("Inicial");
  resolver();
})
  .then(() => {
    throw new Error("Algo falló");

    console.log("Haz esto");
  })
  .catch(() => {
    console.log("Haz aquello");
  })
  .then(() => {
    console.log("Haz esto sin que importe lo que sucedió antes");
  });

Esto devolverá el siguiente texto:

Inicial
Haz aquello
Haz esto sin que importe lo que sucedió antes
El texto "Haz esto" no es escrito porque el error "Algo falló" causó un rechazo.

Propagación de errores
Tal vez recuerdes haber visto falloCallback tres veces en la pirámide en un ejemplo anterior, en comparación con sólo una vez al final de la cadena de promesas:

hazAlgo()
  .then((resultado) => hazAlgoMas(valor))
  .then((nuevoResultado) => hazLaTerceraCosa(nuevoResultado))
  .then((resultadoFinal) =>
    console.log(`Obtenido el resultado final: ${resultadoFinal}`),
  )
  .catch(falloCallback);
Básicamente, una cadena de promesas se detiene si hay una excepción, y recorre la cadena buscando manejadores de captura de ese error. 
con la estructura 
try{
//Ejecuta acciones
}catch(error){
//Ejecuta acciones de error
}

try {
  let resultado = syncHazAlgo();
  let nuevoResultado = syncHazAlgoMas(resultado);
  let resultadoFinal = syncHazLaTerceraCosa(nuevoResultado);
  console.log(`Obtenido el resultado final: ${resultadoFinal}`);
} catch (error) {
  falloCallback(error);
}
Esta simetría con el código síncrono culmina con la mejora sintáctica async/await en ECMASCript 2017. Aunque no es obligatorio usar las palabras async/await:

async function foo() {
  try {
    let resultado = await hazAlgo();
    let nuevoResultado = await hazAlgoMas(resultado);
    let resultadoFinal = await hazLaTerceraCosa(nuevoResultado);
    console.log(`Obtenido el resultado final: ${resultadoFinal}`);
  } catch (error) {
    falloCallback(error);
  }
}

Las promesas resuelven un fallo fundamental de la pirámide de funciones callback, capturando todos los errores, incluso excepciones lanzadas y errores de programación. Esto es esencial para la composición funcional de operaciones asíncronas.

Métodos bàsicos
Promise.resolve() y Promise.reject() son atajos para crear manualmente una promesa resuelta o rechazada respectivamente.

Promise.all() o Promise.race() son dos herramientas de composición para ejecutar operaciones asíncronas en paralelo.

Podemos comenzar operaciones en paralelo y esperar que finalicen todas ellas de la siguiente manera:

Promise.all([func1(), func2(), func3()]).then(
  ([resultado1, resultado2, resultado3]) => {
    usa resultado1, resultado2 y resultado3 
    });

Sincronización
Para evitar sorpresas, las funciones pasadas a then() nunca serán llamadas sincrónicamente, incluso con una promesa ya resuelta:


Promise.resolve().then(() => console.log(2));
console.log(1); // 1, 2
En lugar de ejecutarse inmediatamente, la función pasada es colocada en una cola de microtareas, lo que significa que se ejecuta más tarde cuando la cola es vaciada al final del actual ciclo de eventos de JavaScript:*/

const espera = (ms) => new Promise((resuelve) => setTimeout(resuelve, ms));

espera().then(() => console.log(4));
Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));
console.log(2); // 1, 2, 3, 4

/* 
Anidamiento
Las cadenas de promesas simples se mantienen planas sin anidar, ya que el anidamiento puede ser el resultado de una composición descuidada. 

El anidamiento es una estructura de control para limitar el alcance de las sentencias catch. Específicamente, un catch anidado sólo captura fallos dentro de su contexto y por debajo, no captura errores que están más arriba en la cadena fuera del alcance del anidamiento. Cuando se usa correctamente, da mayor precisión en la recuperación de errores:

Errores comunes
Aquí hay algunos errores comunes que deben tenerse en cuenta al componer cadenas de promesas. Varios de estos errores se muestran en el siguiente ejemplo:

// ¡Mal ejemplo!
hacerlAlgo()
  .then(function (resultado) {
    hacerOtraCosa(resultado) // Olvida devolver una promesa desde el interior de la cadena + anidamiento innecesario
      .then((nuevoResultado) => hacerUnaTerceraCosa(nuevoResultado));
  })
  .then(() => hacerUnaCuartaCosa());

El primer error es no encadenar las acciones adecuadamente. Esto sucede cuando creamos una promesa y olvidamos devolverla. Como consecuencia, la cadena se rompe, o mejor dicho, tenemos dos cadenas independientes que compiten. Esto significa que hacerUnaCuartaCosa() no esperará a que finalicen hacerOtraCosa() o hacerUnaTerceraCosa(), y se ejecutará paralelamente a ellas. Las cadenas separadas también tienen un manejador de errores separado, lo que provoca errores no detectados.
El segundo error es el anidamiento innecesario, que da lugar al primer error. La anidación también limita el alcance de los manejadores de errores internos, que - si no son deseados - pueden llevar a errores no detectados. Una variante de esto es el constructor anti-patrón de promesas, el cuál combina el anidamiento con el uso redundante del constructor de promesa para envolver el código que ya usa promesas.
El tercer error es olvidar cerrar las cadenas con catch. Las cadenas de promesas no terminadas conducen a errores no capturados en la mayoría de los navegadores.
Una buena regla es devolver o terminar siempre las cadenas de promesas, y tan pronto como obtenga una nueva promesa, devolverla de inmediato, para aplanar las cosas:

hacerAlgo()
  .then(function (resultado) {
    return hacerOtraCosa(resultado);
  })
  .then((nuevoResultado) => hacerUnaTerceraCosa(nuevoResultado))
  .then(() => hacerUnaCuartaCosa())
  .catch((error) => console.log(error));
Observa que () => x es un atajo para () => { return x; }.

El uso de async / await aborda la mayoría, si no todos estos problemas, la desventaja es que el error más común con esa sintaxis es olvidar la palabra clave await.
*/

// Vamos a definir un promise
const aplicarDescuento = new Promise((resolve, reject) => {
  // Puede ser arrow function...
  const descuento = true;

  // Comentar estas siguientes lineas para ver el Resolve...
  if (descuento) {
    resolve("Descuento Aplicado");
  } else {
    reject("No se pudo aplicar el descuento");
  }
});

aplicarDescuento
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.log(error);
  });

console.log(aplicarDescuento);

// En los Promises hay 3 valores posibles, pendiente, no se ha cumplido o rechazado...
// Fullfilled - se ha cumplido
// Rejected - se ha recahzado o no se pudo cumplir

// recuerda que gracias a las ventajas de los  arrow functions puedes colocar todo en una sola linea...

// Tal vez tengas la duda de si puedes ejecutar funciones para no tener mucho código, la respuesta es si...

function descuento() {
  console.log("Aplicando el Descuento...");
}

// callback hell to promise...
const paises = [];

const nuevoPais = (pais) =>
  new Promise((resolve) => {
    setTimeout(() => {
      paises.push(pais);
      resolve(`Agregado: ${pais}`);
    }, 3000);
  });

nuevoPais("Alemania")
  .then((resultado) => {
    console.log(resultado);
    console.log(paises);
    return nuevoPais("Francia");
  })
  .then((resultado) => {
    console.log(resultado);
    console.log(paises);
    return nuevoPais("Inglaterra");
  })
  .then((resultado) => {
    console.log(resultado);
    console.log(paises);
  });
