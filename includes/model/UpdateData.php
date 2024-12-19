<?php

function verifyUser($username)
{
  require_once "dbh.php";

  try {
    $query = "UPDATE users SET verified = 1 WHERE username = :username";
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