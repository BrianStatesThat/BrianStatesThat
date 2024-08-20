/*Menu List*/
const menuToggle = document.getElementById('menu-toggle');
const closeBtn = document.getElementById('close-btn');

menuToggle.addEventListener("click", () => {
  document.getElementById('menu').classList.toggle("open");
});

closeBtn.addEventListener("click", () => {
  document.getElementById("menu").classList.remove("open");
});