document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




const loginSection = document.getElementById('login-section');
const appSection = document.getElementById('app-section');
const usernameInput = document.getElementById('username');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const userDisplay = document.getElementById('user-display');
const themeToggleBtn = document.getElementById('theme-toggle');
const filterSelect = document.getElementById('filter-select');


document.addEventListener('DOMContentLoaded', () => {
    checkLoginStatus();
    loadTheme();
    loadFilter();
});

loginBtn.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    if (username) {
        localStorage.setItem('username', username);
        loginSection.style.display = 'none';
        appSection.style.display = 'block';
        userDisplay.textContent = username;
    }
});

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('username');
    checkLoginStatus();
});

function checkLoginStatus() {
    const username = localStorage.getItem('username');
    if (username) {
        userDisplay.textContent = username;
        loginSection.style.display = 'none';
        appSection.style.display = 'block';
    } else {
        loginSection.style.display = 'block';
        appSection.style.display = 'none';
    }
}


themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(savedTheme + '-mode');
}


filterSelect.addEventListener('change', () => {
    localStorage.setItem('filter', filterSelect.value);
    updateResults();
});

function loadFilter() {
    const savedFilter = localStorage.getItem('filter') || 'all';
    filterSelect.value = savedFilter;
    updateResults();
}

function updateResults() {
 
    console.log(`Current filter: ${filterSelect.value}`);
}