const mostra = document.getElementById("mostra");
const bienvenido = document.getElementById("bienvenido");
const btn_contrast = document.getElementById("contrast");
const btn_fonUp = document.getElementById("fontUp");
const btn_fonDown = document.getElementById("fontDown");

let nombre,
  error = "",
  min,
  max,
  cont = 1,
  aleatorio,
  contrast = false,
  textfont = 16,
  paddingtext = 0;

//Primera fase: Preguntar por el nombre de usuario
const preguntaNombre = () => {
  mostra.innerHTML = ""; //reiniciamos lo que hemos puesto en caso de no estar vacio
  mostra.innerHTML = `<p class="text-day">Antes de empezar, por favor, dinos tu nombre</p><input type="text" id="nombre" name="nombre" class="form-control" placeholder="inputNombre" value="" pattern="^[A-ZÀ]{1}[a-zA-ZÀ-ÿ\u00f1\u00d1\s]{2,40}$"/> <br> <button type="button" name="btn_nombre" id="btn_nombre">Continuar</button>`;
  let btn_nombre = document.getElementById("btn_nombre");
  let naming = document.getElementById("nombre");
  if (sessionStorage.getItem("nombre"))
    // si tenemos un nombre guardado de la ultima partida lo recuperamos de la sessionStorage
    naming.value = sessionStorage.getItem("nombre");
  btn_nombre.onclick = () => {
    //Comprobar que sea un nombre valido antes de aceptarlo
    nombre = naming.value;
    if (nombre.match(naming.pattern)) {
      preguntaNumeros(nombre);
      bienvenido.innerHTML = "";
    } else {
      naming.value = "";
      btn_nombre.focus();
      bienvenido.style.color = "red";
      bienvenido.innerHTML =
        "Nombre no válido. Vuelve a probar teniendo en cuenta que no puedes introducir carácteres numéricos";
    }
  };
};

//Segunda fase: preguntar por el rango de numeros que desea el usuario
const preguntaNumeros = (naming) => {
  mostra.innerHTML = `<p class="text-day">Bienvenid@ ${naming}. El juego consiste en lo siguiente: Tendrás que indicarnos un numero del 1 al 10, después otro del 30 al 40 y en ese momnento el juego seleccionará de manera aleatoria otro dentro del rango comprendido entre las dos cifras que has introducido. Tendrás 5 intentos para adivinarlo</p>
  <p class="text-day" id="intro_min">Escribe un numero entre el 1 y el 10</p>
  <input
            type="text"
            id="min_number"
            name="min_number"
            class="min_number"
            value=""
          /> <br>
          <button id="continuar_min">Continuar</button>
          <div id="mostrar_min"></div>`;
  if (contrast) {
    //comprobamos que el contraste esta activado para ajustar el texto
    document.querySelectorAll("p")[0].classList.toggle("text-day");
    document.querySelectorAll("p")[1].classList.toggle("text-day");
  }
  let btn_min = document.getElementById("continuar_min");
  let minimal = document.getElementById("min_number");
  let mostrar_min = document.getElementById("mostrar_min");
  btn_min.onclick = () => {
    console.log(Number(minimal.value));
    console.log(isNaN(Number(minimal.value)));
    min = Number(minimal.value);

    //comprobamos que los datos introducidos son numeros dentro del rango indicado
    if (isNaN(min)) {
      mostrar_min.style.color = "red";
      mostrar_min.innerHTML = `Lo sentimos. Has introducido un dato no valido`;
    } else if (min < 1 || min > 10) {
      mostrar_min.style.color = "red";
      mostrar_min.innerHTML = `Lo sentimos. Has introducido numero fuera del rango. El numero debe ser entre 1 y 10`;
    } else {
      //en caso que el primer numero sea valido, generamos el siguiente input del juego
      mostrar_min.style.color = "orange";
      mostrar_min.innerHTML = `Tu primer numero es el ${min}`;
      btn_min.disabled = true;
      mostra.innerHTML += `<p class="text-day" id="intro_max">Escribe un numero entre el 30 y el 40</p>
      <input
            type="text"
            id="max_number"
            name="max_number"
            class="max_number"
            value=""
          /> <br>
          <button id="continuar_max">Continuar</button>
          <div id="mostrar_max"></div>`;
      if (contrast)
        //control de contraste
        document.getElementById("intro_max").classList.toggle("text-day");
      let btn_max = document.getElementById("continuar_max");
      let maximal = document.getElementById("max_number");
      let mostrar_max = document.getElementById("mostrar_max");
      btn_max.onclick = () => {
        //misma comprovación que el numero anterior
        max = Number(maximal.value);
        console.log(max);
        console.log(isNaN(Number(maximal.value)));
        if (isNaN(max)) {
          console.log("es nan");
          mostrar_max.style.color = "red";
          mostrar_max.innerHTML = `Lo sentimos. Has introducido un dato no valido`;
        } else if (max < 30 || max > 40) {
          console.log("fuera de rango");
          mostrar_max.style.color = "red";
          mostrar_max.innerHTML = `Lo sentimos. Has introducido numero fuera del rango. El numero debe ser entre 30 y 40`;
        } else {
          //si los dos numeros son correctos, esperamos 2 segundos para seguir a la siguiente pantalla
          mostrar_max.style.color = "orange";
          mostrar_max.innerHTML = `Tu segundo numero es el ${max}`;
          console.log(btn_max);
          btn_max.disabled = true;
          aleatorio = Math.floor(Math.random() * (max - min)) + min;
          setTimeout(adivinalo, 2000);
        }
      };
    }
  };
};

//Tercera fase: Crear el juego con los datos recojidos y dar 5 intentos para que el usuario adivine el numero aleatorio
const adivinalo = () => {
  console.log(aleatorio);
  mostra.innerHTML = `<p class="text-day">${nombre}, tus numeros son ${min} y ${max}. Adivina el número dentro de este rango que ha pensado el juego de manera aleatoria. Este es tu intento ${cont} de 5</p>
  <div id="num_opciones"></div><br>
  <div id="mostra_error"></div>`;
  if (contrast) document.querySelector("p").classList.toggle("text-day");
  let opciones = document.getElementById("num_opciones");
  let mostra_error = document.getElementById("mostra_error");

  //dentro de un nuevo <div>, creamos todos los botones que necesitamos para el juego
  for (i = min; i <= max; i++) {
    opciones.innerHTML += `<button type="button">${i}</button>`;
  }

  //Para cada boton, creamos un evento
  for (const opb of opciones.childNodes)
    opb.addEventListener("click", () => {
      mostra.firstChild.innerHTML = `${nombre}, tus numeros son ${min} y ${max}. Adivina el número dentro de este rango que ha pensado el juego de manera aleatoria.`;
      console.log(Number(opb.innerHTML));
      if (Number(opb.innerHTML) == aleatorio) {
        //caso en el que el usuario acierte el numero
        for (const opb2 of opciones.childNodes) opb2.disabled = true;
        mostra_error.style.color = "orange";
        mostra_error.innerHTML = `¡Enhorabuena ${nombre}! Has acertado el numero (${aleatorio}) en tu intento numero ${cont}`;
      } else {
        //caso en el que el usuario falle
        opb.disabled = true;
        cont++;
        mostra_error.style.color = "red";
        if (cont <= 5) {
          //si aun le quedan intentos al usuario se comprueba si el valor escojido es mayor o menor que el numero pensado aleatoriamente para dar una pista al usuario
          if (Number(opb.innerHTML) < aleatorio) {
            mostra_error.innerHTML = `Has elegido el ${opb.innerHTML}, tu número es menor que el pensado. Intento ${cont} de 5`;
          } else {
            mostra_error.innerHTML = `Has elegido el ${opb.innerHTML}, tu número es mayor que el pensado. Intento ${cont} de 5`;
          }
        } else {
          //si no le quedan intentos al usuario se les da el mensaje de GAME OVER
          for (const opb2 of opciones.childNodes) opb2.disabled = true;
          mostra_error.innerHTML = `Lo sentimos ${nombre}, has agotado tus intentos. El numero era ${aleatorio} ¡Suerte en tu proxima partida!`;
        }
      }

      //Tanto si gana como si pierde, al final del juego se le da la opción al usuario de volver a empezar con el nombre ya registrado o salir
      if (Number(opb.innerHTML) == aleatorio || cont > 5) {
        bienvenido.innerHTML = `<p class="text-day" id="vuelta">¿Te gustaria volver a jugar?</p></br>
        <div id="control_vuelta">
          <button type="button" id="volver">Reinicia</button>
          <button type="button" id="salir">Salir</button>
        </div>`;
        if (contrast) bienvenido.firstChild.classList.toggle("text-day");
        let btn_volver = document.getElementById("volver");
        let btn_salir = document.getElementById("salir");
        btn_volver.onclick = () => {
          //caso pra volver a jugar
          sessionStorage.setItem("nombre", nombre);
          location.reload();
        };
        btn_salir.onclick = () => {
          //caso para salir
          sessionStorage.removeItem("nombre");
          location.reload();
        };
      }
    });
};

const contrastChange = () => {
  document.querySelector("body").classList.toggle("day");
  let texts = document.querySelectorAll("p");

  texts.forEach((paf) => {
    paf.classList.toggle("text-day");
  });
  if (contrast) contrast = false;
  else contrast = true;
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
  let texts = document.querySelectorAll("p");
  if (textfont > 10) {
    textfont -= 1;
    paddingtext -= 1;
    texts.forEach((paf) => {
      paf.style.fontSize = `${textfont}px`;
      paf.style.padding = `${paddingtext}px 0`;
    });
  }
};

preguntaNombre();
btn_contrast.onclick = contrastChange;
btn_fonDown.onclick = decreaseText;
btn_fonUp.onclick = increaseText;
