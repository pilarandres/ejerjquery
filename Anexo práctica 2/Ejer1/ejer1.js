/*Modificar el ejercicio 1 de la práctica anterior para que muestre con un alert el mensaje de
cargando antes de traer el fichero y con otro alert el mensaje de error si no se ha podido cargar
correctamente el fichero.*/

$(document).ready(function()
{
  $("#mostrar_fichero").click(function()
  {
    $.ajax(
    {
      // la URL para la petición
      url : 'ejer1.txt',
      // funciones de devolución a ejecutar
      // en caso que la petición haya sido
      // satisfactoria, con error y/o completada
      beforeSend:function()
      {
        alert ("cargando");
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
