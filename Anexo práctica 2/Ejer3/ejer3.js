/*Utilizando el método $.ajax cargar un script y ejecutarlo.*/

var confirmar=confirm("Aprieta un botón.");

if (confirmar==true)
{
  $('#contenedor').html("Has seleccionado aceptar.");
}
else
{
  $('#contenedor').html("Has seleccionado cancelar");
}
