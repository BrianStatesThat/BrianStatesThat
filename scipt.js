/*Menu List*/
function openMenu() {
  document.getElementById("menu").style.top = "0";
  document.getElementById("menu").style.display = "flex"
  }
  
  function closeMenu() {
    document.getElementById("menu").style.top = "-100vh";
    document.getElementById("menu").style.display = "fixed";
  }