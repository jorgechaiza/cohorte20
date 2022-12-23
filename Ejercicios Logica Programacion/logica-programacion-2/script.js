let celsius = prompt("Escriba la temperatura en grados celsius")

while (celsius == NaN || /\D/.test(celsius) || celsius == "") {
    alert("el número no es valido")
    celsius = prompt("Ingrese un número válido: ");
}

function celciusAFarenheit(){
    let farenheit;
    farenheit = (parseFloat(celsius)*9/5) + 32;
    return farenheit;
    
}
    let farenheit = celciusAFarenheit();
    document.write("Grados Farenheit: " + farenheit + "</br>");
    


function celciusAKelvin(){
    let kelvin ;
    kelvin = parseFloat(celsius) + 273.15;
    return kelvin;
    
}
    let kelvin = celciusAKelvin();
    document.write("Grados Kelvin: " + kelvin + "</br>");



