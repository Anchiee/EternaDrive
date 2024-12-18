<?php


function userExists($username)
{

  try {

    require_once "dbh.php";

    $query = "SELECT username FROM users WHERE username = :username;";
    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":username", $username);
    $stmt->execute();

    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    $stmt = null;
    $pdo = null;

    return !empty($result);

  } catch(PDOException $e) {
    return "Query failed:" . $e->getMessage();
  }

}