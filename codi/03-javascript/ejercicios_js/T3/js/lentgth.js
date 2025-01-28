const btn9 = document.querySelector("#btn9");
const long = document.querySelector("#long");
const mostra9 = document.querySelector("#mostra9");

const largura = () => {
  let text = long.value;
  let n = text.length;
  let cursiva = "<i>" + text + "</i><br/>";
  let negrita = "<strong>" + text + "</strong><br/>";
  let rojo = '<p style="color:red;">' + text + "</p><br/>";
  let grande = "<big>" + text + "</big><br/>";
  let resultado9 =
    `<div class="alert alert-success">tu frase tiene un largo de ${n} caracteres<br/>` +
    cursiva +
    negrita +
    rojo +
    grande +
    `</div>`;
  mostra9.innerHTML = resultado9;
};

btn9.onclick = largura;
