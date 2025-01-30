const formulario = document.firstContact;
const informe = document.getElementById("informe");
const limpiar = document.getElementById("btn_limpiar");

formulario.addEventListener("submit", (e) => {
  const nom = validaNom();
  const telf = validaTelf();
  const date = validaDate();
  const email = validaMail();
  const dni = validaDNI();
  const cond = formulario.condiciones.checked;

  if (nom && telf && date && email && dni) {
    if (!cond) {
      e.preventDefault();
      informe.value = "Necesitas aceptar las condiciones del formulario";
      informe.style.color = "red";
      return false;
    } else {
      formulario.submit();
    }
  } else {
    return false;
  }
});

const validaNom = () => {
  let naming = formulario.nombre.value;
  return naming.match(formulario.nombre.pattern);
};

const validaTelf = () => {
  let telephon = formulario.telef.value;
  return telephon.match(formulario.telephon.pattern);
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
  return correo.match(formulario.correo.pattern);
};

const validaDNI = () => {
  let rdni = formulario.identif.value;
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
        formulario.informe.valor =
          formulario.nombre.valor + "Es un nombre válido";
        formulario.informe.style.color = "green";
        formulario.nombre.style.border = "solid 1px green";
      } else {
        formulario.informe.valor =
          formulario.nombre.valor + "NO es un nombre válido";
        formulario.informe.style.color = "red";
        formulario.nombre.style.border = "solid 1px red";
      }
      break;
    case "telef":
      break;
    case "dia":
    case "mes":
    case "ano":
      break;
    case "correo":
      break;
    case "identif":
      break;
  }
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

for (const listener of listeners)
  listener.addEventListener("onchange", queFalta);
