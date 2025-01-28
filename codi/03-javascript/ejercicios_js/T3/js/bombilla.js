const btn10 = document.querySelector("#btn10");
const imagen = document.querySelector("#bombilia");
const apagada = document.querySelector("#bombilia").src;

const encende = () => {
  if (imagen.src == apagada) {
    imagen.src = "img/encendida.gif";
  } else {
    imagen.src = "img/apagada.gif";
  }
};

btn10.onclick = encende;
