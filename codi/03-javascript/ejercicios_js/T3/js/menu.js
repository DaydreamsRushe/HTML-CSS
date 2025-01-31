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
  row.appendChild(document.createElement("th"));
  row.appendChild(
    document.createElement("th").appendChild(document.createTextNode("Primero"))
  );
  row.appendChild(
    document.createElement("th").appendChild(document.createTextNode("Segundo"))
  );
  row.appendChild(
    document.createElement("th").appendChild(document.createTextNode("Postre"))
  );
  tabla.appendChild(row);
};
