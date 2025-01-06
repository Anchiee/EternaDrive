<?php


function deleteFile($id) 
{
  try {

    require "dbh.php";

    $query = "DELETE FROM files WHERE id = :id;";
    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":id", $id);
    $stmt->execute();

    $pdo = null;
    $stmt = null;

  } catch(PDOException $e) {
    return "Query failed:" . $e->getMessage();
  }
}