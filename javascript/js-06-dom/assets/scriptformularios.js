function mostrarValores() {
    let formulario = document.forms["formulario"]
    let texto = "";
    for (let elemento of formulario){
        texto += elemento.value + "<br/>";
    }
    document.getElementById("valores").innerHTML = texto;
}



/* function cambio() {


    document.write("Saludos")

} */


function cambio() {
    document.getElementById("imagen").src="../gato.jpg";
}