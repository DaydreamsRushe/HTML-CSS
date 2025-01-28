const parrafos = document.getElementsByTagName("p");
const clase = document.getElementsByClassName("pepe2");
const principal = document.getElementById("principal");
const pid = document.querySelector("#principal p#p1");

const ejecutar = () => {
  document.getElementById("principal").onclick = adeu;

  for (let i = 0; i < 8; i++) {
    parrafos[i].onclick = saludo;
  }
  parrafos[2].onclick = bgcolor;

  for (let i = 0; i < 2; i++) {
    clase[i].onmouseover = color;
  }
  pid.onclick = paraId;
  document.querySelector("button").onmouseover = foco;
  document.querySelector("button").onkeyup = detectar_tecla;
};
const saludo = () => {
  alert("sup");
};

const adeu = () => {
  alert("ADEUUU");
};

const paraId = () => {
  alert("Has clickado");
};

const foco = () => {
  document.querySelector("button").focus();
};

const color = () => {
  document.querySelector("#principal").style.backgroundColor = "red";
};

const bgcolor = () => {};

const detectar_tecla = (e) => {
  e.keyCode == 13
    ? alert(`Has presionado la tecla "ENter"`)
    : alert(`no has presionado la tecla "ENter"`);
};

window.onload = ejecutar;
/* document.getElementById("principal").onclick = adeu;
 */
