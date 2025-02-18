export const cargarJsonPorid = document.querySelector("#btn6");
/* const mostra = document.querySelector("#contenido"); */
import { mostra } from "./texto.js";
const mostrarHTML3 = (resultado) => {
  mostra.innerHTML = `
    <p>Empleado: ${resultado.nombre}</p>
    <p>ID: ${resultado.id}</p>
    <p>Empresa: ${resultado.empresa}</p>
    <p>Trabajo: ${resultado.puesto}</p>
  `;
};

export const obtenerDatos = (id) => {
  fetch("./server/empleados.json")
    .then((response) => {
      if (!response.ok) throw new Error("Error en la solicitud");
      return response.json();
    })
    .then((empleados) => {
      const empleado = empleados.find((emp) => emp.id === id);
      mostrarHTML3(empleado);
    })
    .catch((error) => {
      console.log(error);
      mostra.innerHTML = `<p>Error al cargar los datos del empleado</p>`;
    });
};

/* cargarJsonPorid.addEventListener("click", () => obtenerDatos(2)); */
