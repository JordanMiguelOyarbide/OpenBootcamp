//Crear clase Persona.
//Crear variables las privadas edad, nombre y telefono de la clase Persona.
//Crear gets y sets de cada propiedad.
//Crear un objeto persona en el main.
//Utiliza los gets y sets para darle valores a las propiedades edad, nombre y telefono, por último muéstralas por consola.
class Persona{
    constructor(edad, nombre, telefono){
        this._edad = edad;
        this._nombre = nombre;
        this._telefono = telefono;
    }
    
    get edad(){
        return this._edad;
    }
    set edad(e){
        this._edad = e;
    }

    get nombre(){
        return this._edad;
    }
    set nombre(nom){
        this._nombre = nom;
    }

    get telefono(){
        return this._telefono;
    }
    set edad(n){
        this._telefono = n;
    }


}

var personaUno = new Persona();
personaUno.edad = 27;
personaUno.nombre = "Jordan Oyarbide";
personaUno.telefono = 621071195;
