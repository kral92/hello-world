var jaina = { //Esto es un objeto, el objeto jaina funciona como un repositorio de datos
  nombre: 'Jaina', //Dentro de un objeto estan los atributos del objeto y estos se tratan como variables
  apellido: 'Proudmoore',
  edad: 31
}

var thrall = { //Este es nuestro segundo objeto, podemos apreciar de que este objeto tambien tiene atributos similares
  nombre: 'Thrall', //Es decir tiene un atributo nombre, apellido y edad, igual que los atributos del objeto jaina
  apellido: 'Frostwolf', /* Sin embargo los atributos tienen distintos valores, esto se debe a que los atributos de un
  objeto pertenecen a un objeto y da igual si existen otros atributos de nombres iguales en diferentes objetos, todos
  se tratan como variables distintas asociadas a un objeto*/
  edad: 40
}
//Creemos un par de objetos mas para probar en varias funciones
var baine = {
  nombre: 'Baine',
  apellido: 'Bloodhoof',
  edad: 29
}

var arthas = {
  nombre: 'Arthas',
  apellido: 'Menethil',
  edad: 32
}

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

//Tomamos la funcion de la clase anterior para probar los objetos
function nombreMayusculas1(n){
  /* En este ejemplo usamos la misma variable que recibimos del parametro (n) y decimos que el valor de ese parametro pasado
  se imprimira en mayusculas y dicho valor sera el nuevo valor del "n" */
  n = n.toUpperCase();
  //Notemos que no declaramos n como "var n =" porque ya existe, se crea con la funcion
  console.log(n);
}
/* Ahora invocaremos las funciones, sin embargo queremos que la funcion trabaje solo con el nombre del objeto y no con
 otros datos, para mandar especificamente un atributo de un objeto, primero tomamos el nombre del objeto, le añadimos
 un punto y luego el nombre del atributo, de esta manera es que podemos pasar o usar dichos atributos fuera del objeto */
nombreMayusculas1(jaina.nombre); //Aqui enviamos el valor del atributo nombre del objeto jaina
nombreMayusculas1(thrall.nombre); //Aqui enviamos el valor del atributo nombre del objeto thrall

//Tambien podemos pasar el objeto a una funcion y despues dentro de ella especificamos que atributo del objeto usaremos
function nombreMayusculas2(n){
  /* En este caso "n" en realidad tiene como valor todo el objeto que pasamos a la funcion, asi que debemos procesar el
  objeto para poder trabajar con uno de los atributos del objeto*/
  var e = n.nombre.toUpperCase();
  /* Aqui tomamos el valor del atributo del objeto, toUpperCase lo combierte en mayusculas y luego ese resultado de
  la conversion lo guardamos en una variable, dicha variable es la que imprimiremos en consola, pero esta variable
  a diferencia del anterior ejemplo no estaba creada, asi que si requerimos crearla con "var e =" */
  console.log(e);
}

nombreMayusculas2(malfurion);
nombreMayusculas2(arthas);

//Podemos tambien hacer que en una sola instruccion o linea de codigo, se ejecute todo el proceso de la siguiente forma
function nombreMayusculas3(n){
  console.log(n.nombre.toUpperCase());
  /* En este caso se maneja todo como si fuera una multiplicacion matematica, se resuelve todo lo que esta dentro del
  parentesis y luego se ejecuta lo de afuera, adentro, n tiene el valor del objeto pasado como parametro de la funcion y
  seleccionamos el nombre como atributo de ese objeto pasado, le aplicamos la funcion toUpperCase y luego ese resultado
  lo ejecuta console.log enviando el resultado a consola*/
}

nombreMayusculas3(slyvanas);
nombreMayusculas3(baine);

/* Podemos tambien filtrar los atributos del objeto que estemos pasando, de modo que la especificacion de que atributo
del objeto enviado usaremos la hacemos directamente en los parametros de la funcion al iniciarse usando llaves en las
que colocaremos los atributos del objeto a filtrar, solo los atributos del objeto especificado seran invocados */
function nombreMayusculas4({ nombre }){
  console.log(nombre.toUpperCase());
}

nombreMayusculas4(thyrande);
nombreMayusculas4(illidan);
//Incluso podemos enviar un objeto creado directamente en la invocacion de la funcion
nombreMayusculas4({ nombre: 'Anduin' }); /* Pero debemos tener en cuenta de pasar un objeto y atributos que concuerden
con el filtro de nuestra funcion de ejemplo o funcion de filtro "nombreMayusculas4" ya que dicha funcion esta trabajando
solo con atributos "nombre" de cuaqluier objeto, si pasamos un objeto o creamos un objeto directo, y dicho objeto no
posee el atributo "nombre" la funcion dara error */

function nombreMayusculas5(n){
  var { nombre } = n;
  //Esta es otra manera de tomar el atributo del objeto que estamos recibiendo por la funcion
  console.log(nombre.toUpperCase());
}

nombreMayusculas5(malfurion);
nombreMayusculas5(thyrande);
