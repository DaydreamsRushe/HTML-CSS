import { btn1, obtenerTexto } from "./texto.js";
import { cargarJsonBtn, obtenerDatos as obtenerJson } from "./empleado.js";
import {
  cargarJsonArrayBtn,
  obtenerDatos as obtenerJsonArray,
} from "./empleados.js";
import {
  cargarJsonPorid,
  obtenerDatos as obtenerPorId,
} from "./empleadosPorid.js";
import { btnPicsum, obtenerDatos as obtenerPicsum } from "./picsum.js";
import { btnRandomUser, obtenerDatos as obtenerRandom } from "./randomuser.js";

btn1.addEventListener("click", obtenerTexto);
cargarJsonBtn.addEventListener("click", obtenerJson);
cargarJsonArrayBtn.addEventListener("click", obtenerJsonArray);
cargarJsonPorid.addEventListener("click", obtenerPorId(3));
btnPicsum.addEventListener("click", obtenerPicsum);
btnRandomUser.addEventListener("click", obtenerRandom);
