<?php

if($_SERVER["REQUEST_METHOD"] == "POST")
{
  require_once "../../config/config.php";
  require_once "../model/AddData.php";
  require_once "../model/ReadData.php";

  print_r($_FILES["file-upload"]);

  $username = $_SESSION["username"];
  $fileName = basename($_FILES["file-upload"]["name"]);


  //i didnt add '../../' because simple uploads/ would be more flexible
  $dir = "uploads/" . $username . "/";
  $targetDir = "../../" . $dir . $fileName;

  if(!is_dir("../../" . $dir)) {
    mkdir("../../" . $dir);
  }
  

  if($_FILES["file-upload"]["error"] != UPLOAD_ERR_OK) {
    echo "Error:" . $_FILES["file-upload"]["error"];
    die();
  }

  else if(file_exists($targetDir)) {
    echo "File exists.";
    die();
  }

  else if(!move_uploaded_file($_FILES["file-upload"]["tmp_name"], $targetDir)) {
    echo "Couldn't move the file";
    die();
  }



  header("Location: ../../view/php/main.php");
  $userData = returnUser($username);
  $userId = $userData["id"];

  $fileType = $_FILES["file-upload"]["type"];
  $fileSize = $_FILES["file-upload"]["size"];

  AddFile($fileName, $dir . $fileName, $userId, $fileType, $fileSize);

  die();
}