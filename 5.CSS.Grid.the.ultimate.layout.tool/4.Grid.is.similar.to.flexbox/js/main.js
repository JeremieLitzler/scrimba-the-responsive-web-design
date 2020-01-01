function updateContainer() {
  let containers = document.querySelectorAll(".container");
  const buttonsSelected = document.querySelectorAll("button.selected");
  containers.forEach(container => {
    console.log("container.classList before: ", container.classList);
    let containerClass = `container ${container.title}`;
    buttonsSelected.forEach(
      button =>
        (containerClass += ` ${button.parentElement.title}-${button.innerText}`)
    );
    container.className = containerClass;
    console.log("container.classList after: ", container.classList);
  });
}
function setListenButtonClick(button) {
  console.log(button);
  button.addEventListener("click", e => {
    resetAllCategoryButton(button.parentElement.className);
    console.log("Selected:", button.innerText);
    button.className = "selected";
    updateContainer();
  });
}

function setListenInputChange(element) {
  console.log(element);
  element.addEventListener("input", e => {
    buttonSelect = document.querySelector(".selected");
    if (!buttonSelect) {
      console.warn("no grid-item selected");
      return;
    }

    var flexItem = document.querySelector(`.${buttonSelect.innerText}`);
    const inlineCss = `${element.title}: ${element.value};background-color:pink;`;
    flexItem.style = inlineCss;
  });
}

function resetAllCategoryButton(buttonGroupClassName) {
  const buttons = document.querySelectorAll(
    `.${buttonGroupClassName.substring(8)} button`
  );
  buttons.forEach(button => (button.className = ""));
}
const inputs = document.querySelectorAll(".actions input");
inputs.forEach(input => {
  setListenInputChange(input);
});
const buttons = document.querySelectorAll(".actions button");
buttons.forEach(button => {
  setListenButtonClick(button);
});

const resetBtn = document.querySelector(".action-reset button");
resetBtn.addEventListener("click", e => {});
