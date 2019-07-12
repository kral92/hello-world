var edad = 27;

edad += 1; //Este es el operador de asgnacion adicional, toma el valor y le suma un valor dado en la operacion
edad = edad + 1; //Este codigo hace lo mismo al de la linea anterior, el anterior codigo es la version resumida

var peso = 75;

peso -= 2; //Este es el operador de sustraccion adicional, toma el valor y le resta un valor dado en la operacion
peso = peso - 2; //Este codigo hace lo mismo de la linea anterior, el anterior codigo es la version resumida

var sandwich = 1;

peso += sandwich; /* Esta operacion lo que hace es sumar el valor de peso con el valor de sandwich y luego el
resultado asignarselo a peso */
peso = peso + sandwich; //Este codigo hace lo mismo de la linea anterior, el anterior codigo es la version resumida

var jugarAlFutbol = 5;

peso -= jugarAlFutbol; //Hasta este punto peso deberia valer 68

//Ahora usemos decimales

var precioDelVino = 200.3; //Los decimales se marcan con puntos y no con comas

var total = precioDelVino * 3; // * es el operador de multiplicacion
//El codigo anterior "total" da como resultado muchos decimales, para evitar esto, podemos redondear el resultado
var totalR = Math.round(total); //Math es un metodo interno de javascript encargado de funciones matematicas
/* Math.round() permite redondear decimales para manejar cifras mas manejables de numeros, en este caso
total vale 600.900000000001 mientras que su valor redondeado es de 601 */

//Usemos otro ejemplo
var precioDelAlmuerzo = 150.65;
var totalA = precioDelAlmuerzo * 5; //El resultado aqui es de 753.23
var totalAR = Math.round(totalA); //Al redondearse da como resultado 753

//Ahora veamos como podemos controlar decimales complejos, por ejemplo total, que tenia valor de 600.900000000001
var totalMD = total.toFixed(2); /* La funcion total.toFixed() es una funcion que llama a una variable, en este caso
total, se une a la funcion por medio del "." y el toFixed(), ademas añadimos un atributo numerico, el atributo
permite filtrar la cantidad de decimales que el valor de la variable anidada tenga, si el valor es de 2 significa
que total solo tendra dos decimales, NOTA: esta funcion regresa un valor en cadena de texto o string*/

//Podemos tomar nuestro valor numerico string y reconvertirlo en una variable de tipo numero
var totalNUM = parseFloat(totalMD); /* La funcion parseFloat toma el valor de una variable numerica de tipo string
en este caso la variable que pasamos es totalMD, y la transforma en tipo numerico*/

//Finalmente hagamos prueba de una division en javascript
var pizza = 8;
var personas = 2;
var porcionesPorPersona = pizza / personas;
//La variable porcionesPorPersona tiene como valor numero el resultado de la divicion de las anteriores 2 variables
