var nombre = "Paulina", edad = 28; /* Javascript permite declarar varias variables de distintos tipos
en una misma linea */

function imprimirEdad(n, e){
  console.log(`${n} tiene ${e} años`); /* Las comillas inclinadas son la manera en la que podemos meter
  valores de variables en una cadena de texto para el log de la consola, si usamos otras comillas como
  comillas simples o comillas dobles, solo imprimira cadenas de texto o string*/
  console.log(n + " tiene " + e + " años"); /* Este codigo de aqui es otra manera de realizar la
  anterior linea de console.log, ambos son validos, pero la primera forma es mas facil*/
}

imprimirEdad(nombre, edad);
