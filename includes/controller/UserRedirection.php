<?php

require_once "../../config/config.php";

$username = $_SESSION["username"];

if(empty($username))
{
  header("Location: ../../view/php/login.php");
  die();
}
else
{
  header("Location: ../../view/php/account.php");
  die();
}