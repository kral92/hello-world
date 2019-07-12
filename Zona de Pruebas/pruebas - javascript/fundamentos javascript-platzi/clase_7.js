//Tomemos algunos de los ejemplos de la clase anterior
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

//Y continuaremos

//ACTIVIDAD
//Cargar un objeto en la funcion y tomar su nombre y edad, fomar un mensaje
function describirPersona1(objeto){
  console.log(`Hola, me llamo ${objeto.nombre} y tengo ${objeto.edad} años.`);
}

describirPersona1(illidan);
describirPersona1(thyrande);

//Trabajando con dos o mas objetos
function describirPersona2(objeto1, objeto2){
  console.log(`Mi nombre es ${objeto1.nombre}, fui una vez una antigua guardiana del bosque pero... fui asesinada por ${objeto2.nombre}...\nHan pasado ${objeto2.edad} años, mi espiritu aun esta vivo, y aun busco venganza...`);
}

describirPersona2(slyvanas, illidan);
