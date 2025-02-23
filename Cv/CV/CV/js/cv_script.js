const language = document.getElementById("language");


const changeLanguage = () =>{
    switch(language.value){
        case "EN":
            window.location.href = "./index-en.html";
            break;
        case "SP":
            window.location.href = "./index.html";
            break;
    }
     
}

language.addEventListener("change", changeLanguage);