const mostra6 = document.getElementById("mostra6");
const btn6 = document.getElementById("btn_ejer6");
const limpiar = document.getElementById("btn_limpiar6");
const tabla = document.getElementById("mostramenu");
let primeros = ["Ensalada", "Sopa", "Escalivada", "Paella", "Macarrones"];
let segundos = ["Entrecot", "Pescado", "Estofado", "Canelones", "Hamburguesa"];
let postres = ["Pastel", "Yogurt", "Manzana", "Helado", "Na de na"];
let dias = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

btn6.onclick = () => {
  let row = document.createElement("tr");
  let line = document.createElement("th");
  row.appendChild(line);
  line = document.createElement("th");
  line.appendChild(document.createTextNode("Primero"));
  row.appendChild(line);
  line = document.createElement("th");
  line.appendChild(document.createTextNode("Segundo"));
  row.appendChild(line);
  line = document.createElement("th");
  line.appendChild(document.createTextNode("Postre"));
  row.appendChild(line);
  tabla.appendChild(row);
  for (let i = 0; i < 5; i++) {
    row = document.createElement("tr");
    line = document.createElement("th");
    line.appendChild(document.createTextNode(dias[i]));
    row.appendChild(line);
    line = document.createElement("td");
    line.appendChild(document.createTextNode(primeros[i]));
    row.appendChild(line);
    line = document.createElement("td");
    line.appendChild(document.createTextNode(segundos[i]));
    row.appendChild(line);
    line = document.createElement("td");
    line.appendChild(document.createTextNode(postres[i]));
    row.appendChild(line);
    tabla.appendChild(row);
  }
  document.querySelectorAll("th").forEach((e) => {
    e.style.border = "solid 2px black";
  });
  document.querySelectorAll("td").forEach((e) => {
    e.style.border = "solid 1px black";
  });
};
