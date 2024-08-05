document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            if (email && password) {
                window.location.href = 'sport_selection.html';
            } else {
                alert('Please enter both email and password.');
            }
        });
    }

    const favoriteButtons = document.querySelectorAll('.favorite-button');
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('filled');
            if (this.classList.contains('filled')) {
                this.textContent = '★';
            } else {
                this.textContent = '☆';
            }
        });
    });

    const increaseFontButton = document.getElementById('increase-font');
    const decreaseFontButton = document.getElementById('decrease-font');
    const themeSwitcherButton = document.getElementById('theme-switcher');
    const body = document.body;

    function adjustFontSize(increase) {
        const elements = document.querySelectorAll('body, .card-title, .btn');
        elements.forEach(element => {
            let currentFontSize = window.getComputedStyle(element).fontSize;
            let newSize = increase ? parseFloat(currentFontSize) + 2 : parseFloat(currentFontSize) - 2;
            element.style.fontSize = newSize + 'px';
        });
    }

    increaseFontButton.addEventListener('click', function() {
        adjustFontSize(true);
    });

    decreaseFontButton.addEventListener('click', function() {
        adjustFontSize(false);
    });

    themeSwitcherButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');
    });

    if (!body.classList.contains('dark-mode') && !body.classList.contains('light-mode')) {
        body.classList.add('light-mode');
    }
});
