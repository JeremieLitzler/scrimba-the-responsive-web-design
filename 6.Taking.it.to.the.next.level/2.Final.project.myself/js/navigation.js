var togglingNavClass = "toggling-nav";

var closeNavBtn = document.querySelector(".close-nav");
var openNavButton = document.querySelector(".toggle-nav");
var navigationElement = document.querySelector("nav");

closeNavBtn.addEventListener("click", function(e) {
  navigationElement.classList.remove(togglingNavClass);
});
openNavButton.addEventListener("click", function(e) {
  navigationElement.classList.add(togglingNavClass);
  closeNavBtn.focus();
});
