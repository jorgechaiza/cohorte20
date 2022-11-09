//1 - LLAMAR AL CONTENEDOR

const imagen = document.getElementsByClassName("contenedor")[0];


//2 - CREAR EL ELEMENTO

const nuevaImg = document.createElement("img");

//3 - MODIFICAR ATRIBUTOS

nuevaImg.src = "https://placeimg.com/200/200/nature";

nuevaImg.alt = "Imangen de naturaleza";

//INSERTAR EL ELEMENTO

imagen.appendChild(nuevaImg);



/* Otra forma de crear elementos */

//1 - LLAMAR AL ELEMENTO PADRE
const imagen2 = document.getElementById("img");


//2 - 
imagen2.innerHTML = `
    <img src="https://placeimg.com/200/200/animals" />
`;

//Crear una lista a partir de los elementos guardados en un arreglo

//insertarla en el documento para que se pueda mostrar

//Forma Luis
const nombres = ["Pedro","Juan","Sonia","Miguel"] 

lista = document.createElement("ul");
  
nombres.forEach((elemento)=>{
  let li = document.createElement("li");
  li.innerText += elemento;
  lista.appendChild(li); 
});

document.getElementById("lista").appendChild(lista);


//forma1
const lista1 = document.getElementById("lista1");

nombres.forEach((el) => {
    const li = document.createElement("li");
    li.textContent += el;
    lista1.appendChild(li);
});


//forma2
const frutas = ["Manzana","Limon","Pera","Uva"];

const lista2 = document.getElementById("lista2");

frutas.forEach((el) =>{
    lista2.innerHTML += `
    <li> ${el} </li>
    `;
});
//lista2 = lista2 + el