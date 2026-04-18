const buttons = document.querySelectorAll(".button");
const modale = document.querySelector(".modale");

for (let i = 0; i< buttons.length; i++){
 buttons[i].addEventListener( "click",ouvrirModale);
}

function ouvrirModale(){
modale.classList.add("ouverte");
let paragraphe =document.createElement("p");
paragraphe.textContent= "fin";
paragraphe.classList.add("paragraphe");
modale.appendChild(paragraphe);
paragraphe.addEventListener("click",fermerModale)
}

function fermerModale(event) {
    modale.classList.remove("ouverte");
   modale.removeChild(event.currentTarget);
}