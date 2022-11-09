const titulo = document.getElementById("titulo")
const parrafos = document.getElementsByClassName("parrafo")

titulo.textContent = "Hola"
parrafos[0].innerHTML = "Soy un parrafo"

console.log(titulo.textContent);
console.log(parrafos[1]);

/* parrafos[1].style.color = "red";
parrafos[1].style.backgroundColor = "yellow"; */

/* console.log(parrafos[1].classList.contains("coloresFeos")); */

console.log(parrafos[1].classList.add("coloresFeos"));


// Crear elementos HTML

const padre = document.getElementById("padre");

const enlace = document.createElement("a");
enlace.href = "https://www.google.com";
enlace.textContent = "Ir a Google";

/* document.body.appendChild(enlace) */

/* document.body.insertAdjacentElement("afterbegin",enlace); */

padre.appendChild(enlace)


console.log(document.body);



