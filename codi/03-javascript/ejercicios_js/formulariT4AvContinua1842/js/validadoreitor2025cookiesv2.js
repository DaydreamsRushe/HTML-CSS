const error = document.querySelector("#error");
const m=[document.querySelector("#mostra1"),document.querySelector("#mostra2"),document.querySelector("#mostra3"),document.querySelector("#mostra4"),document.querySelector("#mostra5"),document.querySelector("#mostra6")]

const formu = document.firstContact;
const ptremail = /^[a-z0-9_-]+([.][a-z0-9_-]+)*@[a-z0-9_]+([.][a-z0-9_]+)*[.][a-z]{2,9}$/;
const ptrasunto = /^[A-Za-zÀ-ÿ-\u00f1\u00d1\s]{5,40}$/;
const pdni = /^[XYZ]?\d{5,8}[A-Z]{1}$/;
const ptrcontent = /[A-Za-zÀ-ÿ-\u00f1\u00d1\s]{10,250}$/;
const form=[formu.email,formu.asunto,formu.miedad,formu.dni,formu.contenido,formu.acepto];

formu.addEventListener("submit", (e) => {
	const mymail = mail(), myasunto = asunt(),mycontent = content(),mydni = cDni(),myedad = edad(),acepto = vCheck();
	if (!mymail || !myasunto || !mycontent || !mydni || !myedad || !acepto) {
		e.preventDefault();
		error.innerHTML ="ERRORUM   No se ha podido enviar el formulario. Por favor, revisa que todos los campos estén rellenados correctamente.";
		error.style.color = "#FF0000";
		return false;
	} else {
		formu.submit();
		return true; 
	}
});

const avisoReset = () => {
	const reset = confirm(
		"ATENCIÓN!!!!!!!\nSi confirmas, se borraran todos los datos del formulario"
	);
	reset ? location.reload(true) : false;
};

const mail = () => {
	let correo = form[0].value;
	if (!correo.match(ptremail)) return false; return true;
};

const asunt = () => {
	let asunto = form[1].value;
	if (!asunto.match(ptrasunto)) return false; return true;
};
const edad = () => {
	let fechaNacimiento = form[2].value,fechaNace = new Date(fechaNacimiento), fechaActual = new Date(), miEdad = Math.floor(
		(fechaActual - fechaNace) / (1000 * 60 * 60 * 24) / 365
	);
	if (miEdad >= 18 && miEdad <= 100) return true; return false;
};

const cDni = () => {
	let rdni = form[3].value,numero, let1,resul = rdni.match(pdni),letra = "TRWAGMYFPDXBNJZSQVHLCKE";
    	rdni = rdni.toUpperCase();
	if (resul) {
		numero = rdni.substr(0, rdni.length - 1);
		numero = numero.replace("X", 0);
		numero = numero.replace("Y", 1);
		numero = numero.replace("Z", 2);
		let1 = rdni.substr(rdni.length - 1, 1);
		numero = numero % 23;
		letra = letra.substring(numero, numero + 1);
		if (letra !== let1) return false; return true;
	} else {
		return false;
	}
};
const content = () => {
	let content = form[4].value;
	if (!content.match(ptrcontent)) return false; return true;
};
const vCheck = () => {
	let aceptar = form[5].checked;
	if (!aceptar) return false; return true;
};

const pasaValor = (event) => {
	let result;
	switch (event.target.name) {
		case "email":
			result = mail();
			if (result) {
				m[0].innerHTML = ". Email correcto";
				m[0].style.color = "#068B3E";
				form[0].style.border = "solid 2px green";
			} else {
				m[0].innerHTML = ". Email no válido. se esperaba una (@) y un (.)";
				m[0].style.color = "#FF0000";
				form[0].style.border = "solid 2px red";
			}
			break;
		case "asunto":
			result = asunt();
			if (result) {
				m[1].innerHTML = ". Asunto dentro de parámetros";
				m[1].style.color = "#068B3E";
				form[1].style.border = "solid 2px green";
			} else {
				m[1].innerHTML = ". Asunto no válido. SE SIENTEEEEE";
				m[1].style.color = "#FF0000";
				form[1].style.border = "solid 2px red";
			}
			break;
		case "contenido":
			result = content();
			if (result) {
				m[4].innerHTML = ". Contenido válido";
				m[4].style.color = "#068B3E";
				form[4].style.border = "solid 2px green";
			} else {
				m[4].innerHTML = ". Contenido no válido. SE SIENTEEEEE";
				m[4].style.color = "#FF0000";
				form[4].style.border = "solid 2px red";
			}
			break;
		case "miedad":
			result = edad();
			if (result) {
				m[2].innerHTML = "Tienes más de 18 años";
				m[2].style.color = "#068B3E";
				form[2].style.border = "solid 2px green";
			} else {
				m[2].innerHTML = "No puedes registrarte porque tienes menos de 18 años, o fecha incorrecta";
				m[2].style.color = "#FF0000";
				form[2].style.border = "solid 2px red";
			}
			break;
		case "dni":
			result = cDni();
			if (result) {
				m[3].innerHTML = "DNI válido";
				m[3].style.color = "#068B3E";
				form[3].style.border = "solid 2px green";
			} else {
				m[3].innerHTML = "DNI o NIE no válido";
				m[3].style.color = "#FF0000";
				form[3].style.border = "solid 2px red";
			}
			break;
		case "acepto":
			result = vCheck();
			if (result) {
				m[5].innerHTML = " Correcto";
				m[5].style.color = "#068B3E";
                form[5].style.border = "solid 2px green";
			} else {
				m[5].innerHTML = "Incorrecto. No válido";
				m[5].style.color = "#FF0000";
                form[5].style.border = "solid 2px red";
			}
			break;
	}
};

const listeners = [formu.email,formu.asunto,formu.contenido,formu.miedad,formu.dni,formu.acepto,];
formu.acepto.addEventListener("click", pasaValor);

for (const listener of listeners)
	listener.addEventListener("keyup", pasaValor);

formu.borrar.addEventListener("click", avisoReset);
/* Cookies*/
const setCookie=(cname, cvalue, exdays)=>{
	let d = new Date();
	d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
	let expires = "expires=" + d.toGMTString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
  }
const getCookie=(cname)=>{
	let name = cname + "=";
	let ca = document.cookie.split(";");
	for (let i = 0; i < ca.length; i++) {
	  let c = ca[i].trim();
	  if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	return "";
  };

const btnSave = document.querySelector("#guardar");
btnSave.onclick = ()=> {
	setCookie("email", formu.email.value, 1 / 24);
	setCookie("asunto", formu.asunto.value, 1 / 24);
	setCookie("miedad", formu.miedad.value, 1 / 24);
	setCookie("dni", formu.dni.value, 1 / 24);
	setCookie("contenido", formu.contenido.value, 1 / 24);
  };

const btnMuestra = document.querySelector("#mostrar");
btnMuestra.onclick = ()=>{
	formu.email.value = getCookie("email");
	formu.asunto.value = getCookie("asunto");
    formu.miedad.value = getCookie("miedad");
	formu.dni.value = getCookie("dni");
    formu.contenido.value = getCookie("contenido");
};

/* borrar cookies
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; borrado de una cookie
*/

/*
campos dia, mes, año para fecha
const d = formu.dia;
const mes = formu.mes;
const a = formu.a;
const edad=()=>{
    let dia = d.value,
      mes = mes.value,
      ano = a.value;
    let fechaNace= new Date(ano, mes - 1, dia);
    console.log(fechaNace);
    let fechaActual = new Date();
	let miEdad = Math.floor(
		(fechaActual - fechaNace)  / (1000 * 60 * 60 * 24) / 365 
	);
	if (miEdad >= 18 && miEdad <= 100) return true;
	return false;
}; */

