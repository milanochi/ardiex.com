const mainMenu = document.querySelector(".navigation");
const showMenu = document.getElementById("sort-button");
const closeMenu = document.getElementById("close-Menu");
const linkFont = document.querySelectorAll(".font");

showMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.left = "30vw";
}
function close() {
  mainMenu.style.left = "120%";
}
linkFont.forEach((item) =>
  item.addEventListener("click", function () {
    mainMenu.style.display = null;
  })
);
