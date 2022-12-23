var elnumero = Math.floor(Math.random()*100+1);
var minumero = document.getElementById("input1").value;
function cambiar(){
minumero = document.getElementById("input1").value;
if (minumero < elnumero) {
document.getElementById("p").innerHTML="Demasiado bajo! intente otra vez!";
}
if (minumero > elnumero) {
document.getElementById("p").innerHTML="Demasiado alto! intente otra vez!";	
}
if (minumero == elnumero){
document.getElementById("p").innerHTML="Has adivinado el numero secreto!";
alert("Has adivinado el numero secreto!" + elnumero);
elnumero = Math.floor(Math.random()*100+1);
}
if (minumero == "") {
document.getElementById("p").innerHTML="Ingrese un numero del 1 al 100";	
}


}