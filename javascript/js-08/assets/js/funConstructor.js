let constructor = function () {
    let valor0 = 0;
    let valor1 = 0;

    //declarando al objeto
    let persona = {
        nombre: "Pedro",
        apellido: "Lara",
        suma: function (a,b){
            return a+b;
        },
        get nombre2 (){
            return this.nombre;
        },
        set nombre2 (nombre1){
            this.nombre = nombre1
        }
    };
    return persona;
}

let p1 = new constructor();
/* console.log(p1);
console.log(p1.apellido); */
p1.nombre = "Carlos";
console.log(p1.nombre);