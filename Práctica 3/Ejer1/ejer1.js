/*Mediante botones haz que se puedan aplicar todos los efectos
(básicos, fundido, deslizamiento, animate) sobre una imagen.
Ejemplo: botón hide (al pinchar sobre él se ocultará la imagen, así con el resto de efectos)*/

$(document).ready(function()
{
  //Show
  $("#efecto_show").click(function()
  {
    $("#guitarra").show("slow");
  });

  //hide
  $("#efecto_hide").click(function()
  {
    $("#guitarra").hide("slow");
  });

  //animate
  $("#efecto_animate").click(function()
  {
    $("#guitarra").animate({height: "toggle",
                            opacity: "toggle"},
                            "slow" );
  });

  //toggle
  $("#efecto_toggle").click(function()
  {
    $("#guitarra").toggle(1000);
  });

  //fadeIn
  $("#efecto_fadein").click(function()
  {
    $("#guitarra").fadeIn(1000);
  });

  //fadeOut
  $("#efecto_fadeout").click(function()
  {
    $("#guitarra").fadeOut(1000);
  });

  //fadetoggle
  $("#efecto_fadetoggle").click(function()
  {
    $("#guitarra").fadeToggle("slow","linear");
  });

  //fadeto
  $("#efecto_fadeto").click(function()
  {
    $("#guitarra").fadeTo("slow",0.33);
  });

  //slideup
  $("#efecto_slideup").click(function()
  {
    $("#guitarra").slideUp("slow");
  });

  //slideDown
  $("#efecto_slidedown").click(function()
  {
    $("#guitarra").slideDown("slow");
  });

  //slidetoogle
  $("#efecto_slidetoggle").click(function()
  {
    $("#guitarra").slideToggle("slow");
  });

});
