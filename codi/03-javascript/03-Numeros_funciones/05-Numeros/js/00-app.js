// En consola los números se muestran de diferente color cuando es número que cuando es un string que representa un número

const numero6 = 20;
const numero7 = "20";
console.log(numero6);
console.log(numero7);
// Crear Números

const numero1 = 30;
const numero2 = 20;
const numero3 = 20.2;
const numero4 = 0.10213;
const numero5 = -3;

// Otra forma de crear número

const numero8 = new Number(20);
console.log(numero8);

// Operaciones
let resultado;

// Operadores, hay para realziar sumas, multiplicaciones, restas y comparar si un número es mayor a otro

// Suma
resultado = numero1 + numero2;
console.log(resultado);
// Resta
resultado = numero1 - numero2;
console.log(resultado);
// Mult
resultado = numero1 * numero2;
console.log(resultado);
// Division
resultado = numero1 / numero2;
console.log(resultado);
// Modulo
resultado = numero1 % numero2;
console.log("modulo " + resultado);

// El Objeto Math es parte de la ventana global de JavaScript, tiene una serie de operaciones que pueden ser muy útiles y algunas actuan de forma algo extraña, asi que vamos a verlas.

// Pi
resultado = Math.PI;
// redondeo
resultado = Math.round(2.5);
console.log(resultado);
// redondeo abajo o arriba (ceil o floor )
resultado = Math.ceil(2.2);
console.log(resultado);
// Raiz cuadrada
resultado = Math.sqrt(144);
console.log(resultado);
// Abssoluto
resultado = Math.abs(-300);
console.log(resultado);
// Potencia
resultado = Math.pow(8, 3);
console.log(resultado);
// Minimo
resultado = Math.min(3, 5, 1, 2, 9, 4, 2, -3);
console.log(resultado);
// Max
resultado = Math.max(4, 1, 21, 4, 15, 5, 11, 5);
console.log(resultado);
// Aleatorio
resultado = Math.random();
console.log(resultado);
// Aleatorio dentro de un rango:
resultado = Math.floor(Math.random() * 30);
console.log(resultado);

// El orden de las operaciones se ha de tener en cuenta

resultado = 20 + 30 * 2;
console.log(resultado);
resultado = (20 + 30) * 2;
console.log(resultado);

// 20% De descuento en un carrito de compra.
resultado = (20 + 10 + 30 + 40 + 50) * 0.2;
console.log(resultado);

// Veamos como ir incrementando un valor de 1 en 1 o en determinada cantidad

// Incluir incremento por 1 y menos 1

let puntaje = 5;
puntaje++;
console.log(puntaje);

puntaje--;
console.log(puntaje);

++puntaje;
console.log(puntaje);

--puntaje;
console.log(puntaje);

puntaje += 3;
console.log(puntaje);

puntaje -= 3;
console.log(puntaje);

// Veamos un par de funciones para convertir a números

const num1 = "30.6";
const num2 = "17";
const num3 = "Uno";
const num4 = 20;

console.log(num1);

// Convertir de Strings a Números flotantes o Enteros
console.log(Number(num1));
console.log(Number(num2));
console.log(Number.parseInt(num1)); // Convertir de String a Número
console.log(Number.parseFloat(num2)); // Convertir a número con decimales
console.log(Number.parseInt(num3));

// Revisar si un número es entero
console.log(Number.isInteger(num4)); // Revisar si un número es entero o no
console.log(Number.isInteger(num3)); //

// Convertir un numero a String
console.log(num4.toString());

const num5 = 20.5566643225232;
console.log(num5);
let n = Number(num5.toFixed(3));
console.log(n);
