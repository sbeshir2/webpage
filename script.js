// script.js
// Handles the light/dark theme toggle for every page on the site.
// The theme itself is defined in style.css with CSS variables: adding
// the "dark_mode" class to <body> swaps in the dark color values.

// Grab the toggle button from the page (it has id="theme_toggler")
const themeToggler = document.querySelector('#theme_toggler');

// Updates the button text so it always describes what clicking will do
function updateButtonLabel() {
    if (document.body.classList.contains('dark_mode')) {
        themeToggler.textContent = 'Switch to Light Mode';
    } else {
        themeToggler.textContent = 'Switch to Dark Mode';
    }
}

// Saves the current theme in localStorage so it survives page reloads
// and carries over when the visitor moves to a different page
function saveTheme() {
    if (document.body.classList.contains('dark_mode')) {
        localStorage.setItem('website_theme', 'dark_mode');
    } else {
        localStorage.setItem('website_theme', 'default');
    }
}

// Reads the saved theme from localStorage (if there is one) and applies it
function retrieveTheme() {
    const theme = localStorage.getItem('website_theme');
    if (theme !== null) {
        // Clear both class names first, then add back the saved one
        document.body.classList.remove('default', 'dark_mode');
        document.body.classList.add(theme);
    }
    updateButtonLabel();
}

// When the button is clicked: flip the theme, save it, update the label
themeToggler.addEventListener('click', function () {
    document.body.classList.toggle('dark_mode');
    saveTheme();
    updateButtonLabel();
});

// If the theme is changed in another open tab, update this tab too
window.addEventListener('storage', function () {
    retrieveTheme();
}, false);

// Apply the saved theme as soon as the page loads
retrieveTheme();