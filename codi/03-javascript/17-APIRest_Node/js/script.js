const d = document;
const cargaUsers = d.querySelector("#usuarios");
const mostra = d.querySelector("#contenido");

/* const tabla = d.querySelector("#tableta tbody"); */
const fragmento = d.createDocumentFragment();

const formTemplate = d.querySelector("#form-template").content;
const template = d.querySelector("#crud-template").content;
/* const tabla = formTemplate.querySelector("#tableta tbody");*/
let maxId;

const muestraEmpleados = (datos) => {
  mostra.innerHTML = "";
  const formClone = d.importNode(formTemplate, true);
  mostra.appendChild(formClone);
  const tabla = d.querySelector("#tableta tbody");
  tabla.innerHTML = "";
  datos.forEach((emp) => {
    let clone = d.importNode(template, true);
    clone.querySelector(".id").textContent = emp.id;
    clone.querySelector(".name").textContent = emp.nombre;
    clone.querySelector(".empresa").textContent = emp.empresa;
    clone.querySelector(".puesto").textContent = emp.puesto;
    clone
      .querySelector(".edit")
      .addEventListener("click", () => editarEmpleado(emp));
    clone
      .querySelector(".delete")
      .addEventListener("click", () => eliminarEmpleado(emp.id));
    fragmento.appendChild(clone);
  });
  tabla.appendChild(fragmento);
  /* mostra.appendChild(formTemplate); */
};

const editarEmpleado = (empleado) => {
  const form = d.querySelector("#crud-form");
  form.id.value = empleado.id;
  form.nombre.value = empleado.nombre;
  form.empresa.value = empleado.empresa;
  form.puesto.value = empleado.puesto;
};

const eliminarEmpleado = (id) => {
  if (confirm("¿Estas seguro de eliminar este empleado?")) {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) throw new Error("Error al elmininar empleado");
        return response.json();
      })
      .then(() => {
        alert("Empleado eliminado correctamente");
        obtListEmpleados(); //recargar la lista
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }
};

d.addEventListener("submit", async (e) => {
  /*   console.log(maxId, "este es el max id");
  console.log((Number(maxId) + Number(1)).toString(), "este es el max id +1"); */
  if (e.target.matches("#crud-form")) {
    e.preventDefault();
    const empleado = {
      nombre: e.target.nombre.value,
      empresa: e.target.empresa.value,
      puesto: e.target.puesto.value,
    };
    let url = "http://localhost:3000/users";
    let method = "POST";
    empleado.id = (Number(maxId) + Number(1)).toString();
    if (e.target.id.value) {
      url += `/${e.target.id.value}`;
      method = "PUT";
    }
    try {
      let res = await fetch(url, {
        method: method,
        headers: {
          "Content-type": "application/json; Charset=utf-8",
        },
        body: JSON.stringify(empleado),
      });
      if (!res.ok) throw new Error("Error en la solicitud");
      alert(
        `Empleado ${e.target.id.value ? "editado" : "añadido"} correctamente`
      );
      obtListEmpleados();
      e.target.reset();
      e.target.id.value = "";
    } catch (error) {
      console.error("Error", error);
    }
  }
});

const obtListEmpleados = () => {
  fetch("http://localhost:3000/users")
    .then((response) => {
      if (!response.ok) throw new Error("no va");
      return response.json();
    })
    .then((response) => {
      console.log(response);
      muestraEmpleados(response);
      maxId = response[response.length - 1].id;
    })
    .catch((error) => {
      console.error("Error en cargar empleados", error);
    });
};

cargaUsers.addEventListener("click", obtListEmpleados);
