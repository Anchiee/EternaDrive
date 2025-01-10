<?php


function addUser($username,  $password, $email)
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


function addFile($fileName, $filePath, $userId, $type, $size)
{
  try {

    require "dbh.php";

    $query = "INSERT INTO files(file_name, file_path, user_id, file_type, file_size) VALUES(:file_name, :file_path, :user_id,
    :file_type, :file_size);";

    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":file_name", $fileName);
    $stmt->bindParam(":file_path", $filePath);
    $stmt->bindParam(":user_id", $userId);
    $stmt->bindParam(":file_type", $type);
    $stmt->bindParam(":file_size", $size);

    $stmt->execute();

    $stmt = null;
    $pdo = null;
    
    die();

  } catch(PDOException $e) {
    return "Query failed:" . $e->getMessage();
  }
}

