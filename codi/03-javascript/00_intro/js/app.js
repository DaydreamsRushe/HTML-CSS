alert("PopUp desde un alert escrito desde un archivo js externo");

document.querySelector("#mostrar").innerHTML =
  '<h2>Texto excrito dentro de la id="mostrar" desde un js externo</h2>';
document.getElementById("mostrar2").innerHTML =
  '<h3 style="font-family:Arial,sans-serif">Texto excrito dentro de la id="mostrar2" desde un js externo</h3>';

const nom = function nombre() {
  var nombre = prompt("introduce tu nombre");
  alert(nombre + " es mi nombre");
  alert(`${nombre} es mi nombre`);
  console.log(nombre + " si que es el nombre pesaoooooo");
  console.log(`${nombre} si que es el nombre pesaoooooo`);
  document.querySelector(
    "#mostrar3"
  ).innerHTML = `<p> pesao eres ${nombre}</p>`;
};

/* let btn = document.querySelector("#btn"); */
const btn = document.querySelector("#btn");
btn.onclick = nom;
