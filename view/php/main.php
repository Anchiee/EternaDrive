<?php

require_once "../../config/config.php";
require_once "../../includes/model/ReadData.php";

if(empty($_SESSION["username"])) {
  echo "You are not logged in!";
  die();
}
$_SESSION["currentPage"] = $_SERVER["PHP_SELF"];
$filesData = returnFiles($_SESSION["username"]);
$userData = returnUser($_SESSION["username"]);
$profilePictureDir = "../../assets/profiles/" . $userData["profile_picture"];

?>




<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Main</title>
  <link rel="stylesheet" href="../styles/mainMenu.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Delius&family=Funnel+Display:wght@300..800&family=Host+Grotesk:ital,wght@0,300..800;1,300..800&family=Lexend:wght@100..900&family=Manrope:wght@200..800&family=Pacifico&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Rouge+Script&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>


  <nav class="horizontal-nav">
    <a href="#" class="logo"><strong>Eterna</strong>Drive</a>
    
    <form action="#" method="post" class="search-form">
      <input type="text" placeholder="Search your files" name="file-name">
      <button>
        <span class="icon">
          <i class="fa-solid fa-magnifying-glass fa-xl" style="color:#5f2ac2; cursor:pointer;"></i>
        </span>
      </button>
    </form>

    <a href="#" class="profile-picture">
      <img src="<?php echo $profilePictureDir ?>" alt="profile picture" width="55">
    </a>

    
  </nav>


  <div class="container">
    <nav class="vertical-nav">

      <form action="../../includes/controller/FormHandlerUploadFile.php" method="post" enctype="multipart/form-data" id="file-form">
        
      <label for="file-input" class="custom-file-upload">
        <i class="fa-solid fa-plus" style="font-weight:lighter;"></i>
        Add
      </label>
      <input type="file" name="file-upload" id="file-input">
        
          
      </form>


      <a href="#" class="chosen-option">
        <i class="fa-solid fa-house"></i>
        Main
      </a>
      
      <a href="#">
        <i class="fa-solid fa-star"></i>
        Favorite
      </a>

      <a href="#">
        <i class="fa-solid fa-clock"></i>
        Recent
      </a>
      
      <a href="#">
        <i class="fa-solid fa-triangle-exclamation"></i>
        Spam
      </a>

      <a href="#">
        <i class="fa-solid fa-trash"></i>
        Trash
      </a>
      
      <a href="#">
        <i class="fa-solid fa-chart-simple"></i>
        Stats
      </a>
    </nav>

    <main>
      <?php
        if(empty($filesData)) {
          echo "<div class='notify-container'>
                <img src='../../assets/images/file.png' alt='file image' width='200'>
                <h1>Oops... Nothing found!</h1>
                <p>Add some files using the add button and stop worrying about your storage.
                </div>";

        }
        else
        {
          echo "
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
              </tbody class='scrollable'>";
          foreach($filesData as $column)
          {

            echo "
              
                <tr class='file-info'>
                  <td>" . $column['file_name'] . "</td>
                  <td>" . $column["file_type"] . "</td>
                  <td>" . round($column["file_size"] / 1024 / 1024, 3) . "MB" . "</td>
                  <td>" . $column["create_date"] . "</td>
                  <td class='file-button'>
                  
                    <form action='../../includes/controller/FormHandlerDeleteFile.php' method='post' class='edit-form'>
                      <input type='hidden' name='file-id' value='" . $column["id"] . "'>" .
                      "<button class='edit-button'>
                        <i class='fa-solid fa-trash fa-lg'></i>
                      </button>
                    </form>
                  </td>

                  <td class='file-button'>
                    <form action='#' method='post' class='edit-form'>
                      <input type='hidden' name='file-id' value='" . $column["id"] . "'>" .
                      "<button class='edit-button'>
                        <i class='fa-solid fa-star fa-lg'></i>
                      </button>
                    </form>
                  </td>
                  
                  <td class='file-button'>
                    <form action='#' method='post' class='edit-form'>
                      <input type='hidden' name='file-id' value='" . $column["id"] . "'>" .
                      "<button class='edit-button'>
                        <i class='fa-solid fa-download fa-lg'></i>
                      </button>
                    </form>
                  </td>
                  
                </tr>";
          }
          echo "
                </tbody>
              </table>
            </div>";
        }
      ?>
    </main>
  </div>
  
<script src="../js/fileInput.js"></script>  
<script src="../js/main.js"></script>
</body>
</html>