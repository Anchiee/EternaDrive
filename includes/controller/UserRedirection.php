<?php

require_once "../../config/config.php";
require_once "../model/ReadData.php";

$username = $_SESSION["username"];

if(empty($username)) {
  header("Location: ../../view/php/login.php");
  die();
}

else if(isVerified($username) == 0) {
  header("Location: ../../view/php/registerCode.php");
  die();
}

header("Location: ../../view/php/main.php");
die();

