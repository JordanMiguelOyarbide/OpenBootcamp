//Este archivo debe calcular el factorial de 10 utilizando un solo bucle for

let factorialInicial = 0;
let factorial = 1;

for (let index = 0; index < 10; index++) {
    factorialInicial++;
    factorial = (factorialInicial * factorial)
}

console.log(factorialInicial);
console.log(factorial);