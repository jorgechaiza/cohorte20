/* let nombre = "raul"

if(true){
    let nombre = "Jorge"
    console.log(nombre);
} */


const numeros = [2,4,6,57,200]
let suma = 0;

//forEach
//recorre todo el arreglo y ejecuta el código que le indiquemos sobre los valores guardados

/* let suma2 = numeros.forEach(function sumar(elemento) { */
    /* suma = suma + elemento; */

/*     suma += elemento; */

    /* console.log(suma); */
    /* return suma; */

    /* console.log(elemento * elemento); */
/* }); */

numeros.forEach((el, indice, arreglo) => {
    console.log(el, indice, arreglo);
});

/* console.log(suma); */
console.log(numeros);


/* map */
/* genera una copia del arreglo original */

let nuevoArr = numeros.map((el, idx, arr) => {
    return el * el;
})

console.log(nuevoArr);

//filter
// crea una copia del arreglo original y nos permite filtrar

const frutas = ["papaya" , "manzana" , "manzana" , "uva"];
let frutaFiltrada = frutas.filter((fruta) => fruta.length > 3);

console.log(frutaFiltrada);