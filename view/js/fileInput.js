const fileInput = document.getElementById("file-input");
const fileForm = document.getElementById("file-form");

fileInput.addEventListener("change", () => {
  if(fileInput.files.length > 0) {
    fileForm.submit();
  }
});