//- Una clase llamada "Estudiante" que tenga:
class Estudiante {
    constructor(nombre, asignaturas) {
        this.nombre = nombre;
        this.asignaturas = asignaturas;
    }

    obtenDatos() {
        return ("Estudiante " + this.nombre + ".Las asignaturas son: " + this.asignaturas.toString(" "));
    }
}

//- Una variable llamada nombre

//- Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS

//- Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas

//- Crea una nueva instancia de "Estudiante"
const estudianteUno = new Estudiante ("Jordan", ["Javascript", "HTML", "CSS"])
console.log(estudianteUno);

//- Haz la llamada al método obtenDatos
 const proMetodo = estudianteUno.obtenDatos();
 console.log(proMetodo);