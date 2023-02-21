//Este archivo debe calcular el factorial de 10 utilizando un bucle while
let factorialInicial = 0;
let factorial = 1;

while (factorialInicial <10) {
    factorialInicial++;
    factorial = (factorialInicial * factorial)
}

console.log(factorialInicial);
console.log(factorial);