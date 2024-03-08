document
  .getElementById("dark-mode-toggle-checkbox")
  .addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
    document.getElementById("contactMe").classList.toggle("dark-mode-btn");
    document.getElementById("container-btns").classList.toggle("dark-mode-btn");
    document
      .querySelector(".dark-mode-toggle__label")
      .classList.toggle("dark-mode");
    document.getElementById("toggleImg").classList.toggle("text-white");
    document.getElementById("toggleImg").classList.toggle("filter-white");
    document.querySelectorAll(".social-media img").forEach((el) => {
      el.classList.toggle("filter-white");
    });
  });
