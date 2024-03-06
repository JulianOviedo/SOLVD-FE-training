document.getElementById('dark-mode-toggle-checkbox').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode')
    document.getElementById('contactMe').classList.toggle('dark-mode-btn')
    document.getElementById('portfolio').classList.toggle('dark-mode-btn-experience')
    if (document.getElementById('container-btns').classList.contains('bckgrd-color-white')) {
        document.getElementById('container-btns').classList.replace('bckgrd-color-white', 'bckgrd-color-dark')
    }
    if (document.getElementById('container-btns').classList.contains('bckgrd-color-dark')) {
        document.getElementById('container-btns').classList.replace('bckgrd-color-dark', 'bckgrd-color-white')
    }
    document.getElementById('container-btns').classList.replace('bckgrd-color-white', 'bckgrd-color-dark')
})