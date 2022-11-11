class Persona {
  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }
  set apellido(apellido) {
    this._apellido = apellido;
  }
  get nombre() {
    return this._nombre;
  }
  get apellido() {
    return this._apellido;
  }
  nombreCompleto (){
    return this._nombre + " " + this._apellido
  }
  toString() {
    return this.nombreCompleto();
  }
}

class Empleado extends Persona {
    constructor(nombre, apellido, empresa){
        super(nombre, apellido);
        this._empresa = empresa;
    }

    set empresa (empresa){
        this._empresa = empresa;
    }
    get empresa (){
        return this._empresa;
    }
    nombreCompleto (){
        return super.nombreCompleto() + " " + this._empresa; 
    }

}

let p1 = new Persona("Hugo", "Sanchez")
console.log(p1.nombreCompleto());
console.log(p1.toString());

let e1 = new Empleado ("Juan", "Perez", "Coppel");
console.log(e1.nombreCompleto());
console.log(e1.toString());


class Cliente extends Persona{

  
}