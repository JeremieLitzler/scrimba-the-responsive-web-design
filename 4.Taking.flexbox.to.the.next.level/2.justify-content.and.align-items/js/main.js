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

function listenButtonClick(button, flexPropPrefix) {
  console.log(button);
  button.addEventListener("click", e => {
    resetAllCategoryButton(button.parentElement.className);
    console.log("Selected:", button.innerText);
    button.className = "selected";
    updateContainer();
  });
}

function resetAllCategoryButton(buttonGroupClassName) {
  const buttons = document.querySelectorAll(`.${buttonGroupClassName} button`);
  buttons.forEach(button => (button.className = ""));
}
const buttonsFlexDirection = document.querySelectorAll(
  ".actions-flex-direction button"
);
const buttonsJustifyContent = document.querySelectorAll(
  ".actions-justify-content button"
);
const buttonsAlignItems = document.querySelectorAll(
  ".actions-align-items button"
);
buttonsFlexDirection.forEach(button => {
  listenButtonClick(button, "fd");
});
buttonsAlignItems.forEach(button => {
  listenButtonClick(button, "ai");
});
buttonsJustifyContent.forEach(button => {
  listenButtonClick(button, "jc");
});
