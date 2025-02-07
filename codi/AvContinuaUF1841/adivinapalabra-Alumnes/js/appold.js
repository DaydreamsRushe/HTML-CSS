const letra = document.querySelector(".lletra");
const espacios = document.querySelector(".inputs");
const displayPista = document.querySelector(".pista > span");
const displayRestantes = document.querySelector(".restantes > span");
const displayErrores = document.querySelector(".letrasErroneas > span");
const displayFinal = document.querySelector(".mostra");
const btn = document.querySelector(".reset-btn");
const btn_contrast = document.getElementById("contrast");
const btn_fonUp = document.getElementById("fontUp");
const btn_fonDown = document.getElementById("fontDown");

let intentos;
let aciertos = 0;
let usadas = new Array();
let win = false;
let lost = false;

letra.readOnly = true; //el input oculto solo puede leer, no escribirse en el

if (palabra.length <= 4) {
  // si es una palabra corta solo dejamos 6 intentos
  intentos = 6;
} else {
  intentos = 8;
}
displayPista.innerHTML = pista;
displayRestantes.innerHTML = intentos;

for (let i = 0; i < palabra.length; i++) {
  espacios.innerHTML = espacios.innerHTML + '<input type="text">';
  console.log(espacios.innerHTML);
}

for (const ins of document.querySelectorAll(".inputs > input")) {
  //desactivamos los campos, solo queremos que sean para contener las letras de la palabra
  ins.disabled = true;
}

const adivina = () => {
  location.reload();
};

const contrastChange = () => {
  document.querySelector("body").classList.toggle("day");
  document.querySelector("main h1").classList.toggle("text-day");
  let texts = document.querySelectorAll("p");

  texts.forEach((paf) => {
    paf.classList.toggle("text-day");
  });
};

const juega = (e) => {
  if (
    e.key.match("^[ñÑçÇA-Za-z]{1}$") &&
    !lost &&
    !win &&
    !usadas.includes(e.key)
  ) {
    //el codigo jugara si la tecla es una letra, si aun se puede jugar y si la tecla no se ha usado previamente
    console.log(e.key);
    usadas.push(e.key);
    let j = 0;
    let t = false;
    while (palabra.indexOf(e.key, j) != -1) {
      //saber si se ha acertado
      console.log(palabra.indexOf(e.key, j));
      espacios.children[palabra.indexOf(e.key, j)].value = e.key;
      t = true;
      aciertos += 1;
      j = palabra.indexOf(e.key, j) + 1;
      if (aciertos == palabra.length) win = true;
    }
    if (!t) {
      //no se ha acertado
      intentos -= 1;
      if (displayErrores.innerHTML != "") displayErrores.innerHTML += ",";
      displayErrores.innerHTML += e.key; //presentamos la letra ya usada
      if (intentos == 0) {
        lost = true;
      }
      displayRestantes.innerHTML = intentos;
    }
  }
  if (win) {
    let ran = Math.floor(Math.random() * 6);
    displayRestantes.innerHTML = "Haz click en Volver a empezar";
    displayErrores.innerHTML = "Has ganado";
    displayFinal.innerHTML = msg[ran];
    displayFinal.style.color = "green";
  }
  if (lost) {
    let ran = Math.floor(Math.random() * 6);
    displayErrores.innerHTML = "No tienes mas intentos";
    displayFinal.innerHTML = msgError[ran];
    displayFinal.style.color = "red";
  }
};
console.log(palabra);

addEventListener("keyup", (e) => {
  if(e.key.match("^[ñÑçÇA-Za-z]{1}$")){
    letra.focus();
  letra.value = "";
  }else if(e.key == "ArrowUp"){

  }else if(e.key == "ArrowDown"){
    
  }

  
});

letra.onkeyup = juega;
btn.onclick = adivina;
btn_contrast.onclick = contrastChange;
