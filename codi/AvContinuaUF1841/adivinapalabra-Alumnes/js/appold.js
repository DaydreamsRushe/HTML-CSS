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

let intentos; //estos necesitan ser creados de forma global
let aciertos = 0;
let usadas = new Array();
let win = false;
let lost = false;
let textfont = 16;
let paddingtext = 0;
let palabra = "";
let pista = "";

const adivina = () => {
  rand = Math.floor(Math.random() * 19);
  palabra = listado[rand].palabra;
  pista = listado[rand].pista;
  aciertos = 0;
  usadas = new Array();
  win = false;
  lost = false;
  espacios.innerHTML = "";
  displayErrores.innerHTML = "";
  displayFinal.innerHTML = "";
  letra.readOnly = true; //el input oculto solo puede leer, no escribirse en el
  console.log(palabra);
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
  let letrita = e.key.toLowerCase();
  if (
    letrita.match("^[ñÑçÇA-Za-z]{1}$") &&
    !lost &&
    !win &&
    !usadas.includes(letrita)
  ) {
    //el codigo jugara si la tecla es una letra, si aun se puede jugar y si la tecla no se ha usado previamente
    console.log(letrita);
    usadas.push(letrita);
    let j = 0;
    let t = false;
    while (palabra.indexOf(letrita, j) != -1) {
      //saber si se ha acertado
      console.log(palabra.indexOf(letrita, j));
      espacios.children[palabra.indexOf(letrita, j)].value = letrita;
      t = true;
      aciertos += 1;
      j = palabra.indexOf(letrita, j) + 1;
      if (aciertos == palabra.length) win = true;
    }
    if (!t) {
      //no se ha acertado
      intentos -= 1;
      if (displayErrores.innerHTML != "") displayErrores.innerHTML += ",";
      displayErrores.innerHTML += letrita; //presentamos la letra ya usada
      if (intentos == 0) {
        lost = true;
      }
      displayRestantes.innerHTML = intentos;
    }
  }
  if (win) {
    let ran = Math.floor(Math.random() * 6);
    mensaje = [...msg];
    displayRestantes.innerHTML = "Haz click en Volver a empezar";
    displayErrores.innerHTML = "Has ganado";
    displayFinal.innerHTML = `${msg[ran].primero}${palabra}${msg[ran].segundo}`;
    displayFinal.style.color = "green";
  }
  if (lost) {
    let ran = Math.floor(Math.random() * 6);
    displayErrores.innerHTML = "No tienes mas intentos";
    displayFinal.innerHTML = `${msgError[ran].primero}${palabra}${msgError[ran].segundo}`;
    displayFinal.style.color = "red";
  }
};

const increaseText = () => {
  //aumentar el tamaño del texto
  let texts = document.querySelectorAll("p");
  if (textfont < 30) {
    textfont += 1;
    paddingtext += 1;
    texts.forEach((paf) => {
      paf.style.fontSize = `${textfont}px`;
      paf.style.padding = `${paddingtext}px 0`;
    });
  }
};

const decreaseText = () => {
  //disminuir el tamaño del texto
  let texts = document.querySelectorAll(".detalles > p");
  if (textfont > 10) {
    textfont -= 1;
    paddingtext -= 1;
    texts.forEach((paf) => {
      paf.style.fontSize = `${textfont}px`;
      paf.style.padding = `${paddingtext}px 0`;
    });
  }
};

addEventListener("keyup", (e) => {
  //Las respuestas sobre el teclado responden si es una sola letra o las flechas de arriba y abajo
  console.log(`${msg[0].valueOf()}`);
  console.log(e.key);
  if (e.key.match("^[ñÑçÇA-Za-z]{1}$")) {
    letra.focus();
    letra.value = "";
  } else if (e.key == "ArrowUp") {
    increaseText();
  } else if (e.key == "ArrowDown") {
    decreaseText();
  }
});

adivina(); //al cargar la pagina se iniciara una nueva palabra

letra.onkeyup = juega;
btn.onclick = adivina;
btn_contrast.onclick = contrastChange;
btn_fonDown.onclick = decreaseText;
btn_fonUp.onclick = increaseText;
