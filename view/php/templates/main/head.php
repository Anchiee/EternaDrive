<?php


require_once "../../config/config.php";
require_once "../../includes/model/ReadData.php";

if(empty($_SESSION["username"])) {
  echo "You are not logged in!";
  die();
}

//used in process when being redirect to the same page where the file has been deleted
$_SESSION["currentPage"] = $_SERVER["PHP_SELF"];

$filesData = returnFiles($_SESSION["username"]);
$userData = returnUser($_SESSION["username"]);
$profilePictureDir = "../../assets/profiles/" . $userData["profile_picture"];

// corresponds to chosen option class in horizontal nav bar eg. chosenOption[0] would be main, chosenOption[1] would be favorites etc.
$chosenOption = ["", "", "", ""];


$tableHead = "

  <h1>My disk</h1>
  <div class='table-wrapper'>
    <table>
      <thead>
        <tr>
          <th>File name</th>
          <th>File type</th>
          <th>File size</th>
          <th>Creation date</th>
        </tr>
      </thead>
";

$tableBody = "";
$fileId = "";
$fileName = "";
$fileType = "";
$fileSize = "";
$fileDate = "";
$isFavorite = "";

$regularStar = '<i class="fa-regular fa-star fa-lg"></i>';
$solidStar = '<i class="fa-solid fa-star fa-lg"></i>';

if(!empty($filesData)) {

  foreach($filesData as $column) {
    $fileId = $column["id"];
    $fileName = $column["file_name"];
    $fileType = $column["file_type"];
    $fileSize = round($column["file_size"] / 1024 / 1024, 2);
    $fileDate = $column["create_date"];
    $isFavorite = $column["is_favorite"];
  }
}
$templateContent = file_get_contents(__DIR__ . "/tableBody.php");

$templateContent = str_replace("{{file_id}}", $fileId, $templateContent);
$templateContent = str_replace("{{file_name}}", $fileName, $templateContent);
$templateContent = str_replace("{{file_type}}", $fileType, $templateContent);
$templateContent = str_replace("{{file_size}}", $fileSize, $templateContent);
$templateContent = str_replace("{{file_date}}", $fileDate, $templateContent);

$tableBody = $templateContent;

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo $title ?></title>
  <link rel="stylesheet" href="../styles/mainMenu.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Delius&family=Funnel+Display:wght@300..800&family=Host+Grotesk:ital,wght@0,300..800;1,300..800&family=Lexend:wght@100..900&family=Manrope:wght@200..800&family=Pacifico&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Rouge+Script&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>