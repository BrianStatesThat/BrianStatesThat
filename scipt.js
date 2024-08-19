/* Menu */
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelectorAll(".menu-toggle");
    const menu = document.querySelectorAll(".menu");

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle('open');
    });
});