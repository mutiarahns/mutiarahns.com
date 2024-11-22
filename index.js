function toggleDarkMode() {
  const icon = document.getElementById("dark-mode-icon");
  const logo = document.getElementById("logo");
  const nameLogo = document.getElementById("name-logo");

  document.body.classList.toggle("dark-mode");
  document.querySelector(".header").classList.toggle("dark-mode");
  document
    .querySelectorAll(".header a")
    .forEach((a) => a.classList.toggle("dark-mode"));

  if (document.body.classList.contains("dark-mode")) {
    icon.src = "assets/icons/icon-light-mode.png";
    logo.src = "assets/images/logo-dark-mode.png";
    nameLogo.src = "assets/images/name-logo-dark-mode.png";
  } else {
    icon.src = "assets/icons/icon-dark-mode.png";
    logo.src = "assets/images/logo.png";
    nameLogo.src = "assets/images/name-logo.png";
  }
}
