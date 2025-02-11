/* const nombreClienteA = "Juan";
let ahorro = 200;
 */
// Los IIFE son funciones que se ejecutan inmediatamente que son leidas...

// Easta forma evitara que estas variables definidas en este archivo se puedan mezclar con las de otros archivos... y su sintaxis es la siguiente

/* (function () {
  const nombreCliente = "Juan";
  let ahorro = 200;
  //evitamos que este codigo se mezcle con otras variables, el problema es que encapsula el codigo, y para hacerlo accesible desde otros archivos devemos elevar el ambito de este codigo al window del navegador

  window.nombreCliente = "Juan Alberto";
})(); */

//Para no tener grandes cantidades de codigo dentro de una IIFE, ni conflictos de ambito son muy utiles los modulos y 2 palabras, export e import...
export const nombreCliente = "Pepe";
export let ahorro = 200;

//Podemos exportar e importar todo tipo de datos, variables, constantes,funciones, arrays, objetos, clases

export function mostrardatos(nombre, ahorro) {
  return `Cliente: ${nombre}, ahorro: ${ahorro}`;
}

//Creacion de una clase. Modelo para construir objetos

export class Cliente {
  constructor(nombre, ahorro) {
    this.nombre = nombre;
    this.ahorro = ahorro;
  }

  mostrarDatos() {
    return `Cliente: ${this.nombre}, ahorro: ${this.ahorro}`;
  }
}
