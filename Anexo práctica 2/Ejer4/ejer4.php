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
    echo "Bienvenido a nuestro sitio web ".$nombre.".";
  }
  else
  {
    echo("Usuario o contraseña incorrectos");
  }
?>
