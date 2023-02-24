//- En el entrypoint index.js, importa el módulo controller.js

import { multiplica, suma } from "./controlers.js";


//- El entrypoint index.js debe utilizar las funciones del módulo para devolver la multiplicación de suma(1, 2) y suma(4, 5)
suma(1, 2);

multiplica(1, 2);


//- Instala e importa la librería chalk (https://www.npmjs.com/package/chalk)
import chalk from 'chalk';

//- Modifica el último console.log del entrypoint index.js para devolver el resultado en color verde
console.log(chalk.green('Hello world!'));