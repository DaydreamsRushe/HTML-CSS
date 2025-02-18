const btnRandomUser = document.querySelector("#btn5");
const mostra = document.querySelector("#contenido");

const musr = (users) => {
  mostra.innerHTML = "";
  let html = "";
  users.forEach((user) => {
    const {
      phone,
      picture: { medium },
      name: { first, last },
    } = user;
    html = `<p>Name: ${first} ${last}</p>
               <img src="${medium}"/><br/>
              <p>Phone: ${phone}</p>`;
    mostra.innerHTML += html;
  });
};

const obDatosUser = () => {
  fetch("https://randomuser.me/api/?results=50")
    .then((response) => {
      if (!response.ok) throw new Error("error en la solicitud");
      return response.json();
    })
    .then((response) => {
      console.log(response.results);
      musr(response.results);
    })
    .catch((error) => {
      console.log(error);
      mostra.innerHTML = `<p>Error al cargar los datos de los autores</p>`;
    });
};

btnRandomUser.addEventListener("click", obDatosUser);
