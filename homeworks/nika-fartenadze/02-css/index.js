const themeToggle = document.querySelector(".theme-toggle-button");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
