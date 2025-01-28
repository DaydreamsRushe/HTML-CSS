let resultado3;
const precio = document.querySelector("#precio");
const iva = document.querySelector("#iva");
const mostra3 = document.querySelector("#mostra3");
const btn3 = document.querySelector("#btn_ejer3");
const borrar3 = document.querySelector("#btn_limpiar3");

const nuevoprecio = () => {
  let p = Number.parseFloat(precio.value);
  console.log(typeof p);
  let i = Number.parseFloat(iva.value);
  console.log(typeof i);
  if (isNaN(p) || isNaN(i)) {
    resultado3 =
      "A ver ninio, tenemos un problema contigo. ¿Has leido lo que te he pedido?";
  } else {
    let solucion = (p / 100) * i + p;
    resultado3 = `<div class="alert alert-success">El precio ${p} mas su iva de  ${i}% es en total unos ${solucion}€<br/></div>`;
  }
  mostra3.innerHTML = resultado3;
};

const borrando3 = () => {
  precio.value = "";
  iva.value = "";
  mostra3.innerHTML = "";
};

btn3.onclick = nuevoprecio;
borrar3.onclick = borrando3;
