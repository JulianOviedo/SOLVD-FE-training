function toggleButton(clickedButtonId) {
    var buttons = document.querySelectorAll('#portfolio, #skills');
    var body = document.body;

    buttons.forEach(function(button) {
        if (body.classList.contains("dark-mode")) {
            button.style.backgroundColor = '#333';
        } else {
            button.style.backgroundColor = 'white';
        }

        if (button.id === clickedButtonId) {
            button.style.backgroundColor = 'lightgrey'; 
        }
    });
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}