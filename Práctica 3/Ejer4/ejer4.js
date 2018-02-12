/*Utilizando animate cambia el color inicial (al hacer click sobre estas) de todas las etiquetas h1 de un documento.*/

$(document).ready(function()
{
  $("h1").click(function()
  {
    $("h1").animate(
    {
      color: "#0040FF"
    }, 1000);
  });
});
