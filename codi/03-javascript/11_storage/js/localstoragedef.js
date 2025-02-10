/* 
localStorage, sessionStorage


Ambos objetos de almacenaje proveen los mismos metodos y propiedades

API:

setItem(clave, valor) - guarda pares clave/valor
getItem(clave) - coje el valor de una clave
removeItem(clave) - borra una clave con su valor.
clear() - borra todo.
key(indice) - coge la clave en ena posicion determinada.
length - el numero de items almacenados. 
Utuliza Object.keys para conseguir todas las claves.

localStorage - sessionStorage.
Tanto la clave como el valor deben ser strings.
El limite es de mas de 5MB aprox, dependiendo del navegador.
Los datos estn vinculados al origen (dominio/puerto/protocolo).

LocalStorage mantiene datos entre todas las pestañas y ventanas que tengan el mismo origen, Sobrevive a reinicios del navegador.

sessionStorage es solo accesible en una pestaña del navegador, incluyendo iframes del mismo origen.

LocalStorage: No expiran

sessionStorage: Muere al cerrar la pestaña

*/

localStorage.setItem("now", Date.now());
localStorage.getItem("now");
console.log("now");
/* localStorage.removeItem("now") */

const boton = document.querySelector("#grabar");
const indice = document.querySelector("#clave");
const val = document.querySelector("#texto");
const cajadatos = document.querySelector("#cajadatos");

const eliminar = (clave) => {
  if (confirm("¿Esta seguro?")) {
    localStorage.removeItem(clave);
    mostrar();
  }
};

const eliminarTodo = () => {
  if (confirm("¿Seguro?")) {
    localStorage.clear();
    cajadatos.innerHTML = "";
  }
};

const mostrar = () => {
  let cajadatos = document.querySelector("#cajadatos");
  cajadatos.innerHTML = `<div><input type="button" onclick="eliminarTodo()" value="Eliminar Todo"></div>`;
  for (let f = 0; f < localStorage.length; f++) {
    let clave = localStorage.key(f);
    let valor = localStorage.getItem(clave);
    cajadatos.innerHTML += `<div> ${clave} - ${valor} <br><input type="button" onclick="eliminar('${clave}')" value="Eliminar"></div>`;
  }
};

const iniciar = () => {
  boton.addEventListener("click", () => {
    console.log("dentro");
    let clave = indice.value;
    let valor = val.value;
    localStorage.setItem(clave, valor);
    indice.value = "";
    val.value = "";
    mostrar();
  });
};

window.addEventListener("load", iniciar);
