const formulario = document.firstContact;
const informe = document.getElementById("informe");
const limpiar = document.getElementById("btn_limpiar");
const guardar = document.getElementById("btn_guardar");
const recuperar = document.getElementById("btn_recuperar");

formulario.addEventListener("submit", (e) => {
  const nom = validaNom();
  const telf = validaTelf();
  const date = validaDate();
  const email = validaMail();
  const dni = validaDNI();
  const cond = formulario.condiciones.checked;

  if (nom && telf && date && email && dni) {
    console.log("correcto");
    if (!cond) {
      e.preventDefault();
      informe.value = "Necesitas aceptar las condiciones del formulario";
      informe.style.color = "red";
      return false;
    } else {
      formulario.submit();
    }
  } else {
    e.preventDefault();
    informe.value = "Queda algun campo sin rellenar correctamente";
    informe.style.color = "red";
    return false;
  }
});

const validaNom = () => {
  let naming = formulario.nombre.value;
  return naming.match(formulario.nombre.pattern);
};

const validaTelf = () => {
  let telephon = formulario.telef.value;
  return telephon.match(formulario.telef.pattern);
};

const validaDate = () => {
  let dia = formulario.dia.value;
  let mes = formulario.mes.value - 1;
  let ano = formulario.ano.value;
  let fechaNace = new Date(ano, mes, dia);
  let fechaActual = new Date();

  fechaActual.setDate(fechaActual.getDate());
  fechaActual.setMonth(fechaActual.getMonth());
  fechaActual.setFullYear(fechaActual.getFullYear());

  let edad = Math.floor(
    (fechaActual - fechaNace) / (1000 * 60 * 60 * 24) / 365
  );

  console.log(edad);

  if (edad >= 18) return true;
  return false;
};

const validaMail = () => {
  let correo = formulario.correo.value;
  console.log(correo);
  return correo.match(formulario.correo.pattern);
};

const validaDNI = () => {
  let rdni = formulario.identif.value;
  console.log(rdni);
  rdni = rdni.toUpperCase();
  let numero;
  let resul = rdni.match(formulario.identif.pattern);
  let letra = "TRWAGMYFPDXBNJZQVHLCKE";

  if (resul) {
    numero = rdni.substr(0, rdni.length - 1);
    numero = numero.replace("X", 0);
    numero = numero.replace("Y", 1);
    numero = numero.replace("Z", 2);
    unaletra = rdni.substr(rdni.length - 1, 1);
    numero = numero % 23;
    letra = letra.substring(numero, numero + 1);

    if (letra !== unaletra) return false;
    else return true;
  } else {
    return false;
  }
};

const queFalta = (event) => {
  let result;
  switch (event.target.name) {
    case "nombre":
      result = validaNom();
      if (result) {
        console.log("buennombre");
        informe.value = formulario.nombre.value + " Es un nombre válido";
        informe.style.color = "green";
        formulario.nombre.style.border = "solid 1px green";
      } else {
        console.log("malnombre");
        informe.value = formulario.nombre.value + " NO es un nombre válido";
        informe.style.color = "red";
        formulario.nombre.style.border = "solid 1px red";
      }
      break;
    case "telef":
      result = validaTelf();
      if (result) {
        informe.value = formulario.telef.value + " Es un telefono válido";
        informe.style.color = "green";
        formulario.telef.style.border = "solid 1px green";
      } else {
        informe.value = formulario.telef.value + " NO es un telefono válido";
        informe.style.color = "red";
        formulario.telef.style.border = "solid 1px red";
      }
      break;
    case "dia":
    case "mes":
    case "ano":
      result = validaDate();
      if (result) {
        informe.value = "El usuario es mayor de edad";
        informe.style.color = "green";
        formulario.dia.style.border = "solid 1px green";
        formulario.mes.style.border = "solid 1px green";
        formulario.ano.style.border = "solid 1px green";
      } else {
        informe.value = "La edad no corresponde a mayor de edad";
        informe.style.color = "red";
        formulario.dia.style.border = "solid 1px red";
        formulario.mes.style.border = "solid 1px red";
        formulario.ano.style.border = "solid 1px red";
      }
      break;
    case "correo":
      result = validaMail();
      if (result) {
        informe.value = formulario.telef.value + " Es un correo válido válido";
        informe.style.color = "green";
        formulario.telef.style.border = "solid 1px green";
      } else {
        informe.value = formulario.telef.value + " NO es un correo válido";
        informe.style.color = "red";
        formulario.telef.style.border = "solid 1px red";
      }
      break;
    case "identif":
      result = validaDNI();
      if (result) {
        informe.value =
          formulario.identif.value + " Es un DNI o NIE válido válido";
        informe.style.color = "green";
        formulario.identif.style.border = "solid 1px green";
      } else {
        informe.value = formulario.identif.value + " NO es un DNI o NIE válido";
        informe.style.color = "red";
        formulario.identif.style.border = "solid 1px red";
      }
      break;
  }
};

limpiar.onclick = () => {
  if (window.confirm("¿Seguro que quieres borrar los datos?")) {
    formulario.nombre.value = "";
    formulario.telef.value = "";
    formulario.dia.value = "";
    formulario.mes.value = "";
    formulario.ano.value = "";
    formulario.correo.value = "";
    formulario.identif.value = "";
    formulario.condiciones.checked = false;
    formulario.nombre.style.border = "solid 1px black";
    formulario.telef.style.border = "solid 1px black";
    formulario.dia.style.border = "solid 1px black";
    formulario.mes.style.border = "solid 1px black";
    formulario.ano.style.border = "solid 1px black";
    formulario.correo.style.border = "solid 1px black";
    formulario.identif.style.border = "solid 1px black";
  }
};

guardar.onclick = () => {
  document.cookie = "Nombre=" + formulario.nombre.value;
  document.cookie = "Telefono=" + formulario.telef.value;
  document.cookie = "Dia=" + formulario.dia.value;
  document.cookie = "Mes=" + formulario.mes.value;
  document.cookie = "Año=" + formulario.ano.value;
  document.cookie = "Correo=" + formulario.correo.value;
  document.cookie = "DNI=" + formulario.identif.value;
};

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}

recuperar.onclick = () => {
  formulario.nombre.value = getCookie("Nombre");
  formulario.telef.value = getCookie("Telefono");
  formulario.dia.value = getCookie("Dia");
  formulario.mes.value = getCookie("Mes");
  formulario.ano.value = getCookie("Año");
  formulario.correo.value = getCookie("Correo");
  formulario.identif.value = getCookie("DNI");
};

const listeners = [
  formulario.nombre,
  formulario.telef,
  formulario.dia,
  formulario.mes,
  formulario.ano,
  formulario.correo,
  formulario.identif,
];

for (const listener of listeners) listener.addEventListener("change", queFalta);
