let nombre,
  error = "",
  saludo,
  bienvenido,
  min,
  max,
  cont = 0,
  aleatorio,
  numero;
//   recogida nombre

do {
  nombre = prompt(`${error} Eres bienvenido. Indica tu nombre para entrar:`);
  error = "Nombre no válido, vuelve a probar.";
  nombre = nombre.replace(/\s/g, "");
} while (Number(nombre) || nombre == "");

//presentación nombre y botón juego
saludo = `${nombre}, si quieres jugar con haz click en "Adivinar número"<br/>`;
bienvenido = document.getElementById("bienvenido");
bienvenido.innerHTML = `${saludo} <button onclick="jugar();" id="btn">Adivinar número</button>`;
//entrada datos y juego
error = "";
function jugar() {
  // número menor
  cont = 0;
  do {
    min = prompt(
      `${nombre} ${error}  Introduce un número entre 1 y 10 para crear tu número menor del rango`
    );
    min = min.replace(/\s/g, "");
    error = "Has introducido un dato no válido. ";
  } while (!Number(min >= 1 && min <= 10) || min == "");
  console.log(min);

  // número mayor
  error = "Perfecto, continuamos";
  do {
    max = prompt(
      `${nombre} ${error}  Introduce un número entre 30 y 40 para crear tu número menor del rango`
    );
    max = max.replace(/\s/g, "");
    error = "Has introducido un dato no válido. ";
  } while (!Number(max >= 30 && max <= 40) || max == "");
  console.log(max);
  error = 0;

  //calcular aleatorio
  min = Number(min);
  max = Number(max);
  aleatorio = Math.floor(Math.random() * (max + 1 - min)) + min;
  alert(aleatorio);

  while (cont < 5) {
    cont++;
    numero = parseInt(
      prompt(
        `${nombre}\nIntroduce tú número para adininar el pensado por mi, recuerda que ha de ser entre ${min} y ${max}. Este es tu intento n: ${cont}`
      )
    );
    if (numero >= min && numero <= max) {
      if (numero < aleatorio) {
        alert("Tú número es menor que  el pensado");
      } else if (numero > aleatorio) {
        alert("Tú número es mayor que  el pensado");
      } else {
        //acierto
        break;
      }
    } else {
      alert("Introduce un dato válido y dentro del rango");
    }
  }

  //gestión: con 5 intentos máximo dos posibilidades:
  // 1- dato válido y dentro rango
  //   1a n introducido < aleatorio  ->feedback
  //   1b n introducido > aleatorio  ->feedback
  //   1c n introducido == aleatorio->break;
  //   1d siempre sumo contador

  //2-dato no válido
  //  2a- feedback sumo contador

  //Output:
  //intentos agotados o acierto -> feedback y volver a jugar

  if (numero == aleatorio) {
    document.getElementById(
      "mostra"
    ).innerHTML = `Felicidades. Has acertado.<br/>El número es: 
      ${aleatorio} y has acertado en ${cont} intentos.<br/>`;
  } else {
    document.getElementById(
      "mostra"
    ).innerHTML = `Lo sentimos. No has acertado.<br/>El número es: ${aleatorio}.<br/>`;
  }
}
