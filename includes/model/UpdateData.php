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


function setFavorite($fileId)
{
  require "dbh.php";

  try {
    $query = "UPDATE files SET isFavorite = true WHERE id = :id";
    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":id", $fileId);
    $stmt->execute();

    $pdo = null;
    $stmt = null;
    die();


  } catch(PDOException $e) {
    echo "Query failed:" . $e->getMessage();
    die();
  }

}

function unsetFavorite($fileId)
{
  try {
    require_once "dbh.php";

    $query = "UPDATE files SET isFavorite = false WHERE id = :id;";
    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":id", $fileId);
    $stmt->execute();

    $stmt = null;
    $pdo = null;
    die();

  } catch(PDOException $e) {
    return "Query failed:" . $e->getMessage();
  }

}