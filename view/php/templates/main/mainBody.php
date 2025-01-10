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
          echo $tableHead;
          echo $tableBody;
        }
              
                
      ?>
    </main>