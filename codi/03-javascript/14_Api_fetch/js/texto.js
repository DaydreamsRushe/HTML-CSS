const btn1 = document.querySelector("#btn1");
const mostra = document.querySelector("#contenido");

const obtenerTexto = () => {
  fetch("./server/data.txt")
    .then((response) => {
      console.log(response);
      console.log(response.type);
      return response.text();
    })
    .then((datos) => {
      console.log(datos);
      const mostra = document.querySelector("#contenido");
      mostra.innerHTML = datos;
    })
    .catch((error) => {
      console.log(error);
    });
};

btn1.addEventListener("click", obtenerTexto);
