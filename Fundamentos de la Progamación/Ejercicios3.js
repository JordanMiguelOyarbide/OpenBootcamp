// Primera Parte 

function Sumarlos (a, b, c) {
    var NumeroSumados = a + b + c;
    return NumeroSumados;
}

Sumarlos(10, 5, 15);


// Segunda Parte 

class Coche {
    constructor(puertas) {
        this.puertas = puertas;
    }

    incrementar(){
        var incrementarPuertas = this.puertas + 1;
        return incrementarPuertas;
    }

}

var miCoche = new Coche(4);
miCoche.incrementar();

