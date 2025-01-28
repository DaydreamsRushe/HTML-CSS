const mostra1 = document.querySelector("#mostra1");
const btn1 = document.querySelector("#btn_ejer1");
const borrar1 = document.querySelector("#btn_limpiar1");
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const borrando = () => {
  mostra1.innerHTML = "";
};

btn1.onclick = () => {
  let fulltext = "";
  for (let i = 0; i < 12; i++) {
    fulltext += meses[i] + " ";
  }
  fulltext += "<br/>";
  let ordenada = ordenata(meses);
  for (let i = 0; i < 12; i++) {
    fulltext += ordenada[i] + " ";
  }
  fulltext += "<br/>";
  for (let i = 0; i < 12; i++) {
    fulltext += meses[i];
    if (i < 11) {
      fulltext += " - ";
    }
  }
  fulltext += "<br/>";
  for (let i = 11; i >= 0; i--) {
    fulltext += meses[i] + " ";
  }
  fulltext += "<br/>";
  for (let i = 0; i < 12; i++) {
    fulltext += meses[i];
    if (i < 11) {
      fulltext += " @ ";
    }
  }
  mostra1.innerHTML = fulltext;
};

function ordenata(mesesh) {
  /* let ordenada = mesesh; */
  let ordenada = new Array();
  mesesh.forEach((o) => {
    ordenada.push(o);
  });
  let temp;
  for (let i = 0; i < 11; i++) {
    for (let j = i + 1; j < 12; j++) {
      let t = 0;
      while (ordenada[i][t] == ordenada[j][t]) {
        t++;
      }
      if (ordenada[i][t] > ordenada[j][t]) {
        temp = ordenada[i];
        ordenada[i] = ordenada[j];
        ordenada[j] = temp;
      }
    }
  }
  return ordenada;
}

borrar1.onclick = borrando;
