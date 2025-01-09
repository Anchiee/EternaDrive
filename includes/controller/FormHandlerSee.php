<?php

if($_SERVER["REQUEST_METHOD"] == "GET")
{

  require_once "../../config/config.php";

  $fileName = rawurlencode($_GET["file-name"]);

  $url = "http://localhost/eternadrive/uploads/" . $_SESSION["username"] . "/$fileName";
  $ch = curl_init($url);

  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_HEADER, 0);

  $fileData = curl_exec($ch);

  $finfo = finfo_open(FILEINFO_MIME_TYPE);
  $mimeType = finfo_buffer($finfo, $fileData);

  curl_close($ch);
  finfo_close($finfo);

  header("Content-Description: File Transfer");
  header("Content-Type: $mimeType");
  header("Content-Length:" . strlen($fileData));


  echo $fileData;

}