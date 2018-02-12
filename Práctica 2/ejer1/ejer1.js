/*Crea una página que nos muestre el contenido de un fichero de texto utilizando
$.ajax al pinchar sobre el botón “Mostrar fichero de texto”.*/

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
      success: function(data)
      {
        $("#contenedor").html(data);
        alert('Petición realizada satisfactoriamente');
      },
      error: function(jqXHR, status, error)
      {
        alert('Disculpe, existió un problema ' + error);
      },
      complete: function(jqXHR, status)
      {
        alert('Petición realizada');
      }
    });
  });
});
