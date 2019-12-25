function setListenButtonClick(button) {
  console.log(button);
  button.addEventListener("click", e => {
    resetAllCategoryButton(button.parentElement.className);
    console.log("Selected:", button.innerText);
    button.className = "selected";
  });
}

function setListenInputChange(element) {
  console.log(element);
  element.addEventListener("input", e => {
    buttonSelect = document.querySelector(".selected");
    if (!buttonSelect) {
      console.warn("no flex-item selected");
      return;
    }

    var flexItem = document.querySelector(`.${buttonSelect.innerText}`);
    flexItem.style = `${element.title}: ${element.value};background-color:pink;`;
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
resetBtn.addEventListener("click", e => {
  var flexItems = document.querySelectorAll(".flex-item");
  flexItems.forEach(item => (item.style = ""));
});
