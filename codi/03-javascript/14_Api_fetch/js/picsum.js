const btnPicsum = document.querySelector("#btn4");
const mostra = document.querySelector("#contenido");

const mHTML = (datos) => {
  mostra.innerHTML = "";
  let html = "";
  datos.forEach((dato) => {
    const { author, download_url } = dato;
    html += `<p>Autor: ${author}</p>
              <img src="${download_url}" width="200"/><br/>
              <a href="${download_url}" target="new">Descargar original</a>`;
  });
  mostra.innerHTML = html;
};

const obDatos = () => {
  fetch("./server/dbpictures.json")
    .then((response) => {
      if (!response.ok) throw new Error("error en la solicitud");
      return response.json();
    })
    .then((response) => {
      console.log(response);
      mHTML(response);
    })
    .catch((error) => {
      console.log(error);
      mostra.innerHTML = `<p>Error al cargar los datos de los autores</p>`;
    });
};

btnPicsum.addEventListener("click", obDatos);
