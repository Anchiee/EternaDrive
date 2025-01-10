<?php

if($_SERVER["REQUEST_METHOD"] == "POST")
{

  require_once "../model/ReadData.php";
  require_once "../model/AddData.php";
  require_once "../model/Code.php";
  require_once "../../config/config.php";
  require_once "SendEmail.php";

  $username = htmlspecialchars($_POST["username"]);
  $password = htmlspecialchars($_POST["password"]);
  $confirmPassword = htmlspecialchars($_POST["confirmPassword"]);
  $email = htmlspecialchars($_POST["email"]);


  if(empty($username) || empty($password) || empty($confirmPassword) || empty($email)) {
    echo "Do not leave the empty input.";
    die();
  }

  else if(strlen($password) < 6 || strlen($confirmPassword) < 6) {
    echo "Password must be at least 6 characters.";
    die();
  }

  else if($password !== $confirmPassword) {
    echo "Passwords do not match. Try again.";
    die();
  }
  
  else if(userExists($username)) {
    echo "User exists.";
    die();
  }

  $_SESSION["username"] = $username;
  $code = createCode();

  $_SESSION["code"] = $code;

  header("Location: ../../view/php/registerCode.php");
  addUser($username, $password, $email);
  sendEmail($email, $username, $code);
  header("Location: ../../view/php/main.php");
  die();
  


}