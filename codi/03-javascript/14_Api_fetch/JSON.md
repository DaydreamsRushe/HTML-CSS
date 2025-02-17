![Categoria: javascript](./JSON_files/javascript.svg "Categoria: javascript")

JSON
====

_JSON: JavaScript Object Notation_
----------------------------------

_**JavaScript Object Notation**_ o Notació d'Objectes de _JavaScript_ , és un format lleuger d'intercanvi de dades .
Llegir-ho i escriure'l és simple per a humans, mentre que per a les màquines és fàcil d'interpretar i generar. **Tots els
llenguatges de programació ho suporten.**

### Sintaxi derivada dels objectes _JavaScript_ :

* Les dades es troben en parells de nom/valor.
* Les dades estan separades per comes.
* Les claus **`{}`** contenen objectes.
* Els claudàtors **`[]`** contenen arranjaments.
* Les dades tenen un nom i un valor.
* Les dades s'escriuen com a parells de nom/valor **`"nombre" : "valor"`** .

### Valors _JSON_ :

* Un número (sencer o de coma flotant).
* Una cadena (entre cometes dobles).
* Un booleà (veritable o fals).
* Un arranjament (entre claudàtors).
* Un objecte (entre claus).
* Un valor nul ( **`null`** ).

### Mètodes _JavaScript_ per a _JSON_ :

[_**`JSON.parse()`**_](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/JSON/parse) :
Analitza una notació _JSON_ i la converteix en un tipus de dada _JS_ .

console.log("JSON.parse");<br>
console.log(JSON.parse("{}"));<br>
console.log(JSON.parse("[1,2,3]"));<br>
console.log(JSON.parse("true"));<br>
console.log(JSON.parse("false"));<br>
console.log(JSON.parse("19"));<br>
console.log(JSON.parse('"Hola Mundo"'));<br>
console.log(JSON.parse("null"));<br>
console.log(JSON.parse("undefined"));<br>
console.log(JSON.parse('{ "x": 2, "y": 3 }'));<br>

[_**`JSON.stringify()`**_](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/JSON/stringify)
: Converteix un tipus de dada _JS_ a notació _JSON_ .

console.log("*** JSON.stringify ***");<br>
console.log(JSON.stringify({}));<br>
console.log(JSON.stringify([1, 2, 3]));<br>
console.log(JSON.stringify(true));<br>
console.log(JSON.stringify(false));<br>
console.log(JSON.stringify(19));<br>
console.log(JSON.stringify("Hola Mundo"));<br>
console.log(JSON.stringify(null));<br>
console.log(JSON.stringify(undefined));<br>
console.log(JSON.stringify({ x: 2, y: 3 }));<br>

[Més informació a _JSON.org_](http://www.json.org/json-es.html)