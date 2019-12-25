function updateContainer() {
  let container = document.querySelector(".flex-container");
  console.log("flexContainer.classList before: ", container.classList);
  const buttonsSelected = document.querySelectorAll("button.selected");
  let containerClass = "flex-container";
  buttonsSelected.forEach(
    button =>
      (containerClass += ` ${button.parentElement.title}-${button.innerText}`)
  );
  container.className = containerClass;
  console.log("flexContainer.classList after: ", container.classList);
}

function listenButtonClick(button) {
  console.log(button);
  button.addEventListener("click", e => {
    resetAllCategoryButton(button.parentElement.className);
    console.log("Selected:", button.innerText);
    button.className = "selected";
    updateContainer();
  });
}

function resetAllCategoryButton(buttonGroupClassName) {
  const buttons = document.querySelectorAll(
    `.${buttonGroupClassName.substring(8)} button`
  );
  buttons.forEach(button => (button.className = ""));
}
const buttons = document.querySelectorAll(".actions button");
buttons.forEach(button => {
  listenButtonClick(button);
});
