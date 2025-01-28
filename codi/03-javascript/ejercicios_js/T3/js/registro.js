const mostra5 = document.getElementById("mostra5");
const nom = document.getElementById("nom");
const cognoms = document.getElementById("cognoms");
const edad = document.getElementById("edad");
const dni = document.getElementById("dni");
const btn_muestra = document.getElementById("btn_ejer5");
const btn_push = document.getElementById("btn_pus5");
const btn_pop = document.getElementById("btn_ultim5");
const btn_limpiar = document.getElementById("btn_limpiar5");
const registro = new Array();

btn_muestra.onclick = () => {
  let fulltext = "";
  for (let i = 0; i < registro.length; i++) {
    fulltext +=
      registro[i].Nom +
      " " +
      registro[i].Cognoms +
      " " +
      registro[i].Edat +
      " " +
      registro[i].DNI +
      " " +
      "<br/>";
  }
  mostra5.innerHTML = "<div>" + fulltext + "</div>";
};

btn_push.onclick = () => {
  if (
    nom.value != "" &&
    cognoms.value != "" &&
    edad.value != "" &&
    dni.value != ""
  ) {
    registro.push({
      Nom: nom.value,
      Cognoms: cognoms.value,
      Edat: edad.value,
      DNI: dni.value,
    });
  } else {
    mostra5.innerHTML = "<div>todos los campos deben contener un valor</div>";
  }
};

btn_pop.onclick = () => {
  if (registro.length > 0) {
    registro.pop();
    mostra5.innerHTML = "<div>Ultimo elemento extraído del array</div>";
  } else {
    mostra5.innerHTML = "<div>No quedan elementos en el array</div>";
  }
};

btn_limpiar.onclick = () => {
  while (registro.length > 0) {
    registro.pop();
  }
  mostra5.innerHTML = "<div>todo el array borrado</div>";
};
