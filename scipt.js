/*Menu List*/
const menuToggle = document.getElementById("menu-toggle");
const closeBtn = document.getElementById("close-btn");
const menuList = document.getElementById("menu");

menuToggle.addEventListener("click", () => menuList.classList.toggle("open"));

closeBtn.addEventListener("click", () => menuList.classList.remove("open"));