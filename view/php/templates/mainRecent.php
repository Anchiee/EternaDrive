<?php 

$title = "Recent";
require "templates/main/head.php";
$filesData = returnFavoriteFiles(true, $userData["id"]);

$chosenOption[2] = "class='chosen-option'";

?>

<body>

  <?php require "templates/main/horizontalNav.php" ?>

  <div class="container">

    <?php require "templates/main/verticalNav.php" ?>
    <?php require "templates/main/mainBody.php" ?>
  </div>
  
<script src="../js/fileInput.js"></script>  
<script src="../js/main.js"></script>
</body>
</html>