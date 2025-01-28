let result, resultado;
const num = document.querySelector("#numero");
const mostra = document.querySelector("#mostra1");
const btn1 = document.querySelector("#btn_ejer1");
const borrar = document.querySelector("#btn_limpiar1");

const parimpar = () => {
  let n = num.value;
  console.log(typeof n);
  n = Number(n.replace(",", "."));
  if (isNaN(n) || n == "") {
    resultado = `<div class="alert alert-danger">no me estas dando un numero<br/></div>`;
  } else {
    result = n % 2;
    result !== 0
      ? (resultado = `<div class="alert alert-success">El valor introducido es un numero impar, concretamente el ${n}<br/></div>`)
      : (resultado = `<div class="alert alert-success">El valor introducido es un numero par, concretamente el ${n}<br/></div>`);
  }

  console.log(typeof n);
  mostra.innerHTML = resultado;
  num.value = "";
};

const borrando = () => {
  num.value = "";
  mostra.innerHTML = "";
};
btn1.onclick = parimpar;
borrar.onclick = borrando;
