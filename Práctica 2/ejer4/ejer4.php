<?php

  if(isset($_POST['nombre']))
  {
    $nombre=$_POST['nombre'];
  }

  if(isset($_POST['clave']))
  {
    $contra=$_POST['clave'];
  }

  $usuario="Pedro";
  $pass="Hola";

  if(($usuario==$nombre)&&($pass==$contra))
  {
    echo "El nombre añadido es: ".$nombre.".";
    echo "La contraseña añadida es: ".$pass.".";
  }
  else
  {
    echo("Datos incorrectos.");
  }
  
?>
