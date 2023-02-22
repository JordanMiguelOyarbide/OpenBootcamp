//- Un nuevo Set con los nombres de tu familia
const datos = ['jordan', 'carlos', 'jorge', 'laura']
const familia = new Set(datos);

//- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
familia.add('jordan');

//- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
familia.add('javascript');
