/*Crea una página que utilizando el método $.post  pase  uno o dos parámetros
a un fichero php y nos devuelva un resultado.*/

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
