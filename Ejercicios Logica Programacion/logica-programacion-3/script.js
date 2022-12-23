let factorial = prompt("Escriba un número a calcular")

while (factorial == NaN || /\D/.test(factorial) || factorial == "") {
    alert("el número no es valido")
    factorial = parseFloat(prompt("Ingrese un número válido: "));
}

function calcularFactorial (){
    let resultado = 1;
    for (let i = 1; i <= factorial; i++) {
            resultado = resultado * i;
            
    }
    return resultado;
}
let resultado = calcularFactorial();
document.write("El resultado factorial del número es:  " + resultado);