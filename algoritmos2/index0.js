
//let miVariable = prompt("Cuál es tu nombre: ");

//function saludoPer () {
    //alert (miVariable);
//}

function suma(){
    //let num1 = parseInt( prompt("de el valor de número 1: "));
    //let num2 = parseInt( prompt("de el valor de número 2: "));
    let num1 = 5;
    let num2 = 6;
    let resultado = num1 + num2;
    return resultado;
}


//saludoPer();
//let r = suma();
//alert (r);
//alert(suma());
console.log("El resultado es" +  suma());

function resta (){
    let num1 = 10;
    let num2 = 5;
    return num1 - num2;
}
    console.log("El resultado es" +  resta());



function multiplicacion (){
    let num1 = 5;
    let num2 = 10;
    return num1 * num2;
}
console.log("El resultado es" +  multiplicacion());



function division () {
    let num1 = 20;
    let num2 = 4;
    if (num2 != 0) {
        
    return num1 / num2;
    }
console.log("el divisor es 0");


}
console.log("El resultado es" +  division());





function residuo (){
    let num1 = 7;
    let num2 = 2;
    let resultado = (num1 % num2);
    return resultado;
}
console.log("El residuo es" + residuo())

function adicionales (){
    let num1 = 7;
    let resultado = (++num1);
    return resultado;
}
console.log("El resultado es" + adicionales());


function adicionales2 (){
    let num1 = 7;
    let resultado = (--num1);
    return resultado;
}
console.log("El resultado es" + adicionales2());



function adicionales3 (){
    let num1= 7;
        num1= (num1 + 1);
    return num1;
}
console.log("El resultado es" + adicionales3());



function adicionales4 (){
    let num1= 7;
        num1+= (num1);
    return num1;
}
console.log("El resultado es" + adicionales4());



function adicionales5 (){
    let num1= 7;
        num1*= num1+(5+3);
    return num1;
}
console.log("El resultado es" + adicionales5());



function logico (){
    let valido = 3;
    let valido2 = 5;
    if (valido < valido2){
    console.log("El mayor es: " + valido2);    
}
console.log ("el valor booleano es: " + valido);

}
logico();

//Funcion tipo void

function edad (){
    let miEdad = 18;
    if (miEdad >= 18){
        console.log("Eres mayor de edad");
    } else { 
    console.log("No eres mayor de edad");
    }
}
edad ()

//Es un comentario en linea
/* los operadores logico hacen estructuras de control más grandes
ejemplo and && or || y not ! */

function conjuncion (){
    let valor1 = false;
    let valor2 = true;
    if (valor1 && valor2){
        console.log ("El valor 1 y el valor 2 son verdaderos");
    } else {
        console.log ("Un valor es falso");
    }
}
conjuncion ();



function disyuncion (){
    let valor1 = true;
    let valor2 = false;
    if (valor1 || valor2){
        console.log ("El operador por es verdadero");
    } else {
        console.log ("El operador or es falso");
    }
}
disyuncion ();



function negacion (){
    let valor1 = false;
    if (!(!valor1)){
        console.log ("El valor es " + valor1);
    } else {
        console.log ("El valor negado es " + valor1);
    }
}
negacion ();



