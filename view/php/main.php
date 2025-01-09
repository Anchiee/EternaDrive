

<?php 

$title = "Main";
require "templates/main/head.php";
$chosenOption[0] = "class='chosen-option'";

?>



<body>

  <?php require "templates/main/horizontalNav.php" ?>

  <div class="container">

    <?php require "templates/main/verticalNav.php" ?>
    <?php require "templates/main/fileBody.php" ?>
    
  </div>
  
<script src="../js/fileInput.js"></script>  
<script src="../js/main.js"></script>
</body>
</html>