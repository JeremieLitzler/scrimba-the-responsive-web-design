var openingNavClass = "opening-nav";
var closingNavClass = "closing-nav";
var closeNavBtn = document.querySelector(".close-nav");
var openNavButton = document.querySelector(".toggle-nav");
var navigationElement = document.querySelector("nav");

closeNavBtn.addEventListener("click", function(e) {
  navigationElement.classList.remove(openingNavClass);
  navigationElement.classList.add(closingNavClass);
});
openNavButton.addEventListener("click", function(e) {
  navigationElement.classList.remove(closingNavClass);
  navigationElement.classList.add(openingNavClass);
});
