let resultado4;
const factor1 = document.querySelector("#factor1");
const factor2 = document.querySelector("#factor2");
const operacion = document.querySelector("#operacion");
const mostra4 = document.querySelector("#mostra4");
const btn4 = document.querySelector("#btn_ejer4");
const borrar4 = document.querySelector("#btn_limpiar4");

const operando = () => {
  let f1 = Number(factor1.value);
  let f2 = Number(factor2.value);
  let op = operacion.value;
  if (isNaN(f1) || isNaN(f2)) {
    resultado4 = `<div class="alert alert-warning">si no metes numeros no pasa nada tontarro<br/></div>`;
  } else {
    switch (op) {
      case "suma":
        let sol = f1 + f2;
        resultado4 = `<div class="alert alert-success">El resultado de la suma es ${sol}<br/></div>`;
        break;
      case "resta":
        resultado4 = `<div class="alert alert-success">El resultado de la resta es ${
          f1 - f2
        }<br/></div>`;
        break;
      case "multiplicacion":
        resultado4 = `<div class="alert alert-success">El resultado de la multi es ${
          f1 * f2
        }<br/></div>`;
        break;
      case "division":
        resultado4 = `<div class="alert alert-success">El resultado de la div es ${
          f1 / f2
        }<br/></div>`;
        break;
      case "modulo":
        resultado4 = `<div class="alert alert-success">El resultado del modulo es ${
          f1 % f2
        }<br/></div>`;
        break;
      default:
        resultado4 = `<div class="alert alert-warning">Escoje algo o te mato<br/></div>`;
    }
  }
  mostra4.innerHTML = resultado4;
};

const borrando4 = () => {
  factor1.value = "";
  factor2.value = "";
  operacion.value = "";
  mostra4.innerHTML = "";
};

btn4.onclick = operando;
borrar4.onclick = borrando4;
