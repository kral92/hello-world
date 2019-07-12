//Volvemos a tomar los ejemplos de la clase anterior
var slyvanas = {
  nombre: 'Slyvanas',
  apellido: 'Windrunner',
  edad: 65
}

var malfurion = {
  nombre: 'Malfurion',
  apellido: 'Stormrage',
  edad: 15000
}

var thyrande = {
  nombre: 'Thyrande',
  apellido: 'Wishperwind',
  edad: 15000
}

var illidan = {
  nombre: 'Illidan',
  apellido: 'Stormrage',
  edad: 15000
}

/* Cuando pasamos objetos como parametros para funciones, podemos cambiar la informacion del objeto o en este caso en
alguno de sus atributos*/
//Primero mostremos el objeto original en consola
console.log(illidan);
//Ahora cambiemos el contenido del objeto con la siguiente funcion
function rejuvenecerPersonaje1(objeto, tiempo){
  objeto.edad -= tiempo;
  console.log(`${objeto.nombre} a viajado atras en el tiempo unos ${tiempo} años y ahora tiene ${objeto.edad} años de edad...`);
}
rejuvenecerPersonaje1(illidan, 5);
/* A partir de esta funcion, el objeto illidan cambio un atributo, podemos comprobarlo consultando nuevamente al objeto*/
console.log(illidan);

console.log("_____________________________________"); //Esto es un simple separador en la consola...

/* Pero si solo pasamos atributos de objetos como parametros de funciones, lo que estamos pasando no cambiara al objeto
ya que estamos pasando una referencia*/
//Usemos a otro objeto y hagamos el mismo ejercicio anterior, primero mostramos por consola el objeto
console.log(malfurion);
//Ahora pasemos atributos de objetos parametros y intentemos cambiar algo
function rejuvenecerPersonaje2(nombre, edad, tiempo){
  edad -= tiempo;
  console.log(`${nombre} a viajado atras en el tiempo unos ${tiempo} años y ahora tiene ${edad} años de edad...`)
}
//Ahora ejecutamos la funcion
rejuvenecerPersonaje2(malfurion.nombre, malfurion.edad, 500);
//Y finalmente mostramos el estado actual del objetos
console.log(malfurion);
/* Al volver a consultar el objeto podemos ver que pese a que en la funcion reducimos la edad del atributo
el objeto original no ha cambiado, esto se debe a que lo que modificamos no fue el objeto sino una referencia
del objeto, en concreto una referencia del atributo de un objeto y no el objeto mismo, un objeto solo puede
cambiarse en una funcion si el objeto mismo es mandado como parametro de funcion*/
