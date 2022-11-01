let precio = Number(prompt("Ingresa precio: "));
let cupon = (prompt("Ingresa el cupón: " /* \n 1 - Bronce \n 2 - Plata \n 3 - Oro \n 4 - Platino " */))
let precioOriginal
let descuento

switch(cupon){
    case "Bronce":
    case "bronce":
        
        precioOriginal = precio
        descuento = precio * 0.95

        document.write ("Precio original: $" + precioOriginal + "<br>" + "Precio con descuento: $" + descuento);
        break;
    
    case "Plata":
    case "plata":

        precioOriginal = precio
        descuento = precio * 0.90

        document.write ("Precio original: $" + precioOriginal + "<br>" + "Precio con descuento: $" + descuento);
        break;

    case "Oro":
    case "oro":

        precioOriginal = precio
        descuento = precio * 0.80

        document.write("Precio original: $" + precioOriginal + "<br>" + "Precio con descuento: $" + descuento);
        break;

    case "Platino":
    case "platino":

        precioOriginal = precio
        descuento = precio * 0.75

        document.write("Precio original: $" + precioOriginal + "<br>" + "Precio con descuento: $" + descuento);
        break;

    default:
        alert("El cupón no es válido");
        break;
    
}

/* Literal string  - plantillas literales */

let nombre = "Jorge"
console.log(`Hola yo soy ${nombre} y mi edad es ${2022-1993}`);


/* operador ternario */
/* If simplificado */
/* condicion ? en caso de ser verdad: en caso de ser falso */

let edad