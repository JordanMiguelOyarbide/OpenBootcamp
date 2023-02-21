//- Una variable que contenga tu altura en centímetros (entero)
let alturaCentimetros = 172;

//- Una variable que contenga tu altura en metros (número de coma flotante)
let alturaMetros = 1.72;

//- Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso = parseFloat(80,7);

//- Una variable que contenga tu altura en metros redondeada hacia arriba
let alturaRedondeada = Math.ceil(alturaMetros);

//- Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let pesoRedondeado = Math.floor(peso);

//- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
const sonIguales = Number.MAX_VALUE + 1 === Number.MAX_VALUE
