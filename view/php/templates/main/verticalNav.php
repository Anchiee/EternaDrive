<nav class="vertical-nav">

  <form action="../../includes/controller/FormHandlerUploadFile.php" method="post" enctype="multipart/form-data" id="file-form">
    
    <label for="file-input" class="custom-file-upload">
      <i class="fa-solid fa-plus" style="font-weight:lighter;"></i>
      Add
    </label>
    <input type="file" name="file-upload" id="file-input">
  </form>


  <a href="./main.php" <?php echo $chosenOption[0] ?>>
    <i class="fa-solid fa-house"></i>
    Main
  </a>
  
  <a href="./mainFavorite.php" <?php echo $chosenOption[1] ?>>
    <i class="fa-solid fa-star"></i>
    Favorite
  </a>

  <a href="./mainRecent.php" <?php echo $chosenOption[2] ?>>
    <i class="fa-solid fa-clock"></i>
    Recent
  </a>
  
  <a href="#" <?php echo $chosenOption[2] ?>>
    <i class="fa-solid fa-triangle-exclamation"></i>
    Spam
  </a>
  
  <a href="#" <?php echo $chosenOption[3] ?>>
    <i class="fa-solid fa-chart-simple"></i>
    Stats
  </a>

  <section class="memory-section">
    <div class="progress-bar">
      <div class="progress-bar-percentage" style='width: <?php echo round($userData["memory_usage"] / 1024 / 1024, 2) / 500 * 100 .  '%'?>'"></div>
    </div>
    <p class="memory-info"><?php echo "Used "  . round($userData["memory_usage"] / 1024 / 1024, 2) . " MB out of 500MB"?></p>

  </section>
  


</nav>