const themeToggle = document.querySelector(".theme-toggle-container__button");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
