let resultado5;
let text = "";
let cuenta = 0;
const iteraciones = document.querySelector("#impresiones");
const mostra5 = document.querySelector("#mostra5");
const btn5 = document.querySelector("#btn_ejer5");
const borrar5 = document.querySelector("#btn_limpiar5");

const impresion = () => {
  console.log(cuenta);
  console.log(text);
  let i = Number(iteraciones.value);
  for (let n = 0; n < i; n++) {
    cuenta++;
    text = text + "Imprimiendo el producto " + cuenta + "<br/>";
  }
  console.log(text);
  resultado5 = `<div class="alert alert-success">` + text + `</div>`;
  mostra5.innerHTML = resultado5;
};

const borrando5 = () => {
  text = "";
  cuenta = 0;
  mostra5.innerHTML = "";
};

btn5.onclick = impresion;
borrar5.onclick = borrando5;
