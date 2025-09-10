

const luxonScript = document.createElement('script');
luxonScript.src = 'https://cdn.jsdelivr.net/npm/luxon@3.2.0/build/global/luxon.min.js';
document.head.appendChild(luxonScript);

let DateTime;

luxonScript.onload = function () {
    DateTime = window.luxon.DateTime;
}


function applyDarkMode(isDarkMode) {

    if (isDarkMode) {

        document.body.classList.add('dark-mode');

    } else {

        document.body.classList.remove('dark-mode');

    }

}

function handleToggleChange() {
    const isChecked = document.getElementById('darkModeToggleCheckbox').checked;
    localStorage.setItem('darkMode', isChecked);
    applyDarkMode(isChecked);
}

function loadUserPreference() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    applyDarkMode(darkMode);
    document.getElementById('darkModeToggleCheckbox').checked = darkMode;

    const icon = document.getElementById('darkModeToggle').querySelector('i');
    if (darkMode) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
}

// Event for hidden checkbox
document.getElementById('darkModeToggleCheckbox').addEventListener('change', handleToggleChange);

// Event for icon button
document.getElementById('darkModeToggle').addEventListener('click', function () {
    const toggle = document.getElementById('darkModeToggleCheckbox');
    toggle.checked = !toggle.checked;
    handleToggleChange();

    const icon = this.querySelector('i');
    if (toggle.checked) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});

window.addEventListener('load', loadUserPreference);
