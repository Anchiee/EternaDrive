<?php

if($_SERVER["REQUEST_METHOD"] == "POST")
{
  require_once "../model/DeleteData.php";
  require_once "../model/ReadData.php";
  require_once "../model/UpdateData.php";
  require_once "../../config/config.php";

  $fileId = $_POST["file-id"];
  $fileInfo = returnFile($fileId);
  unlink("../../" . $fileInfo["file_path"]);
  deleteFile($fileId);
  subtractMemoryUsage($_SESSION["username"], $fileInfo["file_size"]);
  

  header("Location:" . $_SESSION['currentPage']);
  die();

}