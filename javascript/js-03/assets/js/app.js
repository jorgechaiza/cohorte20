/* Control de flujo */

/* let edad = Number(prompt("Escribe tu edad")) */


/* if (condition === true) {
   bloque
   código 
} */

// console.log(edad === 18);

/* if(edad <= 17) {
    document.write("Tas chiquito")
}
else if(edad === 18){
    document.write("Eres mayor de edad") 
}
else if(edad > 18){
    document.write("Tas ruco")
}
else if(edad < 0){
    document.write("Es un número negativo")
}
else{
    document.write("Eso no es un número valido") 
} */


//OPERADORES LÓGICOS
// && AND
// || OR
// ! NOT

/* if((edad > 0) && (edad <= 17)) {
    document.write("Tas chiquito");
}
else if(edad === 18){
    document.write("Eres mayor de edad");
}
else if(edad > 18){
    document.write("Tas ruco");
}
else if(edad < 0){
    document.write("Es un número negativo");
}
else{
    document.write("Eso no es un número valido");
}  */

/* console.log(isNaN(edad));
console.log(typeof edad); */


let dia = 1

if(dia === 1){
    document.write("Lunes")
}
else if(dia === 2){
    document.write("Martes")
}
else if(dia === 3){
    document.write("Miercoles")
}
else if(dia === 4){
    document.write("Jueves")
}
else if(dia === 5){
    document.write("Viernes")
}
else if(dia === 6){
    document.write("Sábado")
}
else if(dia === 7){
    document.write("Domingo")
}
else{
    document.write("No es un número válido")
}



/* Literal string  - plantillas literales */

let nombre = "Jorge"
console.log(`Hola yo soy ${nombre} y mi edad es ${2022-1993}`);


/* operador ternario */
/* If simplificado */
/* condicion ? en caso de ser verdad: en caso de ser falso */

let edad = 18;
let mensaje = edad >= 18 
? "Es mayor de edad" 
: "Tas chiquito"

console.log(mensaje);


console.log(`Yo soy Jorge y soy ${edad >=18 ? "Soy mayor de edad" : "Soy menor de edad"}`);


/*  */