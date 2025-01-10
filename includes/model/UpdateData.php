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
    $query = "UPDATE files SET is_favorite = true WHERE id = :id";
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

    $query = "UPDATE files SET is_favorite = false WHERE id = :id;";
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

function addMemoryUsage($username, $fileSize)
{
  try {
    require "dbh.php";
    require_once "ReadData.php";

    $userData = returnUser($username);

    $oldMemoryUsage = $userData["memory_usage"];
    $newMemoryUsage = $oldMemoryUsage + $fileSize;

    $query = "UPDATE users SET memory_usage = :newMemoryUsage WHERE username = :username;";
    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":newMemoryUsage", $newMemoryUsage);
    $stmt->bindParam(":username", $username);

    $stmt->execute();

    $stmt = null;
    $pdo = null;

  } catch(PDOException $e) {
    return "Query failed:" . $e->getMessage();
  }
}


function subtractMemoryUsage($username, $fileSize)
{
  try {
    require "dbh.php";
    require_once "ReadData.php";

    $userData = returnUser($username);

    $oldMemoryUsage = $userData["memory_usage"];
    $newMemoryUsage = $oldMemoryUsage - $fileSize;

    $query = "UPDATE users SET memory_usage = :newMemoryUsage WHERE username = :username;";
    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":newMemoryUsage", $newMemoryUsage);
    $stmt->bindParam(":username", $username);

    $stmt->execute();

    $stmt = null;
    $pdo = null;

  } catch(PDOException $e) {
    return "Query failed:" . $e->getMessage();
  }
}