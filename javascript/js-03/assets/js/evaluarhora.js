let hora = Number(prompt("Qué hora es? "))

if((hora >= 6) && (hora <= 11)) {
    document.write("Buenos días");
}
else if((hora >= 12) && (hora <= 18)){
    document.write("Buenas tardes");
}
else if((hora >= 19) && (hora <= 23)){
    document.write("Buenas noches");
}
else if((hora >= 0) && (hora <= 5)){
    document.write("Déjame dormir");
}
else{
    document.write("No es una hora válida");
} 

