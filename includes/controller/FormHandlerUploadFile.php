<?php

if($_SERVER["REQUEST_METHOD"] == "POST") 
{
  require_once "../../config/config.php";
  require_once "../model/AddData.php";
  require_once "../model/UpdateData.php";
  require_once "../model/ReadData.php";


  $fileSize = $_FILES["file-upload"]["size"];
  $username = $_SESSION["username"];
  $userData = returnUser($username);
  $userMemory = round($userData["memory_usage"] / 1024 / 1024, 2);

  if($userMemory + $fileSize / 1024 / 1024 > 500) {
    echo "File is too big, cant be added because it will extend the memory limit";
    die();
  }

  else if($userMemory < 500) {
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
    

    addMemoryUsage($username, $fileSize);
    addFile($fileName, $dir . $fileName, $userId, $fileType, $fileSize);
    die();
  }

  echo "Your memory has ran out. Delete some files";
  die();
}