export const cargarJsonArrayBtn = document.querySelector("#btn3");
/* const mostra = document.querySelector("#contenido"); */
import { mostra } from "./texto.js";
const mostrarHTML2 = (resultado) => {
  mostra.innerHTML += "<br>";
  const usuario = `
  <p>Empleado: ${resultado.nombre}</p>
  <p>ID: ${resultado.id}</p>
  <p>Empresa: ${resultado.empresa}</p>
  <p>Trabajo: ${resultado.puesto}</p>
  `;
  mostra.innerHTML += usuario;
};

export const obtenerDatos = () => {
  fetch("./server/empleados.json")
    .then((response) => {
      if (!response.ok) throw new Error("Error en la solicitud");
      console.log(response);
      console.log(response.type);
      console.log(response.headers.get("Content-Type"));
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.url);
      return response.json();
    })
    .then((response) => {
      mostra.innerHTML = "";
      console.log(response);
      for (let i = 0; i < response.length; i++) {
        mostrarHTML2(response[i]);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

/* cargarJsonArrayBtn.addEventListener("click", obtenerDatos); */
