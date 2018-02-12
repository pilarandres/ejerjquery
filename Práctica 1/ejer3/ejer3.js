$(document).ready(function()
{
  $("input[type=radio]").change(function()
  {
    var color=$("input[type=radio][name=color]:checked").val();
    $("#texto").css("color",color);
  });
});
