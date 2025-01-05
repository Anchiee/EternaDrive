const tableRow = document.getElementsByClassName("file-info");

for (const fileElement of tableRow) {
  fileElement.addEventListener("mouseenter", () => {
    const buttons = fileElement.getElementsByClassName("file-edit");
    
    for (const buttonElement of buttons) {
      buttonElement.classList.add("file-edit-hovered");
    }
  });

  fileElement.addEventListener("mouseleave", () => {
    const buttons = fileElement.getElementsByClassName("file-edit");

    for (const buttonElement of buttons) {
      buttonElement.classList.remove("file-edit-hovered");
    }
  });
}
