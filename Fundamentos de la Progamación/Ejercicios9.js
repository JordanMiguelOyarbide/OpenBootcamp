// Crea una clase Persona con las siguientes variables:
// La edad
// El nombre
// El teléfono
// Una vez creada la clase, crea una nueva clase Cliente que herede de Persona, esta nueva clase tendrá la variable credito solo para esa clase.
// Crea ahora un objeto de la clase Cliente que debe tener como propiedades la edad, el telefono, el nombre y el credito, tienes que darles valor y mostrarlas por pantalla.
// Una vez hecho esto, haz lo mismo con la clase Trabajador que herede de Persona, y con una variable salario que solo tenga la clase Trabajador.

class Persona{
    constructor(edad, nombre, telefono){
        this._edad = edad;
        this._nombre = nombre;
        this._telefono = telefono;
    }

    get edad(){
        console.log(this._edad);
    }
    set edad(e){
        this._edad = e;
    }

    get nombre(){
        console.log(this._edad);
    }
    set nombre(nom){
        this._nombre = nom;
    }

    get telefono(){
        console.log(this._telefono);
    }
    set telefono(n){
        this._telefono = n;
    }

}

class Cliente extends Persona{
    constructor(edad, nombre, telefono, credito){
        super(edad, nombre, telefono);
        this._credito = credito;
    }

    get credito(){
        console.log(this._credito);
    }
    set credito(c){
        this._credito = c;
    }
}

class Trabajador extends Persona{
    constructor(edad, nombre, telefono, salario){
        super(edad, nombre, telefono);
        this._salario = salario;
    }

    get salario(){
        console.log(this._salario);
    }
    set credito(s){
        this._salario = s;
    }
}

var personaDos = new Cliente(27, "Jordan Oyarbide", 621071195, 100);
return personaDos;
