document
  .getElementById("dark-mode-toggle-checkbox")
  .addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
    document.getElementById("contactMe").classList.toggle("dark-mode-button");
    document
      .getElementById("container-buttons")
      .classList.toggle("dark-mode-button");
    document
      .querySelector(".dark-mode-toggle__label")
      .classList.toggle("dark-mode");
    document.getElementById("toggleImg").classList.toggle("text-white");
    document.getElementById("toggleImg").classList.toggle("filter-white");
    document.querySelectorAll(".social-media img").forEach((el) => {
      el.classList.toggle("filter-white");
    });
  });
