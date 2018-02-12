/*Sobre un fondo de color azul muestra en el centro de la pantalla un mensaje con el texto
“Bienvenidos a esta aplicación” que cambie de transparente a opaco al pinchar sobre el botón
“Saludo” y a la inversa, de opaco a transparente al pinchar sobre el botón “Despedida”.*/

$(document).ready(function()
{
  $("#saludo").click(function()
  {
    $("#centrado").fadeIn(1000);
  });

  $("#despedida").click(function()
  {
    $("#centrado").fadeOut(1000);
  });
});
