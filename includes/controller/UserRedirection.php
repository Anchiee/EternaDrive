<?php

require_once "../../config/config.php";
require_once "../model/ReadData.php";

$username = $_SESSION["username"];

if(empty($username)) {
  header("Location: ../../view/php/login.php");
  die();
}

else if(!isVerified($username) || !empty($username)) {
  header("Location: ../../view/php/registerCode.php");
  die();

}

else {
  header("Location: ../../view/php/account.php");
  die();
}