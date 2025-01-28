let resultado6;
const windata = document.querySelector("#windata");
const mostra6 = document.querySelector("#mostra6");
const borrar6 = document.querySelector("#btn_limpiar6");
const amplada = window.screen.width;
const altura = window.screen.height;
const alturautil = window.screen.availHeight;
const ampladautil = window.screen.availWidth;
const profunditatColor = window.screen.colorDepth;

const mostraData = () => {
  let text =
    "El ancho de la pantalla es: " +
    amplada +
    "<br/>" +
    "La altura de la pantalla es: " +
    altura +
    "<br/>" +
    "La altura util de la pantalla es: " +
    alturautil +
    "<br/>" +
    "La anchura util de la pantalla es: " +
    ampladautil +
    "<br/>" +
    "La profundidad de color util de la pantalla es: " +
    profunditatColor +
    "<br/>" +
    "La diagonal util de la pantalla es: " +
    Math.sqrt(Math.pow(amplada, 2) + Math.pow(altura, 2)) +
    "<br/>";

  resultado6 = `<div class="alert alert-success">` + text + `</div>`;
  mostra6.innerHTML = resultado6;
};

const borrando6 = () => {
  mostra6.innerHTML = "";
};

windata.onclick = mostraData;
borrar6.onclick = borrando6;
