//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datos = {
    nombre: 'jordan',
    apellido: 'oyarbide',
    edad: 27,
    altura: 170,
    eresDesarrollador: 'lo intento'
}

//- Una variable que obtenga tu edad a partir del objeto anterior
const miEdad = datos.edad;

//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const datosGlobales = [datos, {amigos: 'laura', edad: 28}];

//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const ordenada = datosGlobales.sort((a, b) => a.edad - b.edad);
