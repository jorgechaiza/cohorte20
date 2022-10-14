//propiedades de arreglos
//length

const frutas = ["Pera" , "Manzana" , "Guayaba" ];
console.log(frutas);

console.log(frutas.length)


//Métodos -  Acciones

//push() = agrega al final

frutas.push("Sandia" , "Limón");
console.log(frutas);


//let num = frutas.push 

//unshift()  = agrega al inicio
frutas.unshift ("Guanabana");
console.log(frutas);


//pop()  = Quita el elemento del final
frutas.pop();
console.log(frutas);


//shift() = Quita el elemento del principio
let elemento = frutas.shift();
console.log(frutas);
console.log(elemento);


//indexOf()
console.log(frutas.indexOf("Manzana"));
console.log(frutas.indexOf("Guayaba"));


//reverse()
frutas.reverse()
console.log (frutas)


//sort();
frutas.sort();
console.log(frutas);


const numeros = [4 , 567 , 2 , 4566 , 45 , 78 , 1];

numeros.sort((a,b) => a - b) //funcion callback

console.log(numeros);
