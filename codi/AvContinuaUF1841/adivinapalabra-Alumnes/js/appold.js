
const rand = Math.floor(Math.random()*19) 
const palabra = listado[rand].palabra;
const pista = listado[rand].pista;
const letra = document.querySelector(".lletra");
const espacios = document.querySelector(".inputs");
const displayPista =document.querySelector(".pista > span");
const displayRestantes = document.querySelector(".restantes > span");
const displayErrores = document.querySelector(".letrasErroneas > span");
const btn = document.querySelector(".reset-btn");
let intentos;
let win = false;
let lost = false;

if(palabra.length <= 4) {
    intentos=6;
} else{
    intentos =8;
}
displayPista.innerHTML = pista;
displayRestantes.innerHTML = intentos;

for (let i = 0; i< palabra.length; i++){
    espacios.innerHTML = espacios.innerHTML + '<input type="text">'
    console.log(espacios.innerHTML)
}

const adivina =()=>{
    location.reload();
}

const juega = (e) =>{
    if(e.key.match("[a-zA-Z]") && !lost && !win){//aun quedan intentos y no se ha perdido o ganado
        console.log(e.key);
        let j =0;
        let t = false;
        while(palabra.indexOf(e.key,j) != -1){//saber si se ha acertado
            console.log(palabra.indexOf(e.key,j));
            espacios.children[palabra.indexOf(e.key,j)].value = e.key;
            t= true; 
            j = palabra.indexOf(e.key,j) + 1;
        }
        if(!t){//no se ha acertado
            intentos=-1;
            if(intentos==0){
                lost=true;
            }
            displayRestantes.innerHTML = intentos;

        }
    }else if(e.key.match("[a-zA-Z]") && intentos > 0)
    letra.value = "";
}
console.log(palabra);
letra.onkeyup = juega;
btn.onclick = adivina;