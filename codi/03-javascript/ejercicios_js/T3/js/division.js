let resultado2;
const div = document.querySelector("#dividendo");
const mostra2 = document.querySelector("#mostra2");
const btn2 = document.querySelector("#btn_ejer2");
const borrar2 = document.querySelector("#btn_limpiar2");

const division = () => {
  let n = div.value;
  console.log(typeof n);
  n = Number(n.replace(",", "."));
  if (isNaN(n) || n == "") {
    resultado2 = "No me estas dando un numero";
  } else {
    const solucion = respuesta();
    n == solucion
      ? (resultado2 = `<div class="alert alert-success">El valor introducido es la solucion de 144/12 concretamente el ${n}<br/></div>`)
      : (resultado2 = `<div class="alert alert-success">El valor introducido no es la solucion de 144/12, cenutrio. Concretamente el ${n}<br/></div>`);
  }
  console.log(typeof n);
  mostra2.innerHTML = resultado2;
  div.value = "";
};

const borrando2 = () => {
  div.value = "";
  mostra2.innerHTML = "";
};

function respuesta() {
  return 144 / 12;
}

btn2.onclick = division;
borrar2.onclick = borrando2;
