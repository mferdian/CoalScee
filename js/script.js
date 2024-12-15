// Toggle
const navbarNav = document.querySelector ('.navbar-nav');

document.querySelector('#menu').onclick = () => {
    navbarNav.classList.toggle('active')
};


const menuBar = document.querySelector('#menu');

document.addEventListener('click',function(e) {
    if(!menuBar.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})