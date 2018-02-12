/*Crea una página que nos muestre el contenido de un fichero XML utilizando
el método $.get al pinchar sobre el botón “Mostrar fichero XML”.*/

$(document).ready(function()
{
  $("#mostrar_fichero").click(function()
  {
    $.get("ejer3.xml", function (xml)
    {
        $(xml).find("page").each(function()
        {
           var name=$(this).find('name').text();
           var description=$(this).find('description').text();
           var url=$(this).find('url').text();

           $("#contenedor").append("Nombre: " + name + " descripcion: " + description + " URL: " + url);
        });
    });
  });
});
