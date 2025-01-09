<main>
      <?php
        $regularStar = '<i class="fa-regular fa-star fa-lg"></i>';
        $solidStar = '<i class="fa-solid fa-star fa-lg"></i>';
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
                    <form action='../../includes/controller/FormHandlerSee.php' method='get' class='edit-form'>
                      <input type='hidden' name='file-name' value='" . $column["file_name"] . "'>" .
                      "<button class='edit-button'>
                        <i class='fa-solid fa-eye fa-lg'></i>
                      </button>
                    </form>
                  </td>
                  <td class='file-button'>
                  
                    <form action='../../includes/controller/FormHandlerDeleteFile.php' method='post' class='edit-form'>
                      <input type='hidden' name='file-id' value='" . $column["id"] . "'>" .
                      "<button class='edit-button'>
                        <i class='fa-solid fa-trash fa-lg'></i>
                      </button>
                    </form>
                  </td>

                  <td class='file-button'>
                    <form action='../../includes/controller/FormHandlerDownloadFile.php' method='get' class='edit-form'>
                      <input type='hidden' name='file-name' value='" . $column["file_name"] . "'>" .
                      "<button class='edit-button'>
                          <i class='fa-solid fa-download fa-lg'></i>
                        </button>
                      </form>
                  </td>
                  
                  <td class='file-button'>
                    <form action='../../includes/controller/FormHandlerControllerFavorite.php' method='post' class='edit-form'>
                      <input type='hidden' name='file-id' value='" . $column["id"] . "'>" .
                      "<button class='edit-button'>";
                        if($column["is_favorite"]) {
                          echo $solidStar . "</button>";
                          echo "<input type='hidden' name='favorite-status' value='true'>";
                        }
                        else {
                          echo $regularStar . "</button>";
                          echo "<input type='hidden' name='favorite-status' value='false'>";
                        }
                      echo "</button>
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