<?php

if($_SERVER["REQUEST_METHOD"] == "POST")
{
  require_once "../model/UpdateData.php";
  require_once "../../config/config.php";

  $fileId = $_POST["file-id"];
  $status = $_POST["favorite-status"];

  header("Location:" . $_SESSION["currentPage"]);

  if($status == "false") {
    setFavorite($fileId);
  } 
  else {
    unsetFavorite($fileId);
  }

  die();
}