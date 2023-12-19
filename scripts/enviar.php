<?php
if($_POST){
    $nombre = $_POST['name'];
    $email = $_POST['email'];
    $mensaje = $_POST['message'];

    // Aquí colocas tu dirección de correo
    $destino = "jhm_e@outlook.com"; 
    $asunto = "Mensaje de Portafolio";
    $contenido = "Nombre: " . $nombre . "\nEmail: " . $email . "\nMensaje: " . $mensaje;
    
    mail($destino, $asunto, $contenido);
}
?>