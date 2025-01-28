const btn8 = document.querySelector("#btn_abrete8");
const btnc8 = document.querySelector("#btn_cierrate8");
let vebbbbbtannna;

const abre_ventana = () => {
  vebbbbbtannna = window.open("", "vebbbbbtannna", "width=200,height=100");
  vebbbbbtannna.document.write(
    "<p>Abemus ventana. I am 200px wide and 100px tall!</p>"
  );
  console.log(typeof vebbbbbtannna);
};

const cierra_ventana = () => {
  vebbbbbtannna.close();
  console.log(typeof vebbbbbtannna);
};

btn8.onclick = abre_ventana;
btnc8.onclick = cierra_ventana;
