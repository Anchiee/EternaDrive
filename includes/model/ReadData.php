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

function returnUser($username)
{
  try {

    require "dbh.php";

    $query = "SELECT * FROM users WHERE username = :username;";
    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":username", $username);
    $stmt->execute();

    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    $stmt = null;
    $pdo = null;

    return $result;

  } catch(PDOException $e) {
    return "Query failed:" . $e->getMessage();
  }

}

function isVerified($username)
{
  try {

    require "dbh.php";

    $query = "SELECT verified FROM users WHERE username = :username;";
    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":username", $username);
    $stmt->execute();

    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    $stmt = null;
    $pdo = null;

    return $result["verified"];

  } catch(PDOException $e) {
    return "Query failed:" . $e->getMessage();
  }
}


function returnFiles($username)
{
  try {
    require_once "dbh.php";

    $userData = returnUser($username);
    $id = $userData["id"];

    $query = "SELECT * FROM files WHERE user_id = :userID;";
    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":userID", $id);
    $stmt->execute();

    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $stmt = null;
    $pdo = null;

    if(empty($result)) {
      return false;
    }
    
    return $result;

  } catch(PDOException $e) {
    return "Error occured:" . $e->getMessage();
  }
   
}


function returnFile($fileId) 
{
  try {
    require_once "dbh.php";

    $query = "SELECT * FROM files WHERE id = :id;";
    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":id", $fileId);
    $stmt->execute();

    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    $stmt = null;
    $pdo = null;
    
    return $result;

  } catch(PDOException $e) {
    return "Error occured:" . $e->getMessage();
  } 
}


function returnFavoriteFiles($favoriteStatus, $userId)
{
  try {

    require "dbh.php";

    $query = "SELECT * FROM files WHERE is_favorite = :favoriteStatus AND user_id = :userId;";
    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":favoriteStatus", $favoriteStatus);
    $stmt->bindParam(":userId", $userId);

    $stmt->execute();

    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $stmt = null;
    $pdo = null;

    return $result;

  } catch(PDOException $e) {
    return "Query failed:" . $e->getMessage();
  }
  
}