<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>Prueba de prompt y confirm</title>
  </head>
  <body>
    <h1>Pruebas de Javascript!</h1>
    <p>Precione el siguiente boton para mostrar una funcionalidad:</p>
    <button onclick="activar()">Activar Función</button>

  <script>
  function activar()
  {
    respuesta = prompt("¿Que actividad desea Ejecutar?");
    if (respuesta == null || respuesta == "")
    {
      return alert("Debe proporcionar una respuesta valida");
    } else {
      respuesta2 = confirm("La informacion que usted selecciono es: "+respuesta+" ?");
      if (respuesta2 == false)
      {
        return alert("La Información que se selecciono fue erronea.");
      } else {
        return alert("La Información que se selecciono fue correcta.");
      }
    }
  }
  </script>
  </body>
</html>
