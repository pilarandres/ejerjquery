/*En la pantalla debe aparecer un cubo que se mueva haciendo la trayectoria de un cuadrado.
En la página habrán dos botones uno será “Parar Efecto” que parará todos los efectos que tenga asignado
el cubo y el otro será “Iniciar Efecto” que hará  que se reanude su movimiento.*/

$(document).ready(function()
{
  $("#iniciar").click(function()
  {
    switch(contador)
    {
      case 0:
        derecha();
      break;

      case 1:
        abajo();
      break;

      case 2:
        izquierda();
      break;

      case 3:
        arriba();
      break;

      default:
        contador=0;
      derecha();
    }
  });

  $("#parar").click(function()
  {
    $("#img").stop(true);
  });

  var contador=0;

  function derecha()
  {
    $('#img').animate({'margin-left':'150px'},1000, function()
    {
      abajo();
      contador++;
    });
  };

  function abajo()
  {
    $('#img').animate({'margin-top':'150px'},1000,function()
    {
      izquierda();
      contador++;
    });
  };

  function izquierda()
  {
    $('#img').animate({'margin-left':'0px'},1000,function()
    {
      arriba();
      contador++;
    });
  };

  function arriba()
  {
    $('#img').animate({'margin-top':'0px'},1000,function()
    {
      contador++;
    });
  };
});
