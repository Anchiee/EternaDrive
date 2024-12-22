<?php



if($_SERVER["REQUEST_METHOD"] == "POST")
{
  require_once "../model/ReadData.php";
  require_once "../model/Code.php";
  require_once "SendEmail.php";
  require_once "../../config/config.php";


  $username = htmlspecialchars($_POST["username"]);
  $password = htmlspecialchars($_POST["password"]);


  if(empty($username) || empty($password)) {
    echo "Do not leave the empty input.";
    die();
  }

  else if(strlen($password) < 6) {
    echo "Password must be at least 6 characters.";
    die();
  }

  $result = returnUser($username);
  $email = $result["email"];

  if(!$result || !password_verify($password, $result["pwd"])) {
    echo "Wrong username/password. Try again.";
    die();
  }
  else if(isVerified($username) == 0) {
    $code = createCode();
    $_SESSION["code"] = $code;
    $_SESSION["username"] = $username;
    header("Location: ../../view/php/registerCode.php");
    sendEmail($email, $username, $code);
    
    die();
  }

  $_SESSION["username"] = $username;
  header("Location: ../../view/php/main.php");
  die();

}