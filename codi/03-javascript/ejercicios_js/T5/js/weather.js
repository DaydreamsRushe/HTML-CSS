const apiCode = "044f6f194d9020402735e93570260169";
const content = document.getElementById("contenido");
const btn = document.getElementById("btn");
const countries = document.getElementById("countries");
const city = document.getElementById("city");
const mostraError = document.getElementById("error");

countries.value = "";
city.value = "";

const mustraTemps = (datos) => {
  let html = "";
  const {
    main: { temp, temp_max, temp_min },
    name,
  } = datos;
  html = `<section class="content">
    <h3>El tiempo de hoy en ${name}</h3>
    <p>Temperatura actual: ${temp} ºC</p>
    <p>Máxima prevista: ${temp_max} ºC</p>
    <p>Minima prevista: ${temp_min} ºC</p>
  </section>`;
  content.innerHTML = html;
};

const recarga = () => {
  location.reload();
};

btn.onclick = () => {
  content.innerHTML =
    "<p>Introduce País y Ciudad para ver el Tiempo de Hoy</p>";
  let pais = countries.value;
  console.log(pais);
  let ciudad = city.value;
  console.log(ciudad);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&units=metric&appid=${apiCode}`
  )
    .then((response) => {
      if (pais == "" || ciudad == "")
        throw new Error("Ambos campos son obligatorios");
      if (!response.ok) throw new Error("No se ha encontrado la ciudad");

      return response.json();
    })
    .then((datos) => {
      console.log(datos);
      mustraTemps(datos);
    })
    .catch((error) => {
      console.log(error);
      mostraError.innerHTML = `<p class="content">${error}</p>`;
      setTimeout(recarga, 5000);
    });
};
