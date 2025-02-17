//Heredar una clase exportada
import { Cliente } from "./cliente.js"; //importamos la clase Cliente para crear una sub clase o clase heredada

export class Empresa extends Cliente {
  constructor(nombre, ahorro, categoria) {
    super(nombre, ahorro); //palabra clave para acceder al constructor de la clase padre, no necesitamos más en elas propiedades ya definidas en el padre
    this.categoria = categoria;
  }
  mostrarInformación() {
    return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro} - Categoria ${this.categoria}`;
  }
}
