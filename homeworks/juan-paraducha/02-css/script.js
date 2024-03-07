function toggleButton(clickedButtonId) {
    var buttons = document.querySelectorAll('#portfolio, #skills');
    
    buttons.forEach(function(button) {
        if (button.id === clickedButtonId) {
            button.style.backgroundColor = 'lightgrey'; 
        } else {
            button.style.backgroundColor = 'white';
        }
    });
}