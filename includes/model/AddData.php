<?php


function AddUser($username,  $password, $email)
{

  try {
    require "dbh.php";

    $query = "INSERT INTO users(username, pwd, email) VALUES(:username, :pwd, :email);";
    $stmt = $pdo->prepare($query);

    $password = password_hash($password, PASSWORD_DEFAULT);

    $stmt->bindParam(":username", $username);
    $stmt->bindParam(":pwd", $password);
    $stmt->bindParam(":email", $email);

    $stmt->execute();

    $stmt = null;
    $pdo = null;

  } catch(PDOException $e) {
    echo "Query failed:" . $e->getMessage();
    die();
  }

}