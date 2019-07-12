var nombre = "Jaina"; /* Declarar variables fuera de funciones las combierte en variables globales
una variable global puede ser usada por cualquier funcion */

/* Sin embargo si se crea una variable dentro de una funcion, esta se considera una variable local
ya que esa variable solo existe y funciona dentro de la funcion, una vez la funcion inicia, la variable
es creada, y una vez la funcion se cierra, la variable es destruida */
function nombreMayusculas1(n){ /* Las funciones pueden iniciarse con parametros, los parametros son todas
  las variables que se ven en los parentesis de la funcion, he indican que la funcion trabaja o arranca
  con dichos parametros o atributos, cuando se hace llamado a la funcion, podemos pasarle parametros en la
  invocacion de la misma funcion dentro de los parentesis
  /* Podemos crear dos tipos de variables locales en una funcion, las variables locales normales son las que
  se crean de la forma tradicional: */
  var nombrePrueba = "Thrall"; /* Esta variable que creamos es una variable local a la funcion nombreMayusculas1,
  y solo dentro de esta funcion existira y podra ser usada */

  /* Sin embargo tambien podemos usar otras variables, en este caso los parametros de inicio de la funcion cuando
  se llama a la funcion, podemos inyectar parametros adicionales como texto, numeros, o variables, en este caso
  nombreMayusculas1 se inicio con un parametro "n", "n" en realidad es la variable global "nombre" que fue
  enviada en la invocacion de la funcion, sin embargo cuando la funcion se inicia, "n" es igual al parametro enviado
  es decir que "n" dentro de la funcion "nombreMayusculas1" es igual a la variable global "nombre", lo cual da por
  sentado de que n = "Jaina" */

  // "n" tambien es una variable local por lo que una vez la funcion termina, "n" es destruida
  n = n.toUpperCase();
  console.log(n);
}

nombreMayusculas1(nombre); /* Esta linea es la invocacion de la funcion, cuando el flujo del codigo pase por esta
linea se llamara a la funcion y esta se ejecutara, pero a su vez si mandamos los parametros en los parentesis
la funcion se ejecutara con esos parametros enviados, los parametros no son mas que datos o variables que podemos
inyectar en la funcion */
