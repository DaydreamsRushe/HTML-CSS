const btn7 = document.querySelector("#btn_color7");
const coloresh = document.querySelector("#backcolor");
const mostra7 = document.querySelector("#mostra7");

const cambiacolor = () => {
  let col = coloresh.value;
  if (col != "") {
    mostra7.style.backgroundColor = col;
  }
};

btn7.onclick = cambiacolor;
