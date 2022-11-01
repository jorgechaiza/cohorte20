let miNombre="jorgeEstebanChavez";
console.log(miNombre);

function myFunction() {
    let nombre = "Jorge";
    console.log(nombre);
}

myFunction();

function funcion1() {
    let valor = 2;
    valor = valor + 3;
    return valor;
}
let resultado= funcion1();
console.log("el resultado es: " + resultado);


function funcion2() {
    let valor1 = 2;
    valor1 = valor1 + 3;
    console.log("el resultado es: " + valor1);  
}
funcion2();



let variableGlobal = 5
function funcion3() {
    let variableLocal = "El valor es. "
    console.log(variableLocal + variableGlobal);
}
funcion3();


function funcion4(valor2 = 4) {
    let numero = 6;
    numero = numero * valor2;
    return numero;
}
let salida = funcion4(2);
console.log("El producto es: " + salida);


//Funciones anónimas, no se les asigna un nombre
let funcion0 = function(parametro){
    parametro = parametro * 2;
    return parametro;
}
console.log("Llamando a la funcion anonima: " + funcion0(4));

let funcion01 = function(caracteres){
    return "Hola " + caracteres;
}(" Lunes ");
console.log("El resultado es: " + funcion01);



//TIPO FLECHA   
let suma = (x , y) => {return x+y};
let resultado1 = suma(5 , 3)
console.log("La suma es: " + resultado1);


//EJERCICIO EN CLASE
function calcularPrecioTotal(precio) {
    let impuesto = 1.16
    let gastosEnvio = 10   
    
    let precioTotal = (precio*impuesto) + gastosEnvio
    return precioTotal

}
let precioTotal = calcularPrecioTotal(23.34)
console.log("El precio total es: " + precioTotal);

let precioConImpuestos1 = (1 + 16/100) * precioTotal;
console.log("El precio total con impuestos es: " + precioConImpuestos1);


//EJERCICIO EN FLECHA
let calcularPrecioTotal1 = (precio , impuesto , gastosEnvio) => {return (precio*impuesto) + gastosEnvio}

let precioTotal1 = calcularPrecioTotal1(23.34 , 1.16 , 10)
console.log("El precio total de nuevo es: " + precioTotal1); 

let precioConImpuestos = (1 + 16/100) * precioTotal1;

console.log("El precio total con impuestos es: " + precioConImpuestos);

//EJERCICIO FUNCION ANONIMA
let funcion02 = function (precio = 23.34) {
    let impuesto = 1.16
    let gastosEnvio = 10

    return (precio*impuesto) + gastosEnvio
    let precioTotal = funcion02

}
console.log("en anonimo el resultado es: " + precioTotal);



/* let miObjeto = {
    nombre: "Juan",
    edad: 30
}; */

/* let mensaje = "tu nombre es: " + miObjeto.nombre;
mensaje += " tienes " + miObjeto["edad"] + " años";
console.log(mensaje); */

let miObjeto={
    nombre:"juan",
    edad:24,
    datos: function() {
        let mensaje="tu nombre es: "+ this. nombre;
        mensaje+=" tienes " + this.edad+ " años";
        console.log(mensaje);
    }
    }; miObjeto.datos();

    let mensaje="tu nombre es: "+ miObjeto.nombre;
    mensaje+=" tienes " + miObjeto["edad"]+" años";
    console.log(mensaje);

    let constructor= function () {
        let objPersona={
            nombre:"jorge",
            nss:983989,
            datosPersona:function () {
                let msj=" eres "+ this.nombre + " el numero nss es "+this.nss;
            console.log(msj);
                
            }, otroMetodo: function (parametro) {
                let numero=8;
                console.log("la suma es: " + numero + parametro)
                
            }
        };
        return objPersona;
    }    
    let varObjReg = constructor() //crear la variable objeto
    varObjReg.datosPersona();

    varObjReg.otroMetodo(5)


