let factorialInicial = 0;
let factorial = 1;

while (factorialInicial < 20) {
    factorialInicial++;
    factorial = (factorialInicial * factorial)
    if (factorialInicial == 10) {
        break
    }
}

console.log(factorialInicial);
console.log(factorial);