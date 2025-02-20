const d = document;
const cargaUsers = d.querySelector("#usuarios");
const mostra = d.querySelector("#contenido");

/* const tabla = d.querySelector("#tableta tbody"); */
const fragmento = d.createDocumentFragment();

const formTemplate = d.querySelector("#form-template").content;
const template = d.querySelector("#crud-template").content;
const tabla = formTemplate.querySelector("#tableta tbody");
console.log(formTemplate);

const muestraEmpleados = (datos) => {
  tabla.innerHTML = "";
  datos.forEach((emp) => {
    let clone = d.importNode(template, true);
    clone.querySelector(".id").textContent = emp.id;
    clone.querySelector(".name").textContent = emp.name;
    clone.querySelector(".empresa").textContent = emp.empresa;
    clone.querySelector(".puesto").textContent = emp.puesto;
    clone.querySelector(".edit");
    clone.querySelector(".delete");
    fragmento.appendChild(clone);
  });
  tabla.appendChild(fragmento);
  mostra.appendChild(formTemplate);
};

const obtListEmpleados = () => {
  fetch("http://localhost:3000/users")
    .then((response) => {
      if (!response.ok) throw new Error("no va");
      return response.json();
    })
    .then((response) => {
      console.log(response);
      muestraEmpleados(response);
    })
    .catch((error) => {
      console.error("Error en cargar empleados", error);
    });
};

cargaUsers.addEventListener("click", obtListEmpleados);
