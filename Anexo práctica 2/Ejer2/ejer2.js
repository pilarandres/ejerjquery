/*Modifica el ejercicio anterior para que en lugar mostrar el mensaje de cargando con un alert
aparezca alguna imagen típica de carga de Ajax. Nota: Si no da tiempo a ver su utilidad se
puede cambiar la carga de un fichero de texto por algún programa en php que haga que el
tiempo de espera sea mayor.*/

$(document).ready(function()
{
  $("#mostrar_fichero").click(function()
  {
    $.ajax(
    {
      // la URL para la petición
      url : 'ejer2.php',
      // funciones de devolución a ejecutar
      // en caso que la petición haya sido
      // satisfactoria, con error y/o completada
      beforeSend:function()
      {
        $("#contenedor").append("<img src='cargando.gif'>");
      },
      success: function(data)
      {
        $("#contenedor").html(data);
        alert('Petición realizada satisfactoriamente');
      },
      error: function(jqXHR, status, error)
      {
        alert('Disculpe, existió un problema');
      },
      complete: function(jqXHR, status)
      {
        alert('Petición realizada');
      }
    });
  });
});
