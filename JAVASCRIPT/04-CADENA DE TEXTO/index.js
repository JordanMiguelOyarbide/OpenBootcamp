
//- Una cadena de texto con tu Nombre
let nombre = "Jordan";

//- Otra cadena de texto con tu Apellido
let apellido = "Oyarbide";

//- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = ("Estudiante " + nombre + " " + apellido);

//- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase();

//- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase();
//- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let numeroLetras = estudiante.length;

//- Una variable que contenga la primera letra del Nombre
let primeraLetra = nombre.slice(0,1);

//- Otra variable que contenga la última letra del Apellido
let ultimaLetra = apellido.slice(apellido.length -1, apellido.length);

//- Una cadena de texto que elimine los espacios de la variable "estudiante"
let espacios = estudiante.trim();

//- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let verificar = estudiante.includes(nombre);
