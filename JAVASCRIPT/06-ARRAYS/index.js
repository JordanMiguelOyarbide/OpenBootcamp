//- Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listaCompra = ['tomate', 'lechuga', 'dulce', 'helado', 'pan'];

//- Modifica la lista de la compra y añádele "Aceite de Girasol"(
listaCompra.unshift('Aceite de Girasol');

//- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.shift('Aceite de Girasol')

//- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculas = [{titulo: "efecto mariposa", director: "james", año: 2004},{titulo: "isla siniestra", director: "jon", año: 2012}, {titulo: "surf", director: "charles", año: 2013}];

//- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const posterior = peliculas.filter(valor => valor.año > 2010);

//- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directores = peliculas.map((valor) => valor.director);

//- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const titulos = peliculas.map((valor) => valor.titulo);

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const listaPeliculas = directores.concat(titulos);

//- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const listaPeliculas2 = [ ...directores, ...titulos ];
