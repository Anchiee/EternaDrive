<?php


echo "
</tbody class='scrollable'>
  <tr class='file-info'>
    <td>{{file_name}}</td>
    <td>{{file_type}}</td>
    <td>{{file_size}}</td>
    <td>{{file_date}}</td>


    <td class='file-button'>
      <form action='../../includes/controller/FormHandlerSee.php' method='get' class='edit-form'>
        <input type='hidden' name='file-name' value='{{file_name}}'>
        <button class='edit-button'>
          <i class='fa-solid fa-eye fa-lg'></i>
        </button>
      </form>
    </td>
    <td class='file-button'>
      <form action='../../includes/controller/FormHandlerDeleteFile.php' method='post' class='edit-form'>
        <input type='hidden' name='file-id' value='{{file_id}}'>
        <button class='edit-button'>
          <i class='fa-solid fa-trash fa-lg'></i>
        </button>
      </form>
    </td>
    <td class='file-button'>
      <form action='../../includes/controller/FormHandlerDownloadFile.php' method='get' class='edit-form'>
        <input type='hidden' name='file-name' value='{{file_name}}'>
        <button class='edit-button'>
          <i class='fa-solid fa-download fa-lg'></i>
        </button>
      </form>
    </td>
    <td class='file-button'>
      <form action='../../includes/controller/FormHandlerControllerFavorite.php' method='post' class='edit-form'>
        <input type='hidden' name='file-id' value='{{file_id}}'>
        <button class='edit-button'>";
        if($isFavorite) {
          echo $solidStar;
          echo "<input type='hidden' name='favorite-status' value='true'>";
        } else {
          echo $regularStar;
          echo "<input type='hidden' name='favorite-status' value='false'>";
        }
        echo "</button>";
      "</form>
    </td>
  </tr>
</tbody>
</table>
</div>
";
?>
