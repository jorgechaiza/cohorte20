let fibonacci = prompt("Ingrese un número para la serie")

while (fibonacci == NaN || /\D/.test(fibonacci) || fibonacci == "") {
    alert("el número no es valido")
    fibonacci = parseFloat(prompt("Ingrese un número válido: "));
}

function calcularFibonacci (){
    let fib = [0,1];
    for (let i = 2; i <= fibonacci; i++) {
            fib[i] = fib[i-1] + fib[i-2];
            
    }
    return fib;
}
let fib = calcularFibonacci();
document.write("El resultado fibonacci es:  " + fib);