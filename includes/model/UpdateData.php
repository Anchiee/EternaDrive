<?php

function verifyUser($username)
{
  require "dbh.php";

  try {
    $query = "UPDATE users SET verified = true WHERE username = :username";
    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":username", $username);
    $stmt->execute();

    $pdo = null;
    $stmt = null;
    die();


  } catch(PDOException $e) {
    echo "Query failed:" . $e->getMessage();
    die();
  }
}