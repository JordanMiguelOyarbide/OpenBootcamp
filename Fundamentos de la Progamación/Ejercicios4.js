/* Usando un if, crear una condición que compare si la variable numeroIf es positivo, negativo, o 0.
Pista: Los números inferiores a 0 son negativos y los superiores, positivos.*/
 
 var numeroIf = 1 ;
 if (numeroIf > 0) {
    return 'Es Positivo'
 } else if (numeroIf < 0) {
    return 'Es negativo';
 } else {
    return 'Es cero';
}

/*Crea un bucle While, este bucle tendrá que tener como condición que la variable numeroWhile sea inferior 
a 3, el bloque de código que tendrá el bucle deberá:
 - Incrementar el valor de la variable en uno cada vez que se ejecute.
 - Mostrarlo por pantalla cada vez que se ejecute.*/
 
 var numeroWhile = -1;
 while (numeroWhile < 3) {
    numeroWhile++;
    return numeroWhile;
 }

/*Para el bucle Do While, deberás crear la misma estructura que en el While, pero solo se debe ejecutar una vez.*/
do {
    numeroWhile++;
} while (numeroWhile != numeroWhile);
return numeroWhile;

/*Para el bucle For, crea una variable numeroFor, esta variable tendrá como valor 0 y su condición será que la variable
 sea igual o menor que 3, se irá incrementando en 1 su valor cada vez que se ejecute y deberá mostrarse por pantalla.*/
 
 for (let numeroFor = 0; numeroFor <= 3; numeroFor++) {
    return numeroFor;
 }

/*Por último, para el Switch, deberás crear la variable estacion, y distintos case para las cuatro estaciones del año.
 Dependiendo del valor de la variable estacion se deberá mandar un mensaje por consola informando de la estación en la que está.
 También habrá que poner un default para cuando el valor de la variable no sea una estación.*/
 var estacion = 'Verano'
 switch (estacion) {
    case "Verano":
        return 'El mejor plan para el Verano es ir a la Playa.'
        break;
    case "Otoño":
        return 'El mejor plan para el Otoño es ver caer las hojas de los arboles.'
        break;
    case "Invierno":
        return 'El mejor plan para el Invierno es ver una pelicula en casa'
        break;
    case "Primavera":
        return 'El mejor plan para la Primavera es ir al parque a disfrutar del sol'
        break;
 
    default: return 'Esa estación no existe'
        break;
 }