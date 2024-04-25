let hamburger = document.querySelector('.hamburger')
let nav = document.querySelector('.navigation')

hamburger.addEventListener('click', mobileMenu);
function mobileMenu() {
    nav.classList.toggle('active');
}

if(localStorage.darkMode && Number(localStorage.darkMode)){
    toggleDarkMode()
}

function toggleDarkMode() {
    document.body.classList.toggle("darkMode");
    localStorage.darkMode=document.body.classList.contains("darkMode")?1:0
}
