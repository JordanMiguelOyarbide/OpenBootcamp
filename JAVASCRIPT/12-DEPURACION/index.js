//Crea un nuevo fichero JS que contenga las siguientes líneas

//- Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de números de la secuencia de Fibonacci (Por ejemplo: num = 6 => Resultado [1, 1, 2, 3, 5, 8])
const acu = [1, 1];
function Fibonacci(num) {
    for (let i = 1; i < (num - 1); i++) {
        let sumar = acu[(i - 1)] + acu[i];
        acu.push(sumar);
    }
}

Fibonacci(6);
console.log(acu);
//- Ejecuta la depuración de VSCode para visualizar la ejecución de la función