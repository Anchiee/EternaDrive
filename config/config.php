<?php

ini_set("session.use_strict_mode", 1);
ini_set("session.use_only_cookies", 1);


session_set_cookie_params([
  "httponly" => true,
  "secure" => true,
  "domain" => "localhost",
  "path" => '/',
  "lifetime" => 1800
]);

session_start();

if(!isset($_SESSION["last-regeneration"]))
{
  session_regenerate_id(true);
  $_SESSION["last-regeneration"] = time();
}
else
{
  $timeInterval = 30 * 60;

  if(time() - $_SESSION["last-regeneration"] >= $timeInterval)
  {
    $_SESSION["last-regeneration"] = time();
    session_regenerate_id(true);
  }
}