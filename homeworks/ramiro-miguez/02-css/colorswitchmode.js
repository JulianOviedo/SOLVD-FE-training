const toggleThemeButton = document.getElementById("theme-toggle");

toggleThemeButton.addEventListener("click", () => {
  console.log("lol");
  document.body.classList.toggle("light-mode");
});
