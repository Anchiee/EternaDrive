

<?php 

$title = "Main";
require "templates/main/head.php";
$chosenOption[0] = "class='chosen-option'";

$regularStar = '<i class="fa-regular fa-star fa-lg"></i>';
$solidStar = '<i class="fa-solid fa-star fa-lg"></i>';


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