/*Utilizando el método queue para acceder a la cola de efectos,
encola los siguientes efectos(por este orden) sobre una imagen
(puede ser el cubo creado en el ejercicio 3).

-animate
-css
-animate

Entre cada efecto utilizar un delay para que se pueda ver mejor cada efecto*/

$(document).ready(function()
{
  $("#iniciar").click(function()
  {
    imagen=$("#img");

    imagen.animate({"width": "80px"}, 1000);

    imagen.queue(function()
    {
      $(this).css(
      {
        "border": "3px solid #339",
      });

      $("#iniciar").text("Acabo de ponerle el borde... ");
      $(this).dequeue();
    });

    imagen.delay(1000);

    imagen.animate({"height": "200px"}, 2000);

    imagen.queue(function(continua)
    {
      $(this).css(
      {
        "border": "0px"
      });

      $("#iniciar").text("Quitado el borde... ");
      continua();
    });

    imagen.delay(1000);

    imagen.animate(
    {
      "height": "50px",
      "width": "400px"
    }, 1000);
  });

  $("#parar").click(function()
  {
    $("#img").stop(true);
  });
});
