function toggleButton(clickedButtonId) {
    var buttons = document.querySelectorAll('#portfolio, #skills');
    var body = document.body;

    buttons.forEach(function(button) {
        if (body.classList.contains("dark-mode")) {
            button.style.backgroundColor = '#333'; // Dark mode background color
        } else {
            button.style.backgroundColor = 'white'; // Light mode background color
        }

        if (button.id === clickedButtonId) {
            button.style.backgroundColor = 'lightgrey'; // Highlight the clicked button
        }
    });
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}