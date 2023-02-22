//- La fecha de hoy
const fecha = new Date;

//- La fecha de tu nacimiento
const fechaNacimiento = new Date('June 3, 1995');

//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
fecha.setHours(0,0,0,0);
fechaNacimiento.setHours(0,0,0,0);
if (fecha.getTime() > fechaNacimiento.getTime()){
    return ("Es mas tarde");
}
//- Una variable que contenga el día de tu nacimiento
const dia = fechaNacimiento.getDay();

//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mes = fechaNacimiento.getMonth() + 1;

//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const año = fechaNacimiento.getFullYear();
