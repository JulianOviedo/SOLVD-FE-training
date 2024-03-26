const scrollToTopBtn = document.getElementById("scrollToTopBtn");
const mobileWidth = 600;

function toggleScrollBtn() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    if (window.innerWidth <= mobileWidth) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

window.onscroll = toggleScrollBtn;
window.onresize = toggleScrollBtn;

scrollToTopBtn.addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
});
