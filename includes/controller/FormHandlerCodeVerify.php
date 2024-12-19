<?php

if($_SERVER["REQUEST_METHOD"] == "POST")
{

  require_once "../../config/config.php";
  require_once "../model/UpdateData.php";

  $digit1 = htmlspecialchars($_POST["digit1"]);
  $digit2 = htmlspecialchars($_POST["digit2"]);
  $digit3 = htmlspecialchars($_POST["digit3"]);
  $digit4 = htmlspecialchars($_POST["digit4"]);

  if(empty($digit1) || empty($digit2) || empty($digit3) || empty($digit4)) {
    echo "Do not leave the input empty";
    die();
  }
  else if(strlen($digit1) > 1 || strlen($digit2) > 1 || strlen($digit3) > 1 || strlen($digit4) > 1 ) {
    echo "Input can't be greater than 1";
    die();
  }
  else if($digit1 < 0 || $digit2 < 0 || $digit3 < 0 || $digit4 < 0) {
    echo "Input can't be negative";
    die();
  }

  $code = strval($digit1) . strval($digit2) . strval($digit3) . strval($digit4);

  if($code !== $_SESSION["code"]) {
    echo "Codes do not match. Try again.";
    die();
  }

  verifyUser($_SESSION["username"]);
  die();

}