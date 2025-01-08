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

  curl_close($ch);

  $finfo = finfo_open(FILEINFO_MIME_TYPE);
  $mimeType = finfo_buffer($finfo, $fileData);

  finfo_close($finfo);
  curl_close($ch);

  header("Content-Description: File Transfer");
  header("Content-Type: $mimeType");
  header("Content-Disposition: attachment; filename=$fileName");
  header("Content-Transfer-Encoding: binary");
  header("Content-Length:" . strlen($fileData));
  header("Cache-Control: must-revalidate");
  header("Expires: 0");

  echo $fileData;
}