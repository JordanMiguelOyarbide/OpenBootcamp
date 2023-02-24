const acu = [];
function Fibonacci(num) {
    if (num == 1) {
        return acu.push(1);
    } 
    if (num == 2) {
        return acu.push(1, 1);
    }
    acu.push(1, 1);
    for (let i = 1; i < (num - 1); i++) {
        let sumar = acu[(i - 1)] + acu[i];
        acu.push(sumar);
    }
}

Fibonacci(6);
console.log(acu);
