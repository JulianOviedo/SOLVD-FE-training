document.addEventListener('DOMContentLoaded', function () {
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;

    modeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const currentMode = body.classList.contains('light-mode') ? 'light' : 'dark';
        localStorage.setItem('mode', currentMode);
        toggleModeImages();
    });

    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
        body.classList.toggle('light-mode', savedMode === 'light');
        toggleModeImages();
    }

    console.log("Hello, world!");
});


function toggleModeImages() {
    var modeToggleBtn = document.getElementById('mode-toggle');
    var lightModeImg = document.getElementById('light-mode-img');
    var darkModeImg = document.getElementById('dark-mode-img');

    if (!lightModeImg || !darkModeImg) return;


    var isDarkMode = document.body.classList.contains('light-mode');


    lightModeImg.style.display = isDarkMode ? 'inline' : 'none';
    darkModeImg.style.display = isDarkMode ? 'none' : 'inline';
}
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}