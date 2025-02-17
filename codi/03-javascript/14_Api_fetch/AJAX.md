![Categoria: javascript](AJAX_files/javascript.svg "Categoria: javascript")

AJAX
====

* * *

_**AJAX**_ significa _**Asynchronous JavaScript and XML**_ . Conjunt de tècniques que per l'ús de l'objecte _**XMLHttpRequest**, javascript pot comunicar-se amb els servidors.

Podeu enviar i rebre informació en diversos formats, inclosos _JSON_ , _XML,_ _HTML_ i fitxers de text.

L'atractiu de _**AJAX**_ és la seva naturalesa _"asíncrona"_ ,  el que significa que es pot comunicar amb el servidor, intercanviar dades i actualitzar la pàgina sense haver de recarregar el navegador.

![Model AJAX](AJAX_files/ajax.png)

* * *

Mètodes nadius
--------------

*   [XMLHttpRequest](https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest)
*   [API Fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)

Llibreries Externes
-------------------

*   [jQuery.ajax()](https://api.jquery.com/category/ajax/)
*   [Axios](https://github.com/axios/axios)
*   etc.

_**AJAX**_ no és una tecnologia en si mateix. De fet, es tracta de diverses tecnologies independents que s'uneixen:

*   **_HTML_** i **_CSS_** , per crear una presentació basada en estàndards.
*   **_DOM_** , per a la interacció i manipulació dinàmica de la presentació.
*   **_HTML_** , **_XML_** i **_JSON_** , per a l'intercanvi i la manipulació d'informació.
*   **_XMLHttpRequest_** o **_Fetch_** , per a l'intercanvi asíncrone d'informació.
*   **_JavaScript_** , per unir totes les altres tecnologies.

És important també considerar els [Codis d'estat de resposta _HTTP_](https://developer.mozilla.org/es/docs/Web/HTTP/Status) i els estats de la petició < /span> : _**AJAX**_

Estat                                           Valor

_READY\_STATE\_UNINITIALIZED_   0

_READY\_STATE\_LOADING_            1

_READY\_STATE\_LOADED_              2

_READY\_STATE\_INTERACTIVE_       3

_READY\_STATE\_COMPLETE_          4

* * *

Objecte _XMLHttpRequest_
------------------------

    const xhr = new XMLHttpRequest(),
      $xhr = document.getElementById("xhr"),
      $fragment = document.createDocumentFragment();
    
    xhr.addEventListener("readystatechange", (e) => {
      if (xhr.readyState !== 4) return;
    
      console.log(xhr);
    
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log("èxit");
        console.log(xhr.responseText);
        //$xhr.innerHTML = xhr.responseText;
        let json = JSON.parse(xhr.responseText);
        console.log(json);
    
        json.forEach((el) => {
          const $li = document.createElement("li");
          $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
          $fragment.appendChild($li);
        });
    
        $xhr.appendChild($fragment);
      } else {
        console.log("error");
        let message = xhr.statusText || "Hi ha hagut un error";
        $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
      }
    
      console.log("Missatge que es carregarà igualment");
    });
    
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    //xhr.open("GET", "assets/users.json");
    
    xhr.send();

* * *

_API Fetch_
-----------

    const $fetch = document.getElementById("fetch"),
      $fragment = document.createDocumentFragment();
    
    //fetch("assets/users.json")
    fetch("https://jsonplaceholder.typicode.com/users")
      /* .then((res) => {
          console.log(res);
          return res.json();
        }) */
      .then((res) => {
           // if (!res.ok) throw { status: res.status, statusText: res.statusText };
        return  res.json()})
      .then((json) => {
        console.log(json);
    
        //$fetch.innerHTML = json;
        json.forEach((el) => {
          const $li = document.createElement("li");
          $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
          $fragment.appendChild($li);
        });
    
        $fetch.appendChild($fragment);
      })
      .catch((err) => {
        console.log(err);
        let message = err.statusText || "Ha hagut un error";
        $fetch.innerHTML = `Error ${err.status}: ${message}`;
      })
      //finally per realitzar netejes per no acumular cache
      .finally(() => {
        console.log(
          "S'executarà independentment del resultat del Fetch"
        );
      });

* * *

_API Fetch async_  ( _async - await_ )
----------------------------------------

    const $fetchAsync = document.getElementById("fetch-async"),
      $fragment = document.createDocumentFragment();
    
    async function getData() {
      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users"),
          json = await res.json();
    
        console.log(res, json);
    
        if (!res.ok) throw { status: res.status, statusText: res.statusText };
    
        json.forEach((el) => {
          const $li = document.createElement("li");
          $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
          $fragment.appendChild($li);
        });
    
        $fetchAsync.appendChild($fragment);
      } catch (err) {
        console.log(err);
        let message = err.statusText || "Hi ha un error";
        $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
      } finally {
        console.log("S'executarà independentment del try... catch");
      }
    }
    
    getData();

* * *

Llibreria _Axios_
-----------------

    const $axios = document.getElementById("axios"),
      $fragment = document.createDocumentFragment();
    
      //axios.get("assets/users.json")
      axios.get("https://jsonplaceholder.typicode.com/users", {
    responseType: 'json'})
      .then((res) => {
        console.log(res);
        let json = res.data;
    
        json.forEach((el) => {
          const $li = document.createElement("li");
          $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
          $fragment.appendChild($li);
        });
    
        $axios.appendChild($fragment);
      })
      .catch((err) => {
        console.log(err.response);
        let message = err.response.statusText || "Hi ha hagut un error";
        $axios.innerHTML = `Error ${err.response.status}: ${message}`;
      })
      .finally(() => {
        console.log("S'executarà independentment del resultat de la consulta Axios");
      });

* * *

Llibreria _Axios_ \+ ( _Async_ \- _Asíncrona_ )
-----------------------------------------------

    const $axiosAsync = document.getElementById("axios-async"),
      $fragment = document.createDocumentFragment();
    
    async function getData() {
      try {
        let res = await axios.get("https://jsonplaceholder.typicode.com/users", {
    responseType: 'json'}),
          json = await res.data;
    
        console.log(res, json);
    
        json.forEach((el) => {
          const $li = document.createElement("li");
          $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
          $fragment.appendChild($li);
        });
    
        $axiosAsync.appendChild($fragment);
      } catch (err) {
        console.log(err.response);
        let message = err.response.statusText || "Ha hagut un error";
        $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
      } finally {
        console.log("S'eecutara independentment del try... catch");
      }
    }
    
    getData();