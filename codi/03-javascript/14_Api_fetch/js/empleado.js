export const cargarJsonBtn = document.querySelector("#btn2");
/* const mostra = document.querySelector("#contenido"); */
import { mostra } from "./texto.js";

const mostrarHTML = (resultado) => {
  mostra.innerHTML = "";
  const usuario = `
  <p>Empleado: ${resultado.nombre}</p>
  <p>ID: ${resultado.id}</p>
  <p>Empresa: ${resultado.empresa}</p>
  <p>Trabajo: ${resultado.puesto}</p>
  `;
  mostra.innerHTML = usuario;
};

export const obtenerDatos = () => {
  fetch("./server/empleado.json")
    .then((response) => {
      console.log(response);
      console.log(response.type);
      console.log(response.headers.get("Content-Type"));
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.url);
      return response.json();
    })
    .then((response) => {
      mostrarHTML(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

/* cargarJsonBtn.addEventListener("click", obtenerDatos); */
