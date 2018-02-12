/* Introducir el nombre de un usuario y su clave. Validarlo en el servidor,
si el usuario es Pedroy la contraseña es Hola que salga un mensaje de validación correcta
y si los datos no son correctos que salga otro mensaje diciendo que los datos no son validos.
Utilizar el método $.post.*/

$(document).ready(function()
{
  $("#boton").click(function()
  {
    var name=$("#nombre").val();
    var pass= $("#clave").val();

    $.post("ejer4.php", {nombre: name, clave: pass}, function(respuesta)
    {
        $("#div1").html(respuesta);
    });
  });
});
