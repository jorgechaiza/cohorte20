let etiqueta = document.getElementById("etiqueta1");
console.log("Valor de etiqueta " + etiqueta.innerHTML);

/* let parrafo = document.getElementById ("parrafo")
console.log("Valor de parrafo " + parrafo.innerHTML); */ //innerHTML accede al contenido de la etiqueta



/* getElementByTagName */

let parrafos = document.getElementsByTagName("p");
for (let i = 0; parrafos.length > i; i++) {
  console.log("# de parrafos: " + parrafos[i].innerHTML);
}
/* console.log("# de parrafos: " + parrafos.length); */



/* Recuperar elementos con clase con la función getElementByClassName */

let clases = document.getElementsByClassName("azul");
for (let i = 0; clases.length > i; i++) {
  /*  console.log("# de parrafos: " + clases[i].innerHTML); */

  console.log(`# de clases: ${clases[i].innerHTML} `);
}



