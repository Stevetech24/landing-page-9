const sideResponsiveBar = document.getElementById("responsive-side-bar");
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");

openMenu.addEventListener("click", () => {
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
  document.body.classList.toggle("no-scroll");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 480) {
    openMenu.style.display = "none";
    closeMenu.style.display = "none";
  }
});

closeMenu.addEventListener("click", () => {
  closeMenu.style.display = "none";
  openMenu.style.display = "block";
  document.body.classList.remove("no-scroll");
});
