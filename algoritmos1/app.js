alert("Hello World desde Visual Studio Code");
//Comentario de una linea
/*
Esto es un
bloque de
comentarios
*/

//declaracion de una variable

let myVariable;

//inicializar variable
const otraVariable = 5;
myVariable = "Hola";
let nombre = "Jorge";

console.log(otraVariable);
console.log(myVariable);
console.log(nombre);

//mutacion de valor o reasignación
//Sólo funciona con variables let
//const no permite cambiar el valor

console.log(myVariable);
myVariable = 5;

console.log(myVariable);

//Valores primitivos o valores simples
//Strings - Cadenas de texto (sin ñ ni ´)

let palabra = "Cualquier palabra $ ? .";
let palabra2 = 'otra palabra';
console.log(palabra);
console.log(palabra2);

//Numbers - Cualquier tipo de números, enteros o decimales

let num = 3;
let num2 = 65.560
let num3 = -9800

console.log(num);
console.log(num2);
console.log(num3);
console.log(num,num2,num3);
console.log(num + num2 + num3);
console.log("Este número es " , num);
console.log("Este número es " + num);

console.log("1" + 1);
console.log("1" + "1");





//Boolean - Buleano
//Sólo puede tener 2 estados. ejem. true-false

let verdadero = true;
let falso = false;
console.log(verdadero);
console.log(falso);



//Null 
//Una variable que estamos dejando vacía intencionalmente

let valorNulo = null;

console.log(valorNulo);
console.log(valorNulo + 1);




//Undefined
//Estado

let varUn;
console.log(varUn);
console.log(varUn + 1);


//Operador tipe of - nos permite conocer el tipo de dato

let a = 1;
let b = "Hola";
let c = true;

console.log(typeof a);
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(null));
console.log(typeof(undefined));
console.log(typeof(4567));








//Valores compuestos (aparte del valor contienen otras cosas)

